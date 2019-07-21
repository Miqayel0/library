import React, { Component } from "react";
import { connect } from 'react-redux'
import Input from "../../../components/UI/Input/Input";
import * as actions from "../../../store/actions/index";
import { checkValidity } from '../../../util/utility'
import "./AddBookForm.css";

class BookForm extends Component {
    state = {
        bookForm: {
            title: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Title"
                },
                value: "",
                validation: {
                    required: false,
                },
                valid: true,
                touched: false,
                label: "Title"
            },
            location: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Location"
                },
                value: "",
                validation: {
                    required: false,
                },
                valid: true,
                touched: false,
                label: "Location"
            },
            description: {
                elementType: "textarea",
                elementConfig: {
                    placeholder: "Description"
                },
                value: "",
                validation: {
                    required: false,
                },
                valid: true,
                touched: false,
                label: "Description"
            }
        },
        formIsValid: false
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedBookForm = {
            ...this.state.bookForm
        };
        const updatedFormElement = {
            ...updatedBookForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedBookForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedBookForm) {
            formIsValid =
                updatedBookForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            bookForm: updatedBookForm,
            formIsValid: formIsValid
        });
    };

    bookSubmitHandler = (event) => {
        event.preventDefault();

        let submitData = {
            title: this.state.bookForm.title.value,
            location: this.state.bookForm.location.value,
            description: this.state.bookForm.description.value
        };
            this.props.onAddBook(submitData);
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.bookForm) {
            formElementsArray.push({
                id: key,
                config: this.state.bookForm[key]
            });
        }
        return (
            <form className={"BookForm"}>
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
                    onClick={this.bookSubmitHandler}
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
        onAddBook: (book) => dispatch(actions.addBook(book))
    };
};

export default connect(null,mapDipatchToProps)(BookForm);
