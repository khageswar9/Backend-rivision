import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginState } from "../Redux-/Login/action";

export const Login=()=>{
const style1={

    height:"40px",
    width:"200px",
     margin:"10px"

}
const [Form,setForm]=useState({
     email:"",
     passward:"",
})
const navigate=useNavigate();
const state=useSelector((s)=>s.state.state);
const dispatch=useDispatch();
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
 console.log(data,Form.email,Form.passward);
 const data1=data.filter((a)=>{
    
      return a.email===Form.email&&a.passward===Form.passward;
     

 })
console.log(data1)
let arr=[];
 if(data1.length!==0){
      arr.push(data1[0]._id);
      localStorage.setItem("user",JSON.stringify(arr));
      dispatch(loginState(true));
     navigate("/",{replace:true});
}
 else{
alert("Wrong email or password");
}
}

return (<div>

     <form onSubmit={handleSubmit}>
     <input id="email" onChange={handleChange} style={style1} type ="email" placeholder="Email"/>
     <br/>
    <input id="passward" onChange={handleChange} style={style1} type="password" placeholder=" Type Password"/>
    <br/>
    <input style={style1} type="submit" value="Submit"/>    
     </form>
</div>)
}