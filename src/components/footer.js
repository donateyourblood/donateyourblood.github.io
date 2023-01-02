import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants.js";


function Footer() {
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

        if (!isNaN(parseInt(age))) {
            if (parseInt(age) < 18) {
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

        let res = await axios.post(`${BASE_URL}/users`, payload);

        if (res.status === 201) {
            setErrorMessage({ status: true, msg: "Your details submitted successfully." });
            setName(""); setMobile(""); setAge(""); setSlots(""); setMessage("");
        } else {
            setErrorMessage({ status: false, msg: "Something went wrong." });
        }
    }

    return (
        <footer id="contact" class="container-fluid">
            <div class="container">

                <div class="row content-ro">
                    <div class="col-lg-4 col-md-12 footer-contact">
                        <h2>Contact Information</h2>
                        <div class="address-row">
                            <div class="icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="detail">
                                <p>Old Raviraj Complex, Jesal Park, <br /> Bhayander East, Thane - 401105</p>
                            </div>
                        </div>
                        <div class="address-row">
                            <div class="icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="detail">
                                <p>Kashish Gupta <br /><a href="tel:+917045988319">+91 7045988319</a></p>
                            </div>
                        </div>
                        <div class="address-row">
                            <div class="icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="detail">
                                <p>Palak Deora <br /><a href="tel:+918850974092">+91 8850974092</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 footer-links">
                        <div class="row no-margin mt-2">
                            <iframe src="//maps.google.com/maps?q=19.315735, 72.855931&z=15&output=embed"></iframe>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 footer-form">
                        <div class="form-card">
                            <div class="form-title">
                                <h4>Quickly Add Your Details here...</h4>
                            </div>
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
                                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} required placeholder="Enter Name" class="form-control" />
                                    <input type="number" minLength={10} maxLength={10} onChange={(e) => setMobile(e.target.value)} value={mobile} required placeholder="Enter Mobile no" class="form-control" />
                                    <select class="form-control" onChange={(e) => setSlots(e.target.value)} value={slots} >
                                        <option value="">Select your free slots</option>
                                        <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                                        <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                                        <option value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</option>
                                        <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                                        <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
                                        <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                                    </select>
                                    <input type="number" minLength={2} maxLength={2} onChange={(e) => setAge(e.target.value)} value={age} required placeholder="Enter your age" class="form-control" />
                                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Any important message or question you want to ask..." class="form-control" ></textarea>
                                    <button type="submit" class="btn btn-sm btn-primary w-100">Send Your Details</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;