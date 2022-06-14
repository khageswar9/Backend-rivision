import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { loginState } from "../Redux-/Login/action";
export const Navbar=()=>{
    
    
    const style={height:"60px",backgroundColor:"black",display:"grid",gridTemplateColumns:"60% 10% 10% 10% 10%",color:"white",fontFamily:"cursive"}
    const navigate=useNavigate();
     const style1={padding:"17px",fontSize:"20px",cursor:"pointer"}
     const state=useSelector((s)=>s.state.state);
     const dispatch=useDispatch();


     function handleSignout(){
      alert("Do you really want to Signout");
      localStorage.setItem("user",JSON.stringify([]));
      dispatch(loginState(false));

     }
       return (<div>
    
    
          <div style={style}>
          <div style={{padding:"8px",fontSize:"30px",color:"red",fontWeight:"bolder",cursor:"pointer",textAlign:"left",marginLeft:"40px"}} onClick={()=>{navigate("/")}} >KHUHSIYA</div>
          <div style={style1} onClick={()=>{ state?  handleSignout(): navigate("/login")  }}>{state?"Logout":"Login"}</div>
          <div style={style1}  onClick={()=>{ navigate("/signup")}}>Signup</div>
          <div style={style1}  onClick={()=>{ navigate("/edit")}}>Edit</div>
          <div style={style1}  >User</div>
         
          </div>
        </div>)
 
}