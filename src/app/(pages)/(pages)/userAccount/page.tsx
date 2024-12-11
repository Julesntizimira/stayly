export default function UserAccountPage() {
    return (
        <div className="profile-infos-container">
            <section className="info-section">
                <div className="info-section-heading">
                    <h2>Basic information</h2>
                    <p>Make sure this information matches your travel ID, like your passport or license.</p>
                </div>
                <div className="info-section-body">
                    <div className="info-container">
                        <h3>Full Name</h3>
                        <p>Benjamin Gainyllo Joel</p>
                    </div>
                    <div className="info-container">
                        <h3>Date of birth</h3>
                        <p>Not provided</p>
                    </div>
                    <div className="info-container">
                        <h3>Bio</h3>
                        <p>Not provided</p>
                    </div>
                    <div className="info-container">
                        <h3>Disability </h3>
                        <p>None</p>
                    </div>
                    <div className="info-container">
                        <h3>Accessibility needs</h3>
                        <p>Not provided</p>
                    </div>
                    <div className="info-container">
                        <h3>Gender</h3>
                        <p>Male</p>
                    </div>
                </div>
            </section>
            <section className="info-section">
                <div className="info-section-heading">
                    <h2>Contact</h2>
                    <p>Receive account activity alerts and trip updates by sharing this information.</p>
                </div>
                <div className="info-section-body">
                    <div className="info-container">
                        <h3>Mobile Number</h3>
                        <p>Not provided</p>
                    </div>
                    <div className="info-container">
                        <h3>Email</h3>
                        <p>Benjamin@gmail.com</p>
                    </div>
                    <div className="info-container">
                        <h3>Emergency contact </h3>
                        <p>Not provided</p>
                    </div>
                    <div className="info-container">
                        <h3>Address</h3>
                        <p>Not provided</p>
                    </div>
                </div>
            </section>
        </div>
    )
}