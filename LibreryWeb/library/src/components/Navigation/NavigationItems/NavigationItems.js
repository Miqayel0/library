import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
    <ul className={"navbar-nav"}>
        <NavigationItem link="/books">Books</NavigationItem>
        <NavigationItem link="/clients">Clients</NavigationItem>
        <NavigationItem link="/add-client">Add Client</NavigationItem>
        <NavigationItem link="/add-book">Add Book</NavigationItem>
        <NavigationItem link="/assign">Assign</NavigationItem>
    </ul>
);

export default navigationItems;
