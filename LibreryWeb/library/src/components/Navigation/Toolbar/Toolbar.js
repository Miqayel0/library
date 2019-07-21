import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => (
    <header>
        <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
            <NavigationItems  />
        </nav>
    </header>
);

export default toolbar;