import { useState } from "react";

function EditableInput(props) {
    const [value, setValue] = useState(props.initValue);

    const updateValue = (e) => {
        setValue(e.target.value);
    }

    if (props.editable) {
        return (
            <div className={props.classname}>
                <input
                    type={props.type}
                    className="cv-input"
                    onChange={updateValue}
                    value={value}
                    name={props.name}
                />
            </div>
        );
    } else {
        return (
            <div className={props.classname}>
                {value}
            </div>
        );
    }
}

export default EditableInput;
