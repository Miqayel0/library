import React from "react";
import { formatDate } from "../../../../util/utility";
import "./Assignment.css";

const assignment = props => {
    return (
        <div className={"Assignment"}>
            <span style={{ fontWeight: "bold" }}>{props.book}</span>
            <span>{"Order Date"}</span>
            <span>{formatDate(props.orderDate)}</span>
            <span>{"Return Date"}</span>
            <span>{formatDate(props.returnDate)}</span>
            {props.wasRetruned ? (
                <div>
                    <span style={{ color: "red", display: "block" }}>
                        {"Was Retruned"}
                    </span>
                    <span>{props.wasRetruned}</span>
                </div>
            ) : (
                <button
                    className={"btn btn-link"}
                    onClick={() => props.clicked(props.clientId, props.bookId)}
                >
                    Remove
                </button>
            )}
        </div>
    );
};

export default assignment;
