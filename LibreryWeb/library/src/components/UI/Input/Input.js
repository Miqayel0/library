import React from "react";
import "./Input.css";

const input = props => {
    let inputElement = null;
    let inputClasses = "form-control";

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses = "form-control Invalidform-control";
    }

    try {
        if (props.elementConfig.type === "checkbox") {
            inputClasses = "form-control CheckBox";
        }
    } catch (error) {
        console.error(error);
        // expected output: SyntaxError: unterminated string literal
        // Note - error messages will vary depending on browser
    }

    switch (props.elementType) {
        case "input":
            inputElement = (
                <input
                    className={inputClasses}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                    checked={props.value}
                />
            );
            break;
        case "textarea":
            inputElement = (
                <textarea
                    className={inputClasses}
                    rows={"3"}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case "select":
            inputElement = (
                <select
                    className={inputClasses}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(option => (
                        <option
                            className={"custom-select"}
                            key={option.value}
                            value={option.value}
                        >
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = (
                <input
                    className={inputClasses}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
    }

    return (
        <React.Fragment>
            <label className={"custom-control-label"}>{props.label}</label>
            {inputElement}
        </React.Fragment>
    );
};

export default input;
