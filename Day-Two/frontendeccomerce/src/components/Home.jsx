import { Link, useNavigate,useSearchParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";



export const Home=()=>{
    const  [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(Number(searchParams.get("page")||1));
    const [Data,setData]=useState([])
    const [productData,setProData]=useState([]);
    const [count,setCount]=useState(1);
    const arr1=useState([1]);
    const state=useSelector((state)=>state.state.state);
    const navigate=useNavigate();
// console.log(state)

const arr=["https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/1ae72dae-ffbd-465d-81e2-4751fd06fbbe1654012895525-EORS-Desktop-Banner.jpg","https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/553384ff-be1f-4272-81d6-6f9e43fe5fe51654097949853-Dresses_Desk.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/SmallAppliances-22/LA_SA_SummerPage-22/PC_FDFO-eos-june._CB636252795_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/SmallAppliances-22/LA_SA_SummerPage-22/PC_FDFO-eos-june._CB636252795_.jpg","https://rukminim1.flixcart.com/flap/50/50/image/1502e02a73348193.jpg?q=50"]

useEffect(()=>{
    getdata();
    setSearchParams({page})
  },[page])
arr1.pop();
for(let i=2;i<=Math.ceil(count/8);i++){
    arr1.push(i);
}
  
  async function getdata(){
    const data=await fetch("http://localhost:5000/brands").then((d)=>d.json());
    setData(data);
    const data1=await fetch(`http://localhost:5000/products?page=${page}`).then((d)=>d.json());
    setProData(data1.product);
    setCount(data1.count)
  }
async function handleClick(productId){
    if(!state){
    alert("Login first");
    navigate("/login",{replace:"true"});
    
    }

    const userId=JSON.parse(localStorage.getItem("user"));
    console.log(userId[0]);
    console.log(typeof productId)
   await fetch(`http://localhost:5000/users/${userId[0]}/products/${productId}`,{
     method:"POST",
     headers:{
         "content-type":"application/json"
     },
     body:JSON.stringify({productId})
 });
}

    return (<div>
<div style={{display:"grid",gridTemplateColumns:"10% 10% 10% 10% 10% 10% 10% 10%",gridTemplateRows:"120px",border:"1px solid white",gap:"5%",margin:"1.5%"}}>
{Data.map((e)=>(<div style={{border:"5px solid black",borderRadius:"50%"}} >
<img style={{height:"90%",width:"90%",borderRadius:"50%"}} src={e.image}/>
<h4>{e.name}</h4>

</div>))}
</div>   

<div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridTemplateRows:"repeat(2,350px)",border:"1px solid white",gap:"5%",margin:"10% 3% 3% 3%"}}>
{productData.map((e)=>(<div style={{border:"5px solid black"}} >
<Link to={`/${e._id}`} > <img style={{height:"50%",width:"95%",border:"2px dotted red"}} src={e.image}/></Link>



<h3>{e.name}</h3>
<h4>Rs.{e.price}</h4>
<button onClick={()=>{handleClick(e._id)}}>ADD TO CART</button>


</div>))}


    </div>
    <div style={{fontSize:"30px",display:"flex",border:"2px solid white",margin:"5% 10% 10% 5%"}}>{arr1.map((e)=>(<div style={{cursor:"pointer",width:"35px",border:"2px dotted red",margin:"20px"}} onClick={()=>{setPage(e)}}>{e}</div>))}</div>
</div>)
}