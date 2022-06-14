import { useEffect, useState } from "react"

export const Product=()=>{
    const [Options,setOption]=useState([]);
    const [color,setColor]=useState("");
    const [categories,setCate]=useState("");
    const [size,setSize]=useState("");
    const [name,setName]=useState("");
    const [brandId,setBrandId]=useState("");
    const [price,setPrice]=useState(0);
    const [image,setImage]=useState("");
    

    useEffect(()=>{
     getData()
    },[])
    
async function getData(){

    const data=await fetch("http://localhost:5000/brands").then((d)=>d.json());
    setOption(data);

       
}

    const style1={
    
        height:"40px",
        width:"200px",
        margin:"10px"
    }
    
    function handleChange(e){
        if(e.target.id=="name"){
            setName(e.target.value)
        }
        if(e.target.id=="image"){
            setImage(e.target.value)
        }
    if(e.target.id=="price"){
         setPrice(e.target.value);
    }if(e.target.id=="categories")
    {
        setCate(e.target.value);
    }
    if(e.target.id=="size"){
        setSize(e.target.value);
    } if(e.target.id=="brandId"){
        setBrandId(e.target.value);
    }if(e.target.id=="color"){
        setColor(e.target.value);
    }
    }
  function handleSubmit(){

    fetch("http://localhost:5000/products",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
        name:name,
        image:image,
        price:price,
        color:color.split(","),
        size:size.split(","),
        categories:categories.split(","),
        brandId:brandId
        })

    })
    
  }

    
    return (<div>
    
     
         <input id="name" onChange={handleChange} style={style1} type="text" placeholder="Name"/>
         <br/>
         <input id="image" onChange={handleChange} style={style1} type ="text" placeholder="Image"/>
         <br/>
         <input id="price" onChange={handleChange} style={style1} type="text"  placeholder="Price"/>
         <br/>
         <input id="color" onChange={handleChange} style={style1} type="text" placeholder="Color saperated by ,"/>
         <br/>
         <input id="size" onChange={handleChange} style={style1} type="text" placeholder="Size saperated by ,"/>
         <br/>
         <input id="categories" onChange={handleChange} style={style1}  type="text"  placeholder=" Categories saperated by ," />
         <br/>
         <select  id="brandId" onChange={handleChange} style={style1}>
             <option key="1">Select Brand</option>
             {Options.map((e)=>(
                 <option key={e.id} id="BrandId" value={e._id}>{e.name}</option>
             ))}
         </select>
         <br/>
       <button onClick={handleSubmit}>Submit</button>   
   
    
    
    </div>)
    
    
    }