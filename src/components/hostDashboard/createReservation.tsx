import FormField from "../formField";

export default function CreateReservation(props: any) {
    const { setPopupDisplay } = props;
    return (
        <div className="create-reservation-page-wrapper">
            <div className="create-reservation-upper-part">
                <div className="client-img-cont"></div>
                <p>Add image</p>
            </div>
            <div className="create-reservation-inputs">
                <div className="combined-fields">
                    <FormField
                        container={{
                            label: "Name",
                            placeholder: "Enter Guest name",
                            required: true
                        }}
                    />
                    <FormField
                        container={{
                            label: "Passport Number",
                            placeholder: "Enter passport number",
                            required: true
                        }}
                    />

                </div>
                <div className="combined-fields">
                    <FormField
                        container={{
                            label: "Phone",
                            placeholder: "Enter phone number",
                            required: true
                        }}
                    />
                    <FormField
                        container={{
                            label: "Email",
                            placeholder: "Enter your Email",
                            required: true
                        }}
                    />
                </div>
                <div className="combined-fields">
                    <FormField
                        container={{
                            label: "Name",
                            placeholder: "Enter Guest name",
                            required: true
                        }}
                    />
                    <FormField
                        container={{
                            label: "Passport Number",
                            placeholder: "Enter passport number",
                            required: true
                        }}
                    />
                </div>
                <div className="combined-fields">
                <FormField
                        container={{
                            label: "Address",
                            placeholder: "Enter The Address",
                            required: true
                        }}
                    />
                    <FormField
                        container={{
                            label: "Zip code",
                            placeholder: "Enter the zip code",
                            required: true
                        }}
                    />
                </div>
            </div>
            <div className="add-room-bottom">
                <button
                    onClick={() => {
                        setPopupDisplay("none");
                    }}
                >
                    Cancel
                </button>
                <button>
                    Save
                </button>
            </div>
        </div>
    )

}
