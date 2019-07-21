import React from "react";
import "./Client.css";
import { Link } from "react-router-dom";

const client = props => {
    console.log(props);
    return (
        <div className={"Client"}>
            <div style={{ fontWeight: "bold" }}>
                <span>{props.firstName + "  "}</span>
                <span>{props.secondName}</span>
            </div>
            <div>
                <span /* style={{ margin: "10px" }} */>{"Phone number: "}</span>
                <span>{props.phoneNumber}</span>
            </div>
            <span style={{ marginTop: "5px" }}>{"Address: "}</span>
            <span>{props.address}</span>
            <Link
                to={`/client/${props.id}/assignments`}
                style={{ display: "block" }}
            >
                Books
            </Link>
            <Link to={"/client/" + props.id}>Edit</Link>
            <Link to="" className={"Delete"}>
                Delete
            </Link>
            <button
                className={"btn btn-link"}
                onClick={() => props.clicked(props.id)}
            >
                Save For Assign
            </button>
        </div>
    );
};

export default client;
