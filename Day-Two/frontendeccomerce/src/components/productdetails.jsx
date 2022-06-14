import {useEffect, useState} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { Reviews } from "./reviews";


export const ProductDetails=()=>{

const [rev,setrev]=useState(false);
const [Data,setData]=useState({});
const {_id}=useParams();
// const [user,setUser]=useState({});
const navigate=useNavigate()
// const [seuser,setSeeuser]=useState(false);
let arr=[];

    useEffect(()=>{
        getData();
    },[])
    async function getData(){
   
        const data=await fetch(`http://localhost:5000/products/${_id}`).then((d)=>d.json());
        setData(data);
        console.log(data);    
    }
//    async function handleuser(id){
//     setSeeuser(!seuser);
//      const data=await fetch(`http://localhost:5000/users/${id}`).then((d)=>d.json());
//      console.log(data);
//      setUser(data); 
    
//     }
    
    arr.push(_id);
   localStorage.setItem("product",JSON.stringify(arr));
    return (<div >
       <div style={{display :"flex",margin:"10%"}}>
        <div><img src={Data.image}/></div>
        <div style={{marginLeft:"50px"}}><h2 style={{fontSize:"55px"}}>{Data.name}</h2>
        <h4> Price {Data.price}</h4>
        <h4>Colors {Data.color.join(",")}</h4> 
     <h4>Sizes {Data.size.join(",")}</h4>

        </div>
       </div>

<button onClick={()=>{setrev(!rev)}}  >{rev?"Hide Reviews":"Show Reviews"}</button>
{rev?<div style={{margin:"5%"}}>{Data.reviewsId.map((e)=>
(<div style={{border:"2px solid grey"}} key={e._id}>
    <h3>{e.description}</h3>
    <h4> {e.rating} ⭐️</h4>
    <h4>Date - {e.createdAt.split("T")[0]}</h4>
    {/* <button  onClick={()=>{handleuser(e.userId)}}>{seuser?"Hide User":"Show User"}</button> */}
    {/* {seuser?<div ><h4 style={{border:"2px dotted red"}} >{user.name}</h4>

  </div>:""} */}
    </div>))}
</div>:""}

<h4>Write a review</h4>
<Reviews/>

    </div>)
}