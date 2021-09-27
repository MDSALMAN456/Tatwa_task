import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

const AddProduct=()=>{
    const [data,setData]=useState({
        ProductName:"",
        ProductCategories:"",
        ProductDescription:"",
        // ProductTags:"",
        ProductSize:"",
        ProductAvailableFrom:"",
        ProductAvailableTo:""
    });

    const getInput=(event)=>{
        const{name,value}=event.target;
        setData({...data,[name]:value})
        console.log(data.ProductName);
        console.log(data.ProductCategories);
        // console.log(data.ProductDescription);
        // console.log(data.ProductSize);
        // console.log(data.ProductAvailableFrom);

    }
    const history=useHistory();
    const getSubmit=(event)=>{
        event.preventDefault();
        localStorage.setItem("ProductInfo",JSON.stringify(data));
        history.push("/dashboard/addproduct/submit/details");
    }

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto mt-4">
                <form onSubmit={getSubmit}>
                <input type="text" className="w-100" placeholder="Product Name" name="ProductName" value={data.ProductName} onChange={getInput}/>
                <input type="text" className="w-100 mt-4" placeholder="Product Categories" disabled/>
                <select className="w-100" name="ProductCategories" value={data.ProductCategories} onChange={getInput}>
                    <option>--Choose the Categories--</option>
                    <option>Men</option>
                    <option>Woman</option>
                    <option>Boy</option>
                    <option>Girl</option>
                </select>
                {/* <input type="text" className="w-100 mt-3" placeholder="Product tags" disabled/> */}
                {/* <input className="mt-1" onChange={getInput}/><button className="btn btn-secondary px-3 mx-2">Add</button> */}
                <input type="text" className="w-100 mt-4" placeholder="Product Size" disabled/>

                <select className="w-100" name="ProductSize" value={data.ProductSize} onChange={getInput}>
                    <option>--Choose the Size--</option>
                    <option>Extra Large</option>
                    <option>Large</option>
                    <option>Medium</option>
                    <option>Small</option>
                </select>
                <div className="mb-4">
                <input type="text" className="w-100 mt-4" placeholder="Product Availablity" disabled/>
                <input type="date" placeholder="From" name="ProductAvailableFrom" value={data.ProductAvailableFrom} onChange={getInput}/>
                <input type="date" placeholder="To" name="ProductAvailableTo" value={data.ProductAvailableTo} onChange={getInput}/>
                </div>

                <input type="text" className="w-100" placeholder="Product Description" disabled/>
                <textarea className="w-100" maxLength="500" name="ProductDescription" value={data.ProductDescription} onChange={getInput}/>

                <div className="mt-3">
                <button type="submit" className="btn btn-success">Submit</button>
                <button  type="button" className="btn btn-warning mx-3">Clear</button>
                <NavLink exact to="/addproduct/cancel" className="btn btn-danger">Cancel</NavLink>
                </div>
                
                </form>
                </div>
                </div>
            </div>

        </>
    )
}
export default AddProduct;