import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import Assignment from "./Assignment/Assignment";

class Assignments extends Component {
    componentDidMount() {
        console.log(this.props.match);
        this.props.onFetchAssignments(this.props.match.params.id);
    }

    removeAssignHandler = (clientId, bookId) => {
        let assignData = {
            clientId: clientId,
            bookId: bookId,
        };
        this.props.onDeleteAssignment(assignData);
    };

    render() {
        let assignments = null;

        if (this.props.assignments && this.props.assignments.length !== 0) {
            assignments = this.props.assignments.map((a, index) => (
                <Assignment
                    key={index}
                    book={a.book.title}
                    clientId={a.clientId}
                    bookId={a.bookId}
                    orderDate={a.orderDate}
                    wasRetruned={a.wasRetruned}
                    returnDate={a.returnDate}
                    clicked={this.removeAssignHandler}
                />
            ));
        }
        return <React.Fragment>{assignments}</React.Fragment>;
    }
}

const mapStateToProps = state => {
    return {
        assignments: state.assign.assignments,
    };
};

const mapDipatchToProps = dispatch => {
    return {
        onFetchAssignments: clientId =>
            dispatch(actions.fetchClientAssignments(clientId)),
        onDeleteAssignment: assignData =>
            dispatch(actions.deleteAssign(assignData)),
    };
};

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(Assignments);
