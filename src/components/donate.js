import { useState } from "react";
import axios from "axios";

function Donate() {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [age, setAge] = useState("");
    const [slots, setSlots] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState({ status: false, msg: "" });

    const handleSubmit = async (e) => {
        setErrorMessage({ status: false, msg: '' });
        e.preventDefault();
        var mobile_regex = /^[0-9]{10}$/g;

        if (mobile !== '') {
            if (mobile_regex.test(mobile) === false) {
                setErrorMessage({ status: false, msg: 'Your phone number ' + mobile + ' is not in the correct format!' });
                return false;
            }
        } else {
            setErrorMessage({ status: false, msg: 'You have not entered your phone number!' });
            return false;
        }

        if (typeof age === 'number') {
            if (age < 18) {
                setErrorMessage({ status: false, msg: 'Below 18 age are not allowed to donate blood.' });
                return false;
            }
        } else {
            setErrorMessage({ status: false, msg: 'Please enter valid age.' });
            return false;
        }

        let payload = {
            name: name,
            mobile: mobile,
            slots: slots,
            age: age,
            message: message
        }

        let res = await axios.post("http://13.233.153.255:3001/users", payload);
        console.log(res, "res");
        if (res.status === 201) {
            setErrorMessage({ status: true, msg: "Your details submitted successfully." });
        } else {
            setErrorMessage({ status: false, msg: "Your details submitted successfully." });
        }
    }

    return (
        <section id="donate" class="contianer-fluid about-us">
            <div class="container">
                <div class="row session-title">
                    <h2 className="red">Donate Now</h2>
                    <p>Enter following details and select your own free slots now.</p>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-md-6 align-self-center">
                        <div class="form-card">
                            {
                                errorMessage.msg !== ""
                                    ?
                                    <div className="form-title">
                                        <h4 style={{
                                            padding: 2,
                                            color: "#fff",
                                            backgroundColor: errorMessage.status ? "#28a745" : "#de1f26",
                                            borderColor: errorMessage.status ? "#28a745" : "#de1f26"
                                        }}>{errorMessage.msg}</h4>
                                    </div>
                                    :
                                    null
                            }
                            <div class="form-body">
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <input type="text" onChange={(e) => setName(e.target.value)} defaultValue={name} required placeholder="Enter Name" class="form-control" />
                                    <input type="text" minLength={10} maxLength={10} onChange={(e) => setMobile(e.target.value)} defaultValue={mobile} required placeholder="Enter Mobile no" class="form-control" />
                                    <select class="form-control" onChange={(e) => setSlots(e.target.value)} value={slots} >
                                        <option value="">Select your free slots</option>
                                        <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                                        <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                                        <option value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</option>
                                        <option value="01:00 PM - 02:00 PM">01:00 PM - 02:00 PM</option>
                                        <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                                        <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
                                        <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                                        <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</option>
                                        <option value="06:00 PM - 07:00 PM">06:00 PM - 07:00 PM</option>
                                        <option value="07:00 PM - 08:00 PM">07:00 PM - 08:00 PM</option>
                                    </select>
                                    <input type="text" minLength={2} maxLength={2} onChange={(e) => setAge(parseInt(e.target.value))} defaultValue={age} required placeholder="Enter your age" class="form-control" />
                                    <textarea defaultValue={message} onChange={(e) => setMessage(e.target.value)} placeholder="Any important message or question you want to ask..." class="form-control" ></textarea>
                                    <button type="submit" class="btn btn-sm btn-primary w-100">Send Your Details</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Donate;