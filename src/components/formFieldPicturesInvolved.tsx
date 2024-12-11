export default function FormFieldPicturesInvolved(props: any) {
    const { label, placeholder, imageUrl } = props.container;
    return (
        <div className="formfield-label-photo-involved">
            <span>{label}</span>
            <div className="img-input-container">
                <img src={imageUrl} alt=""/>
                <input type="text" placeholder={placeholder}/>
            </div>
        </div>
    );
}