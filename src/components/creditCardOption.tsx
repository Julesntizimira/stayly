import FormField from "./formField";
import FormFieldPicturesInvolved from "./formFieldPicturesInvolved";

export default function CreditCardOption() {
    return (
        <>
            <div className="selected-option">
                <i className="fa-solid fa-circle-check"></i>
                <div>
                    <p>Credit Card</p>
                    <span>Mastercard, Visa, American Amex</span>
                </div>
            </div>
          <FormFieldPicturesInvolved
          container={{
                label: "Card number",
                placeholder: "card number",
                imageUrl: "images/Mastercard.png",
          }}/>
            <fieldset className="combined-fields">
                <FormField
                    container={{
                        label: "Expiration date",
                        placeholder: "MM/YY"
                    }}
                />
                <FormField
                    container={{
                        label: "Security number",
                        placeholder: "XXX"
                    }}
                />
            </fieldset>
            <label className="checkbox-label">
                <input type="checkbox"/>
                <span>Remember my payment details</span>
            </label>
        </>
    )
}