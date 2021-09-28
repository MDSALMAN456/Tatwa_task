import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Details=()=>{

    const [itemlist,setItemList]  = useState([])

    const productDetails = ()=>{
       let product = JSON.parse(localStorage.getItem("ProductInfo"))   
        console.log(product)
       setItemList(product)     
    }

    useEffect(()=>{
        productDetails()
    },[])

    return (
        <>
        <div className="container">
        <NavLink exact to="/addproduct" className="btn btn-danger mt-3">Go Back</NavLink>
            <div className="row d-flex align-items-center justify-content-center">
                {itemlist.map((ele)=>{
                    return(
                        <>
                        <div className="col-md-6 ml-5 my-4 shadow bg-light">
                    <h1 className="text-center">Product details</h1>
                    <div className="d-flex mt-5">
                    <ul className="mt-3">
                        <li>{ele.ProductName}</li>
                    </ul>
                    <img src={ele.productpic} />
                    </div>
                    <ul className="mb-5">
                        <li>{ele.ProductCategories}</li>
                        <li>{ele.ProductSize}</li>
                        <li>{ele.ProductAvailableTo} To {ele.ProductAvailableFrom}</li>
                        <li style={{fontSize:"20px"}}>{ele.ProductDescription}</li>
                    </ul> 
                   
                </div>
                        </>
                    )
                    
                })
                
            }
            </div>
        </div>

        </>
    )
}
export default Details;