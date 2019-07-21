import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import Book from "./Book/Book";

class Books extends Component {
    componentDidMount() {
        this.props.onFetchBooks();
    }

    state = {
        query: {
            value: "",
        },
    };

    inputChangedHandler = event => {
        const updatedQuery = {
            ...this.state.query,
        };

        updatedQuery.value = event.target.value;

        this.setState({
            query: updatedQuery,
        });

        this.props.onSearchBooks(event.target.value);
    };

    saveForAssignHandler = id => {
        let value = JSON.parse(localStorage.getItem("Books"));
        console.log(value);

        if (value == null) {
            value = JSON.stringify([id]);
        } else {
            let alreadySaved = Boolean(value.find(el => el === id));

            if (alreadySaved) {
               // this.dialog.showAlert("alert");
                return;
            }

            value = JSON.stringify(value.concat(id));
        }

        localStorage.setItem("Books", value);
    };

    render() {
        let books = null;

        if (this.props.books && this.props.books.length !== 0) {
            books = this.props.books.map(b => (
                <Book
                    key={b.id}
                    id={b.id}
                    title={b.title}
                    location={b.location}
                    description={b.description}
                    isAvailable={b.isAvailable}
                    clicked={this.saveForAssignHandler}
                />
            ));
        }

        return (
            <div>
                <input
                    type="text"
                    className="form-control"
                    onChange={event => this.inputChangedHandler(event)}
                    value={this.state.query.value}
                    style={{ margin: "20px", width: "300px" }}
                    placeholder={"Search"}
                />
                {books}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.book.books,
    };
};

const mapDipatchToProps = dispatch => {
    return {
        onFetchBooks: () => dispatch(actions.fetchBooks()),
        onSearchBooks: query => dispatch(actions.searchBooks(query)),
    };
};

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(Books);
