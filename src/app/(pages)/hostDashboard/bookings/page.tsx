"use client";
import RejectTenant from "@/components/hostDashboard/rejectTenant";
import AddRoom from "@/components/hostDashboard/addRoom";
import AddAppartment from "@/components/hostDashboard/addAppartment";
import { useState } from "react";
import App from "next/app";
import ApproveTenant from "@/components/hostDashboard/approveTenant";


export default function Page() {
    const [popupDisplay, setPopupDisplay] = useState("none");
    const [popup, setPopup] = useState(<AddRoom
        setPopupDisplay={setPopupDisplay}
    />);
    return (
        <>
            <div className="popup-wrapper"
                style={{
                    display: popupDisplay
                }}
            >
                {popup}
            </div>

            <div className="property-management-page">

                <div className="property-managemet-wrapper">

                    <div className="property-management-header">
                        <div className="property-management-header-left">
                            <button className="active">All rooms(100)</button>
                            <button>Available(20)</button>
                            <button>Booked(80)</button>
                        </div>
                        <div className="property-management-header-right add-buttons">
                            <button
                                onClick={() => {
                                    setPopupDisplay("flex");
                                    setPopup(<AddRoom
                                        setPopupDisplay={setPopupDisplay} />)
                                }}
                            >Add Room</button>
                            <button
                                onClick={() => {
                                    setPopupDisplay("flex");
                                    setPopup(<AddAppartment
                                        setPopupDisplay={setPopupDisplay} />)
                                }}
                            >Add Property</button>
                            <label className="dashboard-search-bar-label ">
                                <i className="fa-solid fa-search"></i>
                                <input type="text" placeholder="Search" />
                            </label>
                        </div>
                    </div>
                    <table className="performance-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Appartment</th>
                                <th>
                                    Price
                                </th>
                                <th>
                                    Tenants <i className="fa-solid fa-arrow-down"></i>
                                </th>
                                <th>Country</th>
                                <th>Location</th>
                                <th>Application Date</th>
                                <th>Status</th>
                                <th>More</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                onClick={() => {
                                    setPopupDisplay("flex");
                                    setPopup(<RejectTenant
                                        setPopupDisplay={setPopupDisplay} 
                                        />)
                                }}
                            >
                                <td>
                                    <div className="room-name-image">
                                        <input type="checkbox" />
                                        <div className="table-room-img-cont">
                                            <img src="https://s3-alpha-sig.figma.com/img/166c/cdfb/c990591814ccf3f54b1d7fb8f3b4b261?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=awHTvv31TKbTa5r5Aw7YbaZRzjGo7wzFTmrDucqZpkOsn6dWLiyvjcnFXpBNnlrA5jdjTIJFHknV20Tkw4dtbcMrydXQZutIPdXlNRfwDpMdmAg8-B2iSuLmZSQZSjlC-vYxVDCvbWLX5X33b6qgS83Qa-ZvoPss6BQZcKwGKisLunXbVvb4snyK39cBL2~OErklliBfRnodWhRXmUsK1dVMgaB1YXAsdDar~~avxQ4ZrBgyAT2w-1s1kMUeGENFAnwJ7pY8vmnZg5qlL8lrO0iMn0gS7P6O3cGTvLZKjnzrJzg8df5n7kwnEv5UvCbbtOJJ0S9iYzI50ElJnYA~oQ__" alt="" />
                                        </div>
                                        <p>Room 1</p>
                                    </div>
                                </td>
                                <td>Casa da Algeria</td>
                                <td>300$</td>
                                <td>
                                    <div className="room-name-image">
                                        <div className="table-tenant-img-cont">
                                            <img src="https://s3-alpha-sig.figma.com/img/166c/cdfb/c990591814ccf3f54b1d7fb8f3b4b261?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=awHTvv31TKbTa5r5Aw7YbaZRzjGo7wzFTmrDucqZpkOsn6dWLiyvjcnFXpBNnlrA5jdjTIJFHknV20Tkw4dtbcMrydXQZutIPdXlNRfwDpMdmAg8-B2iSuLmZSQZSjlC-vYxVDCvbWLX5X33b6qgS83Qa-ZvoPss6BQZcKwGKisLunXbVvb4snyK39cBL2~OErklliBfRnodWhRXmUsK1dVMgaB1YXAsdDar~~avxQ4ZrBgyAT2w-1s1kMUeGENFAnwJ7pY8vmnZg5qlL8lrO0iMn0gS7P6O3cGTvLZKjnzrJzg8df5n7kwnEv5UvCbbtOJJ0S9iYzI50ElJnYA~oQ__" alt="" />
                                        </div>
                                        <p>Olivia Rhye</p>
                                    </div>
                                </td>
                                <td>1596</td>
                                <td>Rua dos Amores, 42</td>
                                <td>01-01-2024</td>
                                <td>
                                    <div className="table-room-status online">
                                        <span>Accepted</span>
                                    </div>
                                </td>
                                <td>
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </td>
                            </tr>
                            <tr
                            onClick={() => {
                                setPopupDisplay("flex");
                                setPopup(<ApproveTenant
                                    setPopupDisplay={setPopupDisplay} 
                                    />)
                            }}
                            >
                                <td>
                                    <div className="room-name-image">
                                        <input type="checkbox" />
                                        <div className="table-room-img-cont">
                                            <img src="https://s3-alpha-sig.figma.com/img/166c/cdfb/c990591814ccf3f54b1d7fb8f3b4b261?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=awHTvv31TKbTa5r5Aw7YbaZRzjGo7wzFTmrDucqZpkOsn6dWLiyvjcnFXpBNnlrA5jdjTIJFHknV20Tkw4dtbcMrydXQZutIPdXlNRfwDpMdmAg8-B2iSuLmZSQZSjlC-vYxVDCvbWLX5X33b6qgS83Qa-ZvoPss6BQZcKwGKisLunXbVvb4snyK39cBL2~OErklliBfRnodWhRXmUsK1dVMgaB1YXAsdDar~~avxQ4ZrBgyAT2w-1s1kMUeGENFAnwJ7pY8vmnZg5qlL8lrO0iMn0gS7P6O3cGTvLZKjnzrJzg8df5n7kwnEv5UvCbbtOJJ0S9iYzI50ElJnYA~oQ__" alt="" />
                                        </div>
                                        <p>Room 1</p>
                                    </div>
                                </td>
                                <td>Casa da Algeria</td>
                                <td>300$</td>
                                <td>
                                    <div className="room-name-image">
                                        <div className="table-tenant-img-cont">
                                            <img src="https://s3-alpha-sig.figma.com/img/166c/cdfb/c990591814ccf3f54b1d7fb8f3b4b261?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=awHTvv31TKbTa5r5Aw7YbaZRzjGo7wzFTmrDucqZpkOsn6dWLiyvjcnFXpBNnlrA5jdjTIJFHknV20Tkw4dtbcMrydXQZutIPdXlNRfwDpMdmAg8-B2iSuLmZSQZSjlC-vYxVDCvbWLX5X33b6qgS83Qa-ZvoPss6BQZcKwGKisLunXbVvb4snyK39cBL2~OErklliBfRnodWhRXmUsK1dVMgaB1YXAsdDar~~avxQ4ZrBgyAT2w-1s1kMUeGENFAnwJ7pY8vmnZg5qlL8lrO0iMn0gS7P6O3cGTvLZKjnzrJzg8df5n7kwnEv5UvCbbtOJJ0S9iYzI50ElJnYA~oQ__" alt="" />
                                        </div>
                                        <p>Olivia Rhye</p>
                                    </div>
                                </td>
                                <td>1596</td>
                                <td>Rua dos Amores, 42</td>
                                <td>01-01-2024</td>
                                <td>
                                    <div className="table-room-status offline">
                                        <span>Rejected</span>
                                    </div>
                                </td>
                                <td>
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="room-name-image">
                                        <input type="checkbox" />
                                        <div className="table-room-img-cont">
                                            <img src="https://s3-alpha-sig.figma.com/img/166c/cdfb/c990591814ccf3f54b1d7fb8f3b4b261?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=awHTvv31TKbTa5r5Aw7YbaZRzjGo7wzFTmrDucqZpkOsn6dWLiyvjcnFXpBNnlrA5jdjTIJFHknV20Tkw4dtbcMrydXQZutIPdXlNRfwDpMdmAg8-B2iSuLmZSQZSjlC-vYxVDCvbWLX5X33b6qgS83Qa-ZvoPss6BQZcKwGKisLunXbVvb4snyK39cBL2~OErklliBfRnodWhRXmUsK1dVMgaB1YXAsdDar~~avxQ4ZrBgyAT2w-1s1kMUeGENFAnwJ7pY8vmnZg5qlL8lrO0iMn0gS7P6O3cGTvLZKjnzrJzg8df5n7kwnEv5UvCbbtOJJ0S9iYzI50ElJnYA~oQ__" alt="" />
                                        </div>
                                        <p>Room 1</p>
                                    </div>
                                </td>
                                <td>Casa da Algeria</td>
                                <td>300$</td>
                                <td>
                                    <div className="room-name-image">
                                        <div className="table-tenant-img-cont">
                                            <img src="https://s3-alpha-sig.figma.com/img/166c/cdfb/c990591814ccf3f54b1d7fb8f3b4b261?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=awHTvv31TKbTa5r5Aw7YbaZRzjGo7wzFTmrDucqZpkOsn6dWLiyvjcnFXpBNnlrA5jdjTIJFHknV20Tkw4dtbcMrydXQZutIPdXlNRfwDpMdmAg8-B2iSuLmZSQZSjlC-vYxVDCvbWLX5X33b6qgS83Qa-ZvoPss6BQZcKwGKisLunXbVvb4snyK39cBL2~OErklliBfRnodWhRXmUsK1dVMgaB1YXAsdDar~~avxQ4ZrBgyAT2w-1s1kMUeGENFAnwJ7pY8vmnZg5qlL8lrO0iMn0gS7P6O3cGTvLZKjnzrJzg8df5n7kwnEv5UvCbbtOJJ0S9iYzI50ElJnYA~oQ__" alt="" />
                                        </div>
                                        <p>Olivia Rhye</p>
                                    </div>
                                </td>
                                <td>1596</td>
                                <td>Rua dos Amores, 42</td>
                                <td>01-01-2024</td>
                                <td>
                                    <div className="table-room-status booked">
                                        <span>Waiting</span>
                                    </div>
                                </td>
                                <td>
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="room-name-image">
                                        <input type="checkbox" />
                                        <div className="table-room-img-cont">
                                            <img src="https://s3-alpha-sig.figma.com/img/166c/cdfb/c990591814ccf3f54b1d7fb8f3b4b261?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=awHTvv31TKbTa5r5Aw7YbaZRzjGo7wzFTmrDucqZpkOsn6dWLiyvjcnFXpBNnlrA5jdjTIJFHknV20Tkw4dtbcMrydXQZutIPdXlNRfwDpMdmAg8-B2iSuLmZSQZSjlC-vYxVDCvbWLX5X33b6qgS83Qa-ZvoPss6BQZcKwGKisLunXbVvb4snyK39cBL2~OErklliBfRnodWhRXmUsK1dVMgaB1YXAsdDar~~avxQ4ZrBgyAT2w-1s1kMUeGENFAnwJ7pY8vmnZg5qlL8lrO0iMn0gS7P6O3cGTvLZKjnzrJzg8df5n7kwnEv5UvCbbtOJJ0S9iYzI50ElJnYA~oQ__" alt="" />
                                        </div>
                                        <p>Room 1</p>
                                    </div>
                                </td>
                                <td>Casa da Algeria</td>
                                <td>300$</td>
                                <td>
                                    <div className="room-name-image">
                                        <div className="table-tenant-img-cont">
                                            <img src="https://s3-alpha-sig.figma.com/img/166c/cdfb/c990591814ccf3f54b1d7fb8f3b4b261?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=awHTvv31TKbTa5r5Aw7YbaZRzjGo7wzFTmrDucqZpkOsn6dWLiyvjcnFXpBNnlrA5jdjTIJFHknV20Tkw4dtbcMrydXQZutIPdXlNRfwDpMdmAg8-B2iSuLmZSQZSjlC-vYxVDCvbWLX5X33b6qgS83Qa-ZvoPss6BQZcKwGKisLunXbVvb4snyK39cBL2~OErklliBfRnodWhRXmUsK1dVMgaB1YXAsdDar~~avxQ4ZrBgyAT2w-1s1kMUeGENFAnwJ7pY8vmnZg5qlL8lrO0iMn0gS7P6O3cGTvLZKjnzrJzg8df5n7kwnEv5UvCbbtOJJ0S9iYzI50ElJnYA~oQ__" alt="" />
                                        </div>
                                        <p>Olivia Rhye</p>
                                    </div>
                                </td>
                                <td>1596</td>
                                <td>Rua dos Amores, 42</td>
                                <td>01-01-2024</td>
                                <td>
                                    <div className="table-room-status booked">
                                        <span>waiting</span>
                                    </div>
                                </td>
                                <td>
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="property-management-bottom">
                        <button>
                            <i className="fa-solid fa-arrow-left"></i>
                            previous
                        </button>
                        <div className="pagination">
                            <p className="active">1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>...</p>
                            <p>8</p>
                            <p>9</p>
                            <p>10</p>
                        </div>
                        <button>
                            Next
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                </div>

            </div>
        </>
    );
}