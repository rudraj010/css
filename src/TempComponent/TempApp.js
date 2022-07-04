import React,{useState,useEffect} from 'react';
import  './Css/style.css'

function TempApp(){
    const[city,setCity]=useState('null')
    const[search,setSearch]=useState('pune')


    useEffect(() => {
       
          const fetchApi = async()=>{

            const url = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid= {1282b83a0c51fdff416e7245a38a76e3}"

            const response = await fetch(url);
            const resJson= await response.json();
            console.log(resJson)
            // console.log(response)
            setCity(resJson)
          } 
    fetchApi();
     
  
    }
   ,[] )
  return(
   <>
   <div className="box">
  

   <div className="inputData">
   <input type="search" className="inputField" onChange={(e)=>{setSearch(e.target.value)}}  />
   

  {! city?(
    <p>no data</p>
  ):(
    <div>
    <div className="info">

<h2 className="location" style={{fontSize:'40px',fontweight:'bold'}}>{search} </h2>
<h1 className="temp">

   {city.name}
</h1>
<h3 className="tempin_max" style={{marginLeft:'3vw'}}> Min : 5.25cel |Max : 5.25cel</h3>

</div>

    </div>
  )

  }


   </div>

</div>
   </>

  )

}
export default TempApp;