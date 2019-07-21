import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import Client from "./Client/Client";

class Clients extends Component {
    componentDidMount() {
        this.props.onFetchClients();
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

        this.props.onSearchClients(event.target.value);
    };

    saveForAssignHandler = id => {
        if(localStorage.getItem("Client") === id){
            alert("client has already saved");
            return;
        }

        localStorage.setItem("Client", id);
    };

    render() {
        let clients = null;

        if (this.props.clients && this.props.clients.length !== 0) {
            clients = this.props.clients.map(c => (
                <Client
                    key={c.id}
                    id={c.id}
                    firstName={c.firstName}
                    secondName={c.secondName}
                    phoneNumber={c.phoneNumber}
                    address={c.address}
                    clicked={this.saveForAssignHandler}
                />
            ));
        }
        return (
            <React.Fragment>
                <input
                    type="text"
                    className="form-control"
                    onChange={event => this.inputChangedHandler(event)}
                    value={this.state.query.value}
                    style={{ margin: "20px", width: "300px" }}
                    placeholder={"Search"}
                />
                {clients}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        clients: state.client.clients,
    };
};

const mapDipatchToProps = dispatch => {
    return {
        onFetchClients: () => dispatch(actions.fetchClients()),
        onSearchClients: query => dispatch(actions.searchClients(query)),
    };
};

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(Clients);
