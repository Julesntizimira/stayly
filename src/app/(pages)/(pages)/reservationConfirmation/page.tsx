import HorizontalDivider from "@/components/horizontalDivider";

export default function ReservationConfirmationPage() {
    return (
        <>
            <div className="confirmation-page-wrapper">
                <div className="confirmation-heading">
                    <h2>Your Accommodation reservation: <span>Confirmed</span></h2>
                    <p>Contact Jules Inc. If you Need to Change in Basic Information with 1385 Booking Number.</p>
                </div>
                <div className="reservation-content">
                    <div className="top-part">
                        <div className="booking-number">
                            <h3>Booking No. 1385 Details</h3>
                            <p>Check your Information Here !</p>
                        </div>
                        <div className="booking-schedule">
                            <h3>
                                Accommodation Roles
                            </h3>
                            <div className="check-hours">
                                <p>Check-In At 14 :00 Every Day</p>
                                <p>Check-Out At 12 :00 , Every Day</p>
                                <p>Secure By Jules Inc. Policy-2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="middle-part">
                        <div className="middle-part-single-container">
                            <h4>Stays</h4>
                            <p>5 Nights</p>
                        </div>
                        <div className="middle-part-single-container">
                            <h4>Check-In</h4>
                            <p>23 Nov 2024</p>
                        </div>
                        <div className="middle-part-single-container">
                            <h4>Check-Out</h4>
                            <p>30 Nov 2024</p>
                        </div>
                        <div className="middle-part-single-container">
                            <h4>Quantity</h4>
                            <p>2 Rooms</p>
                        </div>
                        <div className="middle-part-single-container">
                            <h4>Room Type</h4>
                            <p>Double</p>
                        </div>
                        <div className="middle-part-single-container">
                            <h4>Bed Type</h4>
                            <p>Two Twin</p>
                        </div>
                    </div>
                    <div className="customer-condition">
                        <div className="customers-ages">
                            <p>Adults <span>2</span></p>
                            <p>Children <span>3</span></p>
                            <p>Infant <span>0</span></p>
                        </div>

                        <p>
                            Additional service Quantity: <span>None</span>
                        </p>


                        <p>Meal plan: <span>Allergic</span></p>

                    </div>
                </div>
                <div className="cancellation-policy">
                    <h3>Cancelation Policy</h3>
                    <h4>Pay attention</h4>
                    <p>This booking represents the conclusive step in the Accommodation reservation process. It is considered final and may only be canceled by the Accommodation in the event of unforeseen circumstances or natural disasters.</p>
                    <button>Back to Home</button>
                </div>

            </div>
            <HorizontalDivider />
        </>
    );
}