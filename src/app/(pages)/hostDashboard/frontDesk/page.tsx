"use client";
import Calendar from '@/components/calendar';
import CreateReservation from '@/components/hostDashboard/createReservation';
import React, { useState } from 'react';

export default function Page() {
    const [popupDisplay, setPopupDisplay] = useState("none");
    const [popup, setPopup] = useState(<CreateReservation
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
        <div className="frontdesk-wrapper">
            <div className="frontdesk-upper-part">
                <h2>Front Desk</h2>
                <div className="frontdesk-upper-part-body">
                    <div className="frontdesk-upper-part-left">
                        <div className="property-management-header-left">
                            <button className="active">All rooms(5)</button>
                            <button>Single</button>
                            <button>Double</button>
                            <button>Triple</button>
                            <button>VIP</button>
                        </div>
                        <div className="calendar-container">
                            <div className="check-calendar">
                                <Calendar container={{ type: "Check In" }} />
                            </div>

                            <div className="check-calendar">
                                <Calendar container={{ type: "Check Out" }} />
                            </div>
                        </div>
                        <div className="adult-children-fill">
                            <div className="fill">
                                <div className="fill-content">
                                    <h3>Adult</h3>
                                    <p>Other than 12years</p>
                                </div>
                                <div className='fill-btn'>
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className="fill">
                                <div className="fill-content">
                                    <h3>Children</h3>
                                    <p>0 to 12years</p>
                                </div>
                                <div className="fill-btn">
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="create-reservation-btn"
                    onClick={() => {
                        setPopupDisplay("flex");
                    }}
                    >
                        Create Reservation
                    </button>
                </div>
            </div>
            <div className="frontdesk-bottom-part">
                <table className="performance-table">
                    <thead>
                        <tr>
                            <th>Room Number</th>
                            <th>Bed Type</th>
                            <th>Room floor</th>
                            <th>Room facility</th>
                            <th>Status</th>
                            <th>More</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>#045</p>
                            </td>
                            <td>Double bed</td>
                            <td>Floor 1</td>
                            <td>AC, shower, Double bed, towel bathtub, TV</td>
                            <td>
                                <div className="table-room-status online">
                                    <i className="fa-solid fa-circle"></i>
                                    <span>Online</span>
                                </div>
                            </td>
                            <td>
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>#045</p>
                            </td>
                            <td>Double bed</td>
                            <td>Floor 1</td>
                            <td>AC, shower, Double bed, towel bathtub, TV</td>
                            <td>
                                <div className="table-room-status online">
                                    <i className="fa-solid fa-circle"></i>
                                    <span>Available</span>
                                </div>
                            </td>
                            <td>
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}