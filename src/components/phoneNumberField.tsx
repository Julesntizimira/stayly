"use client";

import { useState } from "react";

export default function PhoneNumberField() {
    const [selectedCountryCode, setSelectedCountryCode] = useState("1");
    return (
        <div className="formfield-label">
            <span>Telephone number</span>
            <div className="phone-number-field-input-container">
                <label className="country-code">
                    <select
                        value={selectedCountryCode}
                        onChange={(e) => setSelectedCountryCode(e.target.value)}
                    >
                        <option value="1">US</option>
                        <option value="250">RW</option>
                        <option value="336">FR</option>
                    </select>
                </label>
                <p className="selected-country-code">
                    <span>+</span>
                    {selectedCountryCode}
                </p>
                <label className="phone-number-input-label">
                    <input type="text" placeholder="555 0000000" />
                </label>
            </div>

        </div>
    );
}