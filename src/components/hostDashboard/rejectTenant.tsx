import TextareaField from "../textareaField";

export default function RejectTenant(props: any) {
    const { setPopupDisplay } = props;
    return (
        <div className="reject-tenant-wrapper">
            <div className="tenant-infos">
                <div className="tenant-img-cont">
                    <img src="https://s3-alpha-sig.figma.com/img/3459/2207/c40a13438f3de9035da99346a91ba5fc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kvucr4MXc8w9QANcdPIv7rC8qMvhyvzhLGRfqpEq63rzwQN4~dM1lMfmapcPvEGib4fbKNpBGsu3ekNeQfaYuHtWQVuwk~PaATGHX4MQHZZVVWYjzVQEYW72NrTe22lkdHJhkmGA62rspx69hh~oYavyVS~jmByX~EE~meDvDLzMiJIV9069R8Ek5iBkNHtGxgb73xgw4hZKgBZBBGTyQN~Ffl89HvqBDDGdy1-eCzCz23xBn9XTg4Rk8LP4UwuFd5Dc3c-jgju6X1rk~gc-svicvnD0T5FRgq--Dwaf2SjMcylfN7Z8i8hdRUHmkEmsUSwIIZyjmWDc1E9yF-OI~g__" alt="" />
                </div>
                <div className="tenant-name-email">
                    <h3>Olivia Rhye</h3>
                    <p>olivia@untitledui.com</p>
                </div>
            </div>
            <h3>Do you want to reject this tenant?</h3>
            <p>Please indicate the reason for the refusal below</p>
            <TextareaField
                container={{
                    placeholder: "Enter the reason for refusal"
                }}
            />
            <div className="reject-tenant-buttons">
                <button
                    onClick={() => setPopupDisplay("none")}
                >Cancel
                </button>
                <button className="reject-btn">Reject</button>
            </div>
        </div>
    )

}