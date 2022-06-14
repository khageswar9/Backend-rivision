import { useNavigate } from "react-router-dom"

export const Edit=()=>{
    const style1={padding:"17px",fontSize:"20px",cursor:"pointer"}
    const navigate=useNavigate();
    return (<div>

   
        <div style={style1}  onClick={()=>{ navigate("/product")}}>Add Products</div>
          <div style={style1}  onClick={()=>{ navigate("/brand")}}> Add Brands</div>
          <div style={style1}  onClick={()=>{ navigate("/address")}}>Add Address</div>
          
    </div>)
}