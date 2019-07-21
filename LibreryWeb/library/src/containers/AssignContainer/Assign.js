import React, { Component } from "react";
import { checkValidity } from "../../util/utility";
import "./Assign.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Input from "../../components/UI/Input/Input";

class Assign extends Component {
    state = {
        books: [],
        client: null,
        assignForm: {
            orderDate: {
                elementType: "input",
                elementConfig: {
                    type: "date",
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                label: "Order Date",
            },
            returnDate: {
                elementType: "input",
                elementConfig: {
                    type: "date",
                },
                value: "",
                validation: {
                    required: false,
                },
                valid: true,
                touched: false,
                label: "Return Date",
            },
        },
        formIsValid: false,
        error: null,
    };

    componentDidMount() {
        let books = JSON.parse(localStorage.getItem("Books"));
        let client = JSON.parse(localStorage.getItem("Client"));

        if (books && client) {
            this.setState({ books: books, client: client });
        } else {
            this.setState({ error: "client or books are null" });
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedAssignForm = {
            ...this.state.assignForm,
        };
        const updatedFormElement = {
            ...updatedAssignForm[inputIdentifier],
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedAssignForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedAssignForm) {
            formIsValid =
                updatedAssignForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            assignForm: updatedAssignForm,
            formIsValid: formIsValid,
        });
    };

    assignSubmitHandler = event => {
        event.preventDefault();

        let submitData = {
            orderDate: this.state.assignForm.orderDate.value,
            returnDate: this.state.assignForm.returnDate.value,
            booksId: this.state.books,
            clientId: this.state.client,
        };

        console.log(this.state.assignForm);

        this.props.onAddAssign(submitData);

        localStorage.clear();
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.assignForm) {
            formElementsArray.push({
                id: key,
                config: this.state.assignForm[key],
            });
        }

        if (this.state.books && this.state.client) {
            return (
                <form className={"AssignForm"}>
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
                                    this.inputChangedHandler(
                                        event,
                                        formElement.id
                                    )
                                }
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        onClick={this.assignSubmitHandler}
                        className="btn btn-primary mb-2"
                        disabled={!this.state.formIsValid}
                    >
                        Submit
                    </button>
                </form>
            );
        } else {
            return <p>{this.state.error}</p>;
        }
    }
}

const mapDipatchToProps = dispatch => {
    return {
        onAddAssign: assign => dispatch(actions.addAssign(assign)),
    };
};

export default connect(
    null,
    mapDipatchToProps
)(Assign);
