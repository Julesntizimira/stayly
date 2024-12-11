export default function Preferences() {
    return (
        <div className="profile-infos-container">
            <section className="info-section">
                <div className="info-section-heading">
                    <h2>Preferences</h2>
                    <p>Change Your language, currency, and accessibilty requirements.</p>
                </div>
                <div className="preferences-body">
                    <label className="preference-label">
                        <span>Currency</span>
                        <select className="currency-select">
                            <option>US Dollar</option>
                            <option>Rwandan Franc</option>
                            <option>Euro</option>
                        </select>
                    </label>
                    <label className="preference-label">
                        <span>Language</span>
                        <select className="currency-select language-select">
                            <option>English</option>
                            <option>Kinyarwanda</option>
                            <option>French</option>
                        </select>
                    </label>
                    <label className="preference-label">
                        <span>Accessibility requirements</span>
                        <select className="currency-select accessibility-select">
                            <option>None</option>
                            <option>Wheelchair</option>
                            <option>Deaf</option>
                        </select>
                    </label>
                </div>
            </section>
        </div>
    )
}