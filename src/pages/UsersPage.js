
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants.js";

function UsersPage() {

    const [tableData, setTableData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [message, setMessage] = useState("");

    const [userData, setUserData] = useState({
        name: "",
        mobile: "",
        age: "",
        slots: "",
        message: "",
        status: "applicable"
    });

    const loadData = async () => {
        let res = await axios.get("http://localhost:3001/users");

        if (res.status === 200 && res?.data?.data) {
            setTableData(res.data.data?.users);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    const handleEdit = (row) => {
        setIsEdit(true);
        setUserData(row);
        setShowModal(true);
        setMessage("");
    }

    const handleModalClose = () => {
        setIsEdit(false);
        setUserData({
            name: "",
            mobile: "",
            age: "",
            slots: "",
            message: "",
            status: "applicable"
        });
        setShowModal(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEdit) {
            try {
                await axios.put(`${BASE_URL}/users`, userData);
                setMessage({ status: true, msg: "Data updated successfully" });
                handleModalClose();
                loadData();
            } catch (error) {
                setMessage({ status: false, msg: error?.response?.data?.message });
            }
        } else {
            try {
                await axios.post(`${BASE_URL}/users`, userData);
                setMessage({ status: true, msg: "New data added successfully" });
                handleModalClose();
                loadData();
            } catch (error) {
                setMessage({ status: false, msg: error?.response?.data?.message });
            }
        }
    }

    return (
        <>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>Users</b> ({tableData ? tableData.length : 0})</h2>
                                </div>
                                <div className="col-sm-6">
                                    <button className="btn btn-success" onClick={() => setShowModal(true)}><i className="fa fa-plus"></i> <span>Add New</span></button>
                                </div>
                            </div>
                        </div>
                        {
                            message && message.status
                                ?
                                <div className={"alert alert-success alert-dismissible fade show"} role="alert">
                                    {message.msg}
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setMessage("")}><i className="fa fa-times"></i></button>
                                </div>
                                :
                                null
                        }

                        <table className="table table-striped table-hover w-100">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Details</th>
                                    <th>Slots</th>
                                    <th>Message</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableData && tableData.length > 0
                                        ?
                                        tableData.map(function (row, key) {
                                            return (
                                                <tr key={key} className={row.status === "not applicable" ? "redbg" : ""}>
                                                    <td>{key + 1}</td>
                                                    <td>
                                                        <p>Name: <span>{row.name}</span></p>
                                                        <p>Phone: <a href={`tel: +91${row.mobile}`}>{row.mobile}</a></p>
                                                        <p>Age: <span>{row.age}</span></p>
                                                    </td>
                                                    <td>{row.slots}</td>
                                                    <td>{row.message}</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button className="btn btn-info" onClick={() => handleEdit(row)}><i className="fa fa-pen" data-toggle="tooltip" title="Edit"></i></button>
                                                            {/* <button className="btn btn-danger"><i className="fa fa-trash" data-toggle="tooltip" title="Delete"></i></button> */}
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        :
                                        null
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {
                showModal
                    ?
                    <>
                        <div id="addEmployeeModal" className="modal fade show" style={{ display: "block" }}>

                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <form>
                                        <div className="modal-header">
                                            <h4 className="modal-title">Add</h4>
                                            <button type="button" className="close" onClick={() => handleModalClose()}>&times;</button>
                                        </div>
                                        <div className="modal-body">
                                            {
                                                message
                                                    ?
                                                    <div className={message.status ? "alert alert-success alert-dismissible fade show" : "alert alert-danger alert-dismissible fade show"} role="alert">
                                                        {message.msg}
                                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setMessage("")}><i className="fa fa-times"></i></button>
                                                    </div>
                                                    :
                                                    null
                                            }
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" onChange={(e) => setUserData({ ...userData, name: e.target.value })} value={userData.name} required placeholder="Enter Name" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Mobile</label>
                                                <input type="text" minLength={10} maxLength={10} onChange={(e) => setUserData({ ...userData, mobile: e.target.value })} value={userData.mobile} required placeholder="Enter Mobile no" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Slots</label>
                                                <select className="form-control" onChange={(e) => setUserData({ ...userData, slots: e.target.value })} value={userData.slots}  >
                                                    <option value="">Select your free slots</option>
                                                    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                                                    <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                                                    <option value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</option>
                                                    <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                                                    <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
                                                    <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Age</label>
                                                <input type="text" minLength={2} maxLength={2} onChange={(e) => setUserData({ ...userData, age: e.target.value })} value={userData.age} required placeholder="Enter your age" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Status</label>
                                                <select className="form-control" onChange={(e) => setUserData({ ...userData, status: e.target.value })} value={userData.status}>
                                                    <option value={"applicable"}>Applicable</option>
                                                    <option value={"not applicable"}>Not Applicable</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Message</label>
                                                <textarea onChange={(e) => setUserData({ ...userData, message: e.target.value })} value={userData.message} placeholder="Any important message or reason for not applicable..." className="form-control" ></textarea>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <input type="button" className="btn btn-default" onClick={() => handleModalClose()} value="Cancel" />
                                            <input type="submit" className="btn btn-success" value="Submit" onClick={(e) => handleSubmit(e)} />
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                        <div className="modal-backdrop fade show"></div>
                    </>
                    :
                    null
            }
        </>
    );
}


export default UsersPage;