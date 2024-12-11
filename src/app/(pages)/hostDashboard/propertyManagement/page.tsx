"use client";
import AddRoom from "@/components/hostDashboard/addRoom";
import AddAppartment from "@/components/hostDashboard/addAppartment";
import { useState } from "react";


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
                                    setPopupDisplay={setPopupDisplay}/>)
                            }}
                            >Add Room</button>
                            <button
                            onClick={() => {
                                setPopupDisplay("flex");
                                setPopup(<AddAppartment
                                    setPopupDisplay={setPopupDisplay}/>)
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
                                <th>

                                    Name
                                </th>
                                <th>
                                    Status <i className="fa-solid fa-arrow-down"></i>
                                </th>
                                <th>Appartment</th>
                                <th>Date published</th>
                                <th>Price</th>
                                <th>Listing ID</th>
                                <th>Location</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
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
                                <td>
                                    <div className="table-room-status online">
                                        <i className="fa-solid fa-circle"></i>
                                        <span>Online</span>
                                    </div>
                                </td>
                                <td>
                                    Appartment 01
                                </td>
                                <td>
                                    01-01-2024
                                </td>
                                <td>
                                    $500
                                </td>
                                <td>
                                    A1596
                                </td>
                                <td>
                                    Norrsken House 1KN 78 St
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
                                            <img src="https://s3-alpha-sig.figma.com/img/0883/4bcd/ace440fc20b529a6ae4ca2c2a27e6d17?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qlEa8mC7QNzsi~mEAMm3g1rQiJX8p~aC2efBmOnrU3E32ZK~ToEFvP2-Tql5egdF2fJw1JlWnHSMtsrhjxXKsCICmSahTXJ-Ckz9yzgER1DSMFwtL5pNE51tfnIDbsksdNtTBvhd2cPJoToHGFb7ZswHhl0kN~G1-y6UInNPHAfVyiiCXLtDzmoGJSNZjxr43xv4zP88rpUKqqYakcfAxQV0J7xi0b46nbO9KDreEuzQaCDK8n~VhjOOVx7LPhsNEzwQjdfe7pT7NDl5FvKi7LwEIKYXKt86MCLs~NwdymZ9L50H3dcXKGgbt-5BDC5uZI9tRDSqnfhgnKeIZ6KjIw__" alt="" />
                                        </div>
                                        <p>Room 2</p>
                                    </div>


                                </td>
                                <td>
                                    <div className="table-room-status online">
                                        <i className="fa-solid fa-circle"></i>
                                        <span>Online</span>
                                    </div>
                                </td>
                                <td>
                                    Appartment 01
                                </td>
                                <td>
                                    01-01-2024
                                </td>
                                <td>
                                    $500
                                </td>
                                <td>
                                    A1596
                                </td>
                                <td>
                                    Norrsken House 1KN 78 St
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
                                            <img src="https://s3-alpha-sig.figma.com/img/0e8f/d8b8/7d5e6eaa348d7f41559844a7e86a8a20?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jcB~OWVNNkVln2ddQmkkC-vjIlGYC34S1veJxfiHq~ykVvdX7bk4~BADWXP6RX-SEEe2YXDju04tnHAR0cL1B5OlsiPXHkwPYjhHzJxCB1paoCdYW0p2QNIdAHqsJrL1QBROuhJokx0CsSHZ2JYkbBIh7ci0-eVSPix3Lk-g7CMK-EmivjDwsnqYy1lm3os8Yf7wh52BgXf-ROUnu3YpBJv2m8fhUwI6GITSEf3dJZGR~1FjzkOIp2cglju01-cWTMFT5iFLqXM0zabHnCtJ3~iSpYYnET7cjvrSVZKvRJ0AEltvMlBpKGMBq9~DNc~yFlh8vwq4w1d2QJ47rl1BiQ__" alt="" />
                                        </div>
                                        <p>Room 3</p>
                                    </div>


                                </td>
                                <td>
                                    <div className="table-room-status offline">
                                        <i className="fa-solid fa-circle"></i>
                                        <span>Offline</span>
                                    </div>
                                </td>
                                <td>
                                    Appartment 01
                                </td>
                                <td>
                                    01-01-2024
                                </td>
                                <td>
                                    $500
                                </td>
                                <td>
                                    A1596
                                </td>
                                <td>
                                    Norrsken House 1KN 78 St
                                </td>
                                <td>
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="room-name-image">
                                        <input type="checkbox" />
                                        <div className="table-room-img-cont blocked">
                                            <img src="https://a0.muscache.com/im/pictures/1ff6d909-5ba6-42f3-9d2c-fa2327780936.jpg?im_w=1920" alt="" />
                                        </div>
                                        <p>Room 4</p>

                                    </div>


                                </td>
                                <td>
                                    <div className="table-room-status booked">
                                        <i className="fa-solid fa-circle"></i>
                                        <span>booked</span>
                                    </div>
                                </td>
                                <td>
                                    Appartment 01
                                </td>
                                <td>
                                    01-01-2024
                                </td>
                                <td>
                                    $500
                                </td>
                                <td>
                                    A1596
                                </td>
                                <td>
                                    Norrsken House 1KN 78 St
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
                                <td>
                                    <div className="table-room-status online">
                                        <i className="fa-solid fa-circle"></i>
                                        <span>Online</span>
                                    </div>
                                </td>
                                <td>
                                    Appartment 01
                                </td>
                                <td>
                                    01-01-2024
                                </td>
                                <td>
                                    $500
                                </td>
                                <td>
                                    A1596
                                </td>
                                <td>
                                    Norrsken House 1KN 78 St
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
                                            <img src="https://s3-alpha-sig.figma.com/img/0883/4bcd/ace440fc20b529a6ae4ca2c2a27e6d17?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qlEa8mC7QNzsi~mEAMm3g1rQiJX8p~aC2efBmOnrU3E32ZK~ToEFvP2-Tql5egdF2fJw1JlWnHSMtsrhjxXKsCICmSahTXJ-Ckz9yzgER1DSMFwtL5pNE51tfnIDbsksdNtTBvhd2cPJoToHGFb7ZswHhl0kN~G1-y6UInNPHAfVyiiCXLtDzmoGJSNZjxr43xv4zP88rpUKqqYakcfAxQV0J7xi0b46nbO9KDreEuzQaCDK8n~VhjOOVx7LPhsNEzwQjdfe7pT7NDl5FvKi7LwEIKYXKt86MCLs~NwdymZ9L50H3dcXKGgbt-5BDC5uZI9tRDSqnfhgnKeIZ6KjIw__" alt="" />
                                        </div>
                                        <p>Room 2</p>
                                    </div>


                                </td>
                                <td>
                                    <div className="table-room-status online">
                                        <i className="fa-solid fa-circle"></i>
                                        <span>Online</span>
                                    </div>
                                </td>
                                <td>
                                    Appartment 01
                                </td>
                                <td>
                                    01-01-2024
                                </td>
                                <td>
                                    $500
                                </td>
                                <td>
                                    A1596
                                </td>
                                <td>
                                    Norrsken House 1KN 78 St
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
                                            <img src="https://s3-alpha-sig.figma.com/img/0e8f/d8b8/7d5e6eaa348d7f41559844a7e86a8a20?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jcB~OWVNNkVln2ddQmkkC-vjIlGYC34S1veJxfiHq~ykVvdX7bk4~BADWXP6RX-SEEe2YXDju04tnHAR0cL1B5OlsiPXHkwPYjhHzJxCB1paoCdYW0p2QNIdAHqsJrL1QBROuhJokx0CsSHZ2JYkbBIh7ci0-eVSPix3Lk-g7CMK-EmivjDwsnqYy1lm3os8Yf7wh52BgXf-ROUnu3YpBJv2m8fhUwI6GITSEf3dJZGR~1FjzkOIp2cglju01-cWTMFT5iFLqXM0zabHnCtJ3~iSpYYnET7cjvrSVZKvRJ0AEltvMlBpKGMBq9~DNc~yFlh8vwq4w1d2QJ47rl1BiQ__" alt="" />
                                        </div>
                                        <p>Room 3</p>
                                    </div>


                                </td>
                                <td>
                                    <div className="table-room-status offline">
                                        <i className="fa-solid fa-circle"></i>
                                        <span>Offline</span>
                                    </div>
                                </td>
                                <td>
                                    Appartment 01
                                </td>
                                <td>
                                    01-01-2024
                                </td>
                                <td>
                                    $500
                                </td>
                                <td>
                                    A1596
                                </td>
                                <td>
                                    Norrsken House 1KN 78 St
                                </td>
                                <td>
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="room-name-image">
                                        <input type="checkbox" />
                                        <div className="table-room-img-cont blocked">
                                            <img src="https://a0.muscache.com/im/pictures/1ff6d909-5ba6-42f3-9d2c-fa2327780936.jpg?im_w=1920" alt="" />
                                        </div>
                                        <p>Room 4</p>

                                    </div>


                                </td>
                                <td>
                                    <div className="table-room-status booked">
                                        <i className="fa-solid fa-circle"></i>
                                        <span>booked</span>
                                    </div>
                                </td>
                                <td>
                                    Appartment 01
                                </td>
                                <td>
                                    01-01-2024
                                </td>
                                <td>
                                    $500
                                </td>
                                <td>
                                    A1596
                                </td>
                                <td>
                                    Norrsken House 1KN 78 St
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
                                <td>
                                    <div className="table-room-status online">
                                        <i className="fa-solid fa-circle"></i>
                                        <span>Online</span>
                                    </div>
                                </td>
                                <td>
                                    Appartment 01
                                </td>
                                <td>
                                    01-01-2024
                                </td>
                                <td>
                                    $500
                                </td>
                                <td>
                                    A1596
                                </td>
                                <td>
                                    Norrsken House 1KN 78 St
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
                                            <img src="https://s3-alpha-sig.figma.com/img/0883/4bcd/ace440fc20b529a6ae4ca2c2a27e6d17?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qlEa8mC7QNzsi~mEAMm3g1rQiJX8p~aC2efBmOnrU3E32ZK~ToEFvP2-Tql5egdF2fJw1JlWnHSMtsrhjxXKsCICmSahTXJ-Ckz9yzgER1DSMFwtL5pNE51tfnIDbsksdNtTBvhd2cPJoToHGFb7ZswHhl0kN~G1-y6UInNPHAfVyiiCXLtDzmoGJSNZjxr43xv4zP88rpUKqqYakcfAxQV0J7xi0b46nbO9KDreEuzQaCDK8n~VhjOOVx7LPhsNEzwQjdfe7pT7NDl5FvKi7LwEIKYXKt86MCLs~NwdymZ9L50H3dcXKGgbt-5BDC5uZI9tRDSqnfhgnKeIZ6KjIw__" alt="" />
                                        </div>
                                        <p>Room 2</p>
                                    </div>


                                </td>
                                <td>
                                    <div className="table-room-status online">
                                        <i className="fa-solid fa-circle"></i>
                                        <span>Online</span>
                                    </div>
                                </td>
                                <td>
                                    Appartment 01
                                </td>
                                <td>
                                    01-01-2024
                                </td>
                                <td>
                                    $500
                                </td>
                                <td>
                                    A1596
                                </td>
                                <td>
                                    Norrsken House 1KN 78 St
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
                                            <img src="https://s3-alpha-sig.figma.com/img/0e8f/d8b8/7d5e6eaa348d7f41559844a7e86a8a20?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jcB~OWVNNkVln2ddQmkkC-vjIlGYC34S1veJxfiHq~ykVvdX7bk4~BADWXP6RX-SEEe2YXDju04tnHAR0cL1B5OlsiPXHkwPYjhHzJxCB1paoCdYW0p2QNIdAHqsJrL1QBROuhJokx0CsSHZ2JYkbBIh7ci0-eVSPix3Lk-g7CMK-EmivjDwsnqYy1lm3os8Yf7wh52BgXf-ROUnu3YpBJv2m8fhUwI6GITSEf3dJZGR~1FjzkOIp2cglju01-cWTMFT5iFLqXM0zabHnCtJ3~iSpYYnET7cjvrSVZKvRJ0AEltvMlBpKGMBq9~DNc~yFlh8vwq4w1d2QJ47rl1BiQ__" alt="" />
                                        </div>
                                        <p>Room 3</p>
                                    </div>


                                </td>
                                <td>
                                    <div className="table-room-status offline">
                                        <i className="fa-solid fa-circle"></i>
                                        <span>Offline</span>
                                    </div>
                                </td>
                                <td>
                                    Appartment 01
                                </td>
                                <td>
                                    01-01-2024
                                </td>
                                <td>
                                    $500
                                </td>
                                <td>
                                    A1596
                                </td>
                                <td>
                                    Norrsken House 1KN 78 St
                                </td>
                                <td>
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="room-name-image">
                                        <input type="checkbox" />
                                        <div className="table-room-img-cont blocked">
                                            <img src="https://a0.muscache.com/im/pictures/1ff6d909-5ba6-42f3-9d2c-fa2327780936.jpg?im_w=1920" alt="" />
                                        </div>
                                        <p>Room 4</p>

                                    </div>


                                </td>
                                <td>
                                    <div className="table-room-status booked">
                                        <i className="fa-solid fa-circle"></i>
                                        <span>booked</span>
                                    </div>
                                </td>
                                <td>
                                    Appartment 01
                                </td>
                                <td>
                                    01-01-2024
                                </td>
                                <td>
                                    $500
                                </td>
                                <td>
                                    A1596
                                </td>
                                <td>
                                    Norrsken House 1KN 78 St
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