"use client";

import { useState } from "react";
import { countryCode } from "@/utils";
import { User } from "@/types";


interface PhoneNumberFieldProps {

    container: {

        user: User;

        setUser: React.Dispatch<React.SetStateAction<User>>;

    };

}

export default function PhoneNumberField(props: PhoneNumberFieldProps) {
    const { user, setUser } = props.container;
    const [selectedCountryCode, setSelectedCountryCode] = useState(
        user.countryCode !== "" ? countryCode.find((code) => code.dial_code === user.countryCode)?.dial_code : countryCode[0].dial_code
    );


    return (
        <div className="formfield-label">
            <span>Telephone number</span>
            <div className="phone-number-field-input-container">
                <label className="country-code">
                    <select
                        value={
                            selectedCountryCode
                        }
                        onChange={(e) => {
                            setSelectedCountryCode(e.target.value)
                            setUser({ ...user, countryCode: e.target.value })
                        }}
                    >
                        {
                            countryCode.map((code) => (
                                <option key={code.code} value={code.dial_code}>{code.code}</option>
                            ))
                        }
                    </select>
                </label>
                <p className="selected-country-code">
                    {selectedCountryCode}
                </p>
                <label className="phone-number-input-label">
                    <input
                        type="text"
                        placeholder="555 0000000"
                        onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                    />
                </label>
            </div>

        </div>
    );
}