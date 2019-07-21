import React from "react";
import "./Book.css";
import { Link } from "react-router-dom";

const book = props => {
    const style = {
        color: "red",
        margin: "10px",
        fontSize: "13px",
        textAlign: "center",
    };

    return (
        <div className={"Book"}>
            <span style={{ fontWeight: "bold" }}>{props.title}</span>
            <span style={{ fontSize: "10px" }}>{props.description}</span>
            <span style={{ fontSize: "10px" }}>{props.location}</span>
            {props.isAvailable ? (
                <span style={style}>Book Available</span>
            ) : (
                <span style={style}>Book Not Available</span>
            )}
            <Link to={"/book/" + props.id}>Edit</Link>
            <Link to="" className={"Delete"}>
                Delete
            </Link>
            {props.isAvailable ? (
                <button
                    className={"btn btn-link"}
                    onClick={() => props.clicked(props.id)}
                >
                    Save For Assign
                </button>
            ) : null}
        </div>
    );
};

export default book;
