import React from 'react';

interface SelectFieldProps {
    container: {
        label: string;
        options: { value: string; label: string }[];
        value: string;
        onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    };
}

export default function SelectField(props: SelectFieldProps) {
    const {label, options, onChange, value} = props.container;
    return (
        <label className="formfield-label">
            <span>{label}</span>
            <select
                value={value}
                onChange={onChange}
            >
                {
                    options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </label>
    );
}
