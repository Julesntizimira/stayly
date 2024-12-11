export default function HostDashboardPage() {
    return (
        <>
            <div className="dashboard-right-side-heading">

                <div className="host-dashboard-add-container">
                    <p>Friday, November 18,2022</p>
                    <div className="add-buttons">
                        <button>Add Room</button>
                        <button>Add Property</button>
                    </div>
                </div>
            </div>
            <div className="dashboard-right-side-body">
                <section className="overview-section">
                    <h2>overview</h2>
                    <div className="overview-content">
                        <div className="overview-container">
                            <div>
                                <h3>Todays&apos;</h3>
                                <p>Check-in</p>
                            </div>
                            <span className="overview-number">23</span>
                        </div>
                        <div className="overview-container">
                            <div>
                                <h3>Todays&apos;</h3>
                                <p>Check-out</p>
                            </div>
                            <span className="overview-number">13</span>
                        </div>
                        <div className="overview-container">
                            <div>
                                <h3>Total</h3>
                                <p>In room</p>
                            </div>
                            <span className="overview-number">60</span>
                        </div>
                        <div className="overview-container">
                            <div>
                                <h3>Total</h3>
                                <p>Available Rooms</p>
                            </div>
                            <span className="overview-number">10</span>
                        </div>
                        <div className="overview-container">
                            <div>
                                <h3>Total</h3>
                                <p>Occupied Rooms</p>
                            </div>
                            <span className="overview-number">90</span>
                        </div>
                    </div>
                </section>
                <section className="overview-section">
                    <h2>Rooms</h2>
                    <div className="overview-content">
                        <div className="dashboard-room-container">
                            <p className="deals">2Deals</p>
                            <p className="normalp">single sharing</p>
                            <p className="normalp">2/30</p>
                            <p className="normalp"><span>$ 568</span>/ day</p>
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                        <div className="dashboard-room-container">
                            <p className="deals">2Deals</p>
                            <p className="normalp">single sharing</p>
                            <p className="normalp">2/30</p>
                            <p className="normalp"><span>$ 568</span>/ day</p>
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                        <div className="dashboard-room-container">
                            <p className="deals">2Deals</p>
                            <p className="normalp">single sharing</p>
                            <p className="normalp">2/30</p>
                            <p className="normalp"><span>$ 568</span>/ day</p>
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                        <div className="dashboard-room-container">
                            <p className="deals">2Deals</p>
                            <p className="normalp">single sharing</p>
                            <p className="normalp">2/30</p>
                            <p className="normalp"><span>$ 568</span>/ day</p>
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                </section>
                <div className="host-sections-row">
                    <section className="room-status overview-section">
                        <h2>Room Status</h2>
                        <div className="room-status-body-container">
                            <div className="room-status-content">
                                <p>Occupied rooms<span>104</span></p>
                                <p>Clean <span>90</span></p>
                                <p>Dirty <span>10</span></p>
                                <p>Inspected <span>4</span></p>
                            </div>
                            <div className="room-status-content">
                                <p>Occupied rooms<span>104</span></p>
                                <p>Clean <span>90</span></p>
                                <p>Dirty <span>10</span></p>
                                <p>Inspected <span>4</span></p>
                            </div>
                        </div>
                    </section>
                    <section className="floor-status overview-section">
                        <h2>Floor Status</h2>
                        <div className="room-status-body-container">
                            <div className="floor-status-diagram">
                                <svg width="201" height="140" viewBox="0 0 201 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M190.5 100C190.5 88.181 188.172 76.4778 183.649 65.5585C179.126 54.6392 172.497 44.7177 164.14 36.3604C155.782 28.0031 145.861 21.3738 134.942 16.8508C124.022 12.3279 112.319 10 100.5 10C88.681 9.99999 76.9779 12.3279 66.0585 16.8508C55.1392 21.3737 45.2177 28.0031 36.8604 36.3604C28.5031 44.7176 21.8738 54.6391 17.3509 65.5584C12.8279 76.4777 10.5 88.181 10.5 100" stroke="#F8EFE2" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 100C10.5 80.9939 16.517 62.4756 27.6885 47.0993C38.86 31.723 54.6126 20.2781 72.6885 14.4049C90.7644 8.53169 110.236 8.5317 128.312 14.4049C146.387 20.2781 162.14 31.7231 173.312 47.0994" stroke="#4A60A1" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="status-percentage">80%</p>
                            </div>
                            <div className="floor-status-legend">
                                <div className="legend-cont">
                                    <div className="legend-dot-completed"></div>
                                    <span>completed</span>
                                </div>
                                <div className="legend-cont">
                                    <div className="legend-dot-uncompleted"></div>
                                    <span>not completed</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="host-sections-row">
                    <section className="overview-section">
                        <h2>Occupancy Statistics
                            <button className="overview-top-btn">
                                <i className="fa-regular fa-calendar"></i>
                                Monthly
                            </button>
                        </h2>
                        <div className="candlestic-container">
                            <div className="candlestic-percentages">
                                <span>100%</span>
                                <span>75%</span>
                                <span>50%</span>
                                <span>25%</span>
                                <span>0%</span>
                            </div>
                            <div className="candlestic">
                                <p></p>
                                <span>Jan</span>
                            </div>
                            <div className="candlestic">
                                <p></p>
                                <span>Feb</span>
                            </div>
                            <div className="candlestic">
                                <p></p>
                                <span>Mar</span>
                            </div>
                            <div className="candlestic">
                                <p></p>
                                <span>Apr</span>
                            </div>
                            <div className="candlestic">
                                <p></p>
                                <span>May</span>
                            </div>
                            <div className="candlestic">
                                <p></p>
                                <span>Jun</span>
                            </div>
                            <div className="candlestic">
                                <p></p>
                                <span>Jul</span>
                            </div>
                            <div className="candlestic">
                                <p></p>
                                <span>Aug</span>
                            </div>
                            <div className="candlestic">
                                <p></p>
                                <span>Sep</span>
                            </div>
                            <div className="candlestic">
                                <p></p>
                                <span>Oct</span>
                            </div>
                            <div className="candlestic">
                                <p></p>
                                <span>Nov</span>
                            </div>
                            <div className="candlestic">
                                <p></p>
                                <span>Dec</span>
                            </div>
                        </div>
                    </section>
                    <section className="overview-section">
                        <h2>
                            Customer’s Feedback
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </h2>
                        <div className="feedback-cont">
                            <div className="feedback">
                                <div className="feedback-content">
                                    <h3>Mark</h3>
                                    <p>Food could be better.</p>
                                </div>
                                <p className="feedback-rate">A201</p>
                            </div>
                            <div className="feedback">
                                <div className="feedback-content">
                                    <h3>Mark</h3>
                                    <p>Food could be better.</p>
                                </div>
                                <p className="feedback-rate">A201</p>
                            </div>
                            <div className="feedback">
                                <div className="feedback-content">
                                    <h3>Mark</h3>
                                    <p>Food could be better.</p>
                                </div>
                                <p className="feedback-rate">A201</p>
                            </div>
                        </div>

                    </section>
                </div>
                <section className="overview-section">
                    <h2>Apartments</h2>
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
                        </tbody>
                    </table>
                </section>
            </div>

        </>
    )
}