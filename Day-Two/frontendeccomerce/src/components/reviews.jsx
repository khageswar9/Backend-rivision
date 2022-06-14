import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Reviews=()=>{
    const navigate=useNavigate();
    const style1={
    
        height:"40px",
        width:"200px",
         margin:"10px"
    
    }

    const user=JSON.parse(localStorage.getItem("user"));
    const [Form,setForm]=useState({
        userId:user,
        description:"",
        rating:""

    })
    
    function handleChange(e){
        const {id,value}=e.target;
        
        setForm({
            ...Form,
            [id]:value
        })
        if(Form.userId==""){
            alert("login first");
            navigate("/login",{replace:true})
        }
        
    }
  function handleSubmit(e){
    e.preventDefault();
    const productId=JSON.parse(localStorage.getItem("product"));

    fetch(`http://localhost:5000/products/${productId}/reviews`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(Form)

    })

    
  }




    return (<div onSubmit={handleSubmit}>
    
         <form>
         <input onChange={handleChange}  id="description" style={style1} type ="text" placeholder="Description"/>
         <br/>
        <input onChange={handleChange}  id="rating" style={style1} type="number" placeholder="Rate us"/>
        <br/>
        <input style={style1} type="submit" value="Submit"/>    
         </form>
    
    
    </div>)
}