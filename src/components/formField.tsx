interface FormFieldProps {
    container: {
        type?: string;
        label?: string;
        placeholder?: string;
        hint?: string;
        required?: boolean;
        value?: string;
        onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
}

export default function FormField(props: FormFieldProps) {
    const {type, label, placeholder, hint, required, value, onChange} = props.container;
    return (
        <label className="formfield-label">
            <span>{label}{required && (<span style={{
                color: "#E5062E",
            }}>*</span>)}</span>
            <input 
                type={type ? type : "text"} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {hint && (<span className="field-hint">{hint}</span>)}
        </label>
    );
}