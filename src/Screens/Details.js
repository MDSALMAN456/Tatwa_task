import React from "react";
import Image from "../Image/img1.jpg"

const Details=()=>{
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto my-4 shadow">
                    <h1 className="text-center">Product details</h1>
                    <div className="d-flex mt-5">
                    <ul className="mt-3">
                        <li>Product name</li>
                    </ul>
                    <img src={Image} />
                    </div>
                    <ul className="mb-5">
                        <li>Men</li>
                        <li>Large</li>
                        <li>Available Date</li>
                        <li style={{fontSize:"20px"}}>Hello my name is Salman</li>
                    </ul>
                   
                </div>
            </div>
        </div>

        </>
    )
}
export default Details;