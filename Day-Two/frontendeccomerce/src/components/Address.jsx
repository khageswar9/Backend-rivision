import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
export const Address=()=>{
    const style1={
    
       
    height:"40px",
    width:"200px",
     margin:"10px"
    }
    const state=useSelector((s)=>s.state.state);
    
const navigate=useNavigate();
    const [Form,setForm]=useState({
         state:"",
         city:"",
         district:"",
         line:""

    })
        function handleChange(e){
     
      const {id,value}=e.target;
      setForm({
           ...Form,
           [id]:value
      })

    }
    
    function handleSubmit(e){
     e.preventDefault(); 


     if(state){
         const userId=JSON.parse(localStorage.getItem("user"));
        
        
     fetch(`http://localhost:5000/users/${userId}/address`,{
          method:"POST",
          headers:{
               "content-type":"application/json"
          },
          body:JSON.stringify(Form)
     });
     }else{
          alert("login first")
     navigate("/login");
     }

    }
    return (<div>
    
         <form onSubmit={handleSubmit} >
         <input onChange={handleChange} id="state" style={style1} type="text" placeholder="State"/>
         <br/>
         <input onChange={handleChange} id="city" style={style1} type ="text" placeholder="City"/>
         <br/>
         <input onChange={handleChange} id="district" style={style1} type="text" placeholder="District"/>
         <br/>
         <input onChange={handleChange} id="line" style={style1} type ="text" placeholder="Line"/>
         <br/>
        <input style={style1} type="submit" value="Submit"/>    
         </form>
    
    
    </div>)
    
    
    }