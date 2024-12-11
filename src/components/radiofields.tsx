interface RadioField {
    label: string;
    value: string;
}

interface RadioFieldsProps {
    container: {
        name: string;
        legend: string;
        fields: RadioField[];
    };
}

export default function RadioFields(props: RadioFieldsProps) {
    const {name, legend, fields} = props.container;
    return (
        <fieldset className="radio-input-fieldset">
            <span className="field-legend">{legend}</span>
         
            <div className="radio-inputs">
            {
                fields.map((field) => (
                    <label key={field.label}>
                        <input type="radio" name={name} value={field.value}/>
                        <span>{field.label}</span>
                    </label>))
            }
            </div>
        </fieldset>
    )
}