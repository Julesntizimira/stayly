import React from 'react';

interface SelectFieldProps {
    container: {
        label: string;
        options: { value: string; label: string }[];
    };
}

export default function SelectField(props: SelectFieldProps) {
    const {label, options} = props.container;
    return (
        <label className="formfield-label">
            <span>{label}</span>
            <select>
                {
                    options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </label>
    );
}
