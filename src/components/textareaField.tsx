export default function TextareaField(props: any) {
    const { label, placeholder } = props.container;
    return (
        <label className="formfield-label">
            <span>{label}</span>
            <textarea
                placeholder={placeholder}
            ></textarea>
        </label>
    );
}