import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Signup=()=>{
   
    const style1={
    
        
    height:"40px",
    width:"200px",
     margin:"10px"
    }
    const navigate=useNavigate();
    const [Form,setForm]=useState({
    name:"",
    email:"",
    passward:"",
    phone:"",
    })
    
  
    function handleChange(e){
     const {id,value}=e.target;
     setForm({
         ...Form,
         [id]:value
     })
 }
async function handleSubmit(e){
 e.preventDefault();

 const data= await fetch("http://localhost:5000/users").then((d)=>d.json());
 console.log(data,Form.email,Form.phone);
 const data1=data.filter((a)=>{
    
      return a.email===Form.email||a.phone===Form.phone
     

 })
console.log(data1)
 if(data1.length!==0){
     alert("This email or phone has already registered");
     return;
 }else if(Form.phone.length!==10){
     alert("Type a valid phone number");
     return;
 }
 else{

 fetch("http://localhost:5000/users",{
     method:"POST",
     headers:{
         "content-type":"application/json"
     },
     body:JSON.stringify(Form)
 });

navigate("/login",{replace:true});
}
}




    return (<div>
    
         <form onSubmit={handleSubmit}>
         <input onChange={handleChange} id="name" style={style1} type="text" placeholder="Name"/>
         <br/>
         <input onChange={handleChange} id="email" style={style1} type ="email" placeholder="Email"/>
         <br/>
         <input onChange={handleChange} id="phone" style={style1} type="number"  placeholder="Phone Number"/>
         <br/>
         <input onChange={handleChange} id="passward" style={style1} type="password" placeholder=" Type Password"/>
         <br/>
        <input style={style1} type="submit" value="Submit"/>    
         </form>
    
    
    </div>)
    
    
    }