import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../../components/UI/Input/Input";
import * as actions from "../../../store/actions/index";
import { checkValidity } from "../../../util/utility";
import "./AddClientForm.css";

class ClientForm extends Component {
    state = {
        clientForm: {
            firstName: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "First Name",
                },
                value: "",
                validation: {
                    required: true,
                    isOnlyLetters: true,
                },
                valid: false,
                touched: false,
                label: "First Name",
            },
            secondName: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Second Name",
                },
                value: "",
                validation: {
                    required: true,
                    isOnlyLetters: true,
                },
                valid: false,
                touched: false,
                label: "Second Name",
            },
            phoneNumber: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Phone Number",
                },
                value: "",
                validation: {
                    required: true,
                    isNumeric: true
                },
                valid: false,
                touched: false,
                label: "Phone Number",
            },
            address: {
                elementType: "textarea",
                elementConfig: {
                    placeholder: "Address"
                },
                value: "",
                validation: {
                    required: false,
                },
                valid: true,
                touched: false,
                label: "Address"
            }
        },
        formIsValid: false,
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedClientForm = {
            ...this.state.clientForm,
        };
        const updatedFormElement = {
            ...updatedClientForm[inputIdentifier],
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedClientForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedClientForm) {
            formIsValid =
                updatedClientForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            clientForm: updatedClientForm,
            formIsValid: formIsValid,
        });
    };

    clientSubmitHandler = event => {
        event.preventDefault();

        let submitData = {
            firstName: this.state.clientForm.firstName.value,
            secondName: this.state.clientForm.secondName.value,
            phoneNumber: this.state.clientForm.phoneNumber.value,
            address: this.state.clientForm.address.value,
        };
        this.props.onAddClient(submitData);
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.clientForm) {
            formElementsArray.push({
                id: key,
                config: this.state.clientForm[key],
            });
        }
        return (
            <form className={"ClientForm"}>
                {formElementsArray.map(formElement => (
                    <div key={formElement.id} className={"form-group"}>
                        <Input
                            label={formElement.config.label}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            value={formElement.config.value}
                            touched={formElement.config.touched}
                            changed={event =>
                                this.inputChangedHandler(event, formElement.id)
                            }
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    onClick={this.clientSubmitHandler}
                    className="btn btn-primary mb-2"
                    disabled={!this.state.formIsValid}
                >
                    Submit
                </button>
            </form>
        );
    }
}

const mapDipatchToProps = dispatch => {
    return {
        onAddClient: client => dispatch(actions.addClient(client)),
    };
};

export default connect(
    null,
    mapDipatchToProps
)(ClientForm);
