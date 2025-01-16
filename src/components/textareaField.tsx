interface TextareaFieldProps {
    container: {
        label: string;
        placeholder: string;
        value: string;
        onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    };
}

export default function TextareaField(props: TextareaFieldProps) {
    const { label, placeholder, value, onChange } = props.container;
    return (
        <label className="formfield-label">
            <span>{label}</span>
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            ></textarea>
        </label>
    );
}