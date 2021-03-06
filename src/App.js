import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router";
import Dashboard from "./Screens/Dashboard";
import AddProduct from "./Screens/AddProduct";
import Cancel from "./Screens/Cancel";
import Details from "./Screens/Details";
import Error from "./Screens/Error";
import './index.css';


const App=()=>{
    return (
        <>
        <Switch>
            <Route exact path="/"  component={Dashboard}/>
            <Route exact path="/addproduct" component={AddProduct}/>
            <Route exact path="/addproduct/cancel" component={Cancel}/>
            <Route exact path="/addproduct/submit/details" component={Details}/>
            <Route component={Error}/>
        </Switch>

        </>
    )
}
export default App;