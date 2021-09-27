import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard=()=>{
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-4 mx-auto text-center mt-4">
                <NavLink className="btn btn-success " exact to="/addproduct">Add Products</NavLink>

                </div>
            </div>
        </div>
       
        </>
    )
}
export default Dashboard;