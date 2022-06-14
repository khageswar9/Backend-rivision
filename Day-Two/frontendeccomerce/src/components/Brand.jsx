import { useEffect, useState } from "react";

export const Brand=()=>{
const [Data,setData]=useState([]);



const [Form,setForm]=useState({

    name:"",
    image:""
})


    const style1={
    
        
    height:"40px",
    width:"400px",
    margin:"10px"
    }
    function handleChange(e){
        const {id,value}=e.target;


        setForm({
            ...Form,
            [id]:value
        })
    }



    function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:5000/brands",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(Form)

    }).then((d)=>console.log(d));

    }

    
    return (<div>
    
         <form onSubmit={handleSubmit}>
         <input onChange={handleChange} style={style1} id="name" type="text" placeholder="Name"/>
         <br/>
         <input onChange={handleChange}  style={style1} id="image" type ="text" placeholder="image"/>
         <br/>
        <input style={style1} type="submit" value="Submit"/>    
         </form>
    
    
    </div>)
    
    
    }