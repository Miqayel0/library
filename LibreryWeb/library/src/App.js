import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import AddBookForm from "./containers/BookContainer/AddBookForm/AddBookForm";
import Books from "./containers/BookContainer/GetAllBooks/Books";
import AddClientForm from "./containers/ClientContainer/AddClientForm/AddClientForm";
import Clients from "./containers/ClientContainer/GetAllClients/Clients";
import Assign from "./containers/AssignContainer/Assign";
import ClientsAssignments from "./containers/AssignContainer/ClientAssignments/ClientAssignments"
import "./App.css";

class App extends Component {
    render() {
        return ( 
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path={"/add-book"} component={AddBookForm} />
                        <Route path={"/books"} component={Books} />
                        <Route path={"/add-client"} component={AddClientForm} />
                        <Route path={"/clients"} component={Clients} />
                        <Route path={"/assign"} component={Assign} />
                        <Route path={"/client/:id/assignments"} component={ClientsAssignments} />
                        {/* <Redirect from='/' to='/books'/> */}
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
