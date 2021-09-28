import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";


const localItem = ()=>{
    let oldItem = localStorage.getItem("ProductInfo");
    let json = JSON.parse(oldItem);
    console.log(json)
    if(json==null){
        return [];
    }else{
        return json;
    }
}

const AddProduct=()=>{

    const [item , setItem] = useState(localItem())
    const [data,setData]=useState({
        ProductName:"",
        ProductCategories:"",
        ProductDescription:"",
        ProductTags:"",
        ProductSize:"",
        ProductAvailableFrom:"",
        ProductAvailableTo:""
    });

    const [pic,setPic] = useState("");

    const getInput=(event)=>{
        const{name,value}=event.target;
        setData({...data,[name]:value});    
    }

    const history=useHistory();

// ----Form Clear functionality----------
   const clearformItems = ()=>{
       setData({
        ProductName:"",
        ProductCategories:"",
        ProductDescription:"",
        ProductTags:"",
        ProductSize:"",
        ProductAvailableFrom:"",
        ProductAvailableTo:""
       })
       setCharCount(0)
       setPic("")
   }
//    ------------------------------------
// Character Count Functionality-----
   const [charCount,setCharCount]=useState(0);
   const getCharCount=(event)=>{
           const data=event.target.value;
           const Count=data.length+1;
           setCharCount(Count);

   }
//    ------------------------------------------

// Word count Functionality-----------
   const [wordCount,setWordCount]=useState(0);
   const getWordCount=(event)=>{
       const finalCount=event.target.value.split(" ").length;
       console.log(finalCount);
       setWordCount(finalCount);
   }
//    ------------------------------------

// Image Upload functionality---------
    const imageUpload = (event)=>{
        //console.log(event.target.files[0])
        const reader = new FileReader();
        reader.addEventListener('load',()=>{
            console.log(reader.result)
            setPic(reader.result);
        })
        reader.readAsDataURL(event.target.files[0])    
    }
// -------------------------------------

   
    const getSubmit=async(event)=>{
        // console.log(item)
        // console.log(data)
        event.preventDefault();
        data.productpic = pic;
        setItem(()=>{
            return [...item,data]
        })
        // let newitem = JSON.stringify(item);
        // console.log(newitem)
        await localStorage.setItem("ProductInfo",JSON.stringify(item));
        
        history.push("/addproduct/submit/details");
    }

    useEffect(()=>{
        localStorage.setItem("ProductInfo",JSON.stringify(item))
    },[item])

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto mt-4">
                <form onSubmit={getSubmit}>
                <input type="text" className="w-100" placeholder="Product Name" name="ProductName" minLength="2" value={data.ProductName}
                 onChange={getInput} required/>
                <input type="text" className="w-100 mt-3" placeholder="Product Image" disabled/>
                <input type="file" className="w-100" name="Productimage" onChange={imageUpload} required/>
                <input type="text" className="w-100 mt-3" placeholder="Product Categories" disabled/>
                <select className="w-100" name="ProductCategories" value={data.ProductCategories} onChange={getInput} required>
                    <option value="">--Choose the Categories--</option>
                    <option value="Men">Men</option>
                    <option value="Woman">Woman</option>
                    <option value="Boy">Boy</option>
                    <option value="Girl">Girl</option>
                </select>
                <input type="text" className="w-100 mt-3" placeholder="Product tags" name="ProductTags" minLength="2" value={data.ProductTags}
                 onChange={getInput} required/>
                <input type="text" className="w-100 mt-3" placeholder="Product Size" disabled/>
                <select className="w-100" name="ProductSize" value={data.ProductSize} onChange={getInput} required>
                    <option value="">--Choose the Size--</option>
                    <option value="Extra Large">Extra Large</option>
                    <option value="Large">Large</option>
                    <option value="Medium">Medium</option>
                    <option value="Small">Small</option>
                </select>
                <div className="mb-3">
                <input type="text" className="w-100 mt-3" placeholder="Product Availablity" disabled/>
                <input type="date" placeholder="From" name="ProductAvailableFrom" value={data.ProductAvailableFrom} onChange={getInput} required/>
                <input type="date" placeholder="To" name="ProductAvailableTo" value={data.ProductAvailableTo} onChange={getInput} required/>
                </div>

                <input type="text" className="w-100" placeholder="Product Description" disabled/>
                <textarea className="w-100" maxLength="499" name="ProductDescription" value={data.ProductDescription}
                 onChange={getInput} onKeyDown={getCharCount} onKeyUp={getWordCount} required/>

                <div className="d-flex">
                    <p style={{border:"0.5px solid black" ,paddingRight:"20px"}}>Character Count : {charCount}/500</p>
                    <p style={{border:"0.5px solid black" , padding:"0px 20px" }}>Word Count : {wordCount}</p>
                </div>
                <div>
                <button type="submit" className="btn btn-success">Submit</button>
                <button  type="button" className="btn btn-warning mx-3" onClick={clearformItems}>Clear</button>
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