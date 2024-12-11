export default function SettingsPage() {
    return (
        <div className="profile-infos-container">
            <section className="info-section">
                <div className="info-section-heading">
                    <h2>Settings</h2>
                </div>
                <section className="setting-section">
                    <div className="setting-section-heading">
                        <h3>Sign-in and security</h3>
                        <p>Keep your account safe with a secure password and by signing out of devices you’re not actively using</p>
                    </div>
                    <div className="setting-section-body">
                        <p>Email
                        <i className="fa-solid fa-angle-right"></i>
                        </p>
                        <p>Change Password
                        <i className="fa-solid fa-angle-right"></i>
                        </p>
                        <p>Connected Device
                        <i className="fa-solid fa-angle-right"></i>
                        </p>
                    </div>
                </section>
                <section className="setting-section">
                    <div className="setting-section-heading">
                        <h3>Account management</h3>
                        <p>control other options tio manage your data, like deleting your account.</p>
                    </div>
                    <div className="setting-section-body">
                        <p>Data control
                        <i className="fa-solid fa-angle-right"></i>
                        </p>
                        <p>Delete Account
                        <i className="fa-solid fa-angle-right"></i>
                        </p>
                    </div>
                </section>
            </section>
        </div>
    )
}