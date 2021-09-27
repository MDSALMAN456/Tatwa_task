import React, { useEffect, useState } from "react";
import Image from "../Image/img1.jpg"

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
            <div className="row">
                {itemlist.map((ele)=>{
                    return(
                        <>
                        <div className="col-md-6 mx-auto my-4 shadow">
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
                        <li>{ele.ProductAvailableTo}</li>
                        <li style={{fontSize:"20px"}}>Hello my name is Salman</li>
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