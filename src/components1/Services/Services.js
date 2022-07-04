import React from 'react'
import './Services.css'
import Card from './card/Card';
 function Services() {
  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
      
        <span>My Services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
       
          <button className="button s-button">Download CV</button>
        
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right sider  */}
     <div className="cards">
     <div style={{left:"14rem"}}>
    <Card
     pic={ <img src= "./images/gla.jpg" alt=""   style= {{borderRadius:"3.9vw" , width:"7vw" }}/ >}
    heading={'Design'}
    detail ={'Figma ,Sketch ,Photoshop ,Adobe ,Adobe xd'} />
    </div>
    <div  style= {{ top:"16rem" ,right:"14rem" }}>
    <Card 
      pic={< img src="./images/gl.png "  alt=""   style= {{borderRadius:"3.9vw" , width:"7vw" ,left:"12rem"}} />}
      heading={"Developer"}
      detail={"Html ,Css,JavaScript,React js"}
    />
     </div>
    <div  style= {{ top:"24rem" ,right:"-10rem" }}>
    <Card 
      pic={< img src="./images/ll.png "  alt=""   style= {{borderRadius:"3.9vw" , width:"7vw" ,left:"12rem"}} />}
      heading={"Marketing"}
      detail={"Social Media Handling,Degetal Marketing"}
    />
    <div
          className="blur  s-blur2"
          style={{ background: "purple" }}
        ></div>
     </div>

    </div>

     </div>
  )
}
export default Services;