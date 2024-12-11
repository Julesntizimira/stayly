interface FormFieldProps {
    container: {
        type?: string;
        label?: string;
        placeholder?: string;
        hint?: string;
        required?: boolean;
    };
}

export default function FormField(props: FormFieldProps) {
    const {type, label, placeholder, hint, required} = props.container;
    return (
        <label className="formfield-label">
            <span>{label}{required && (<span style={{
                color: "#E5062E",
            }}>*</span>)}</span>
            <input type={type ? type : "text"} placeholder={placeholder}/>
            {hint && (<span className="field-hint">{hint}</span>)}
        </label>
    );
}