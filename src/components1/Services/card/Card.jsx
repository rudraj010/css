import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div className="card">
  {/* <img src= "./images/gla.jpg" alt=""  style= {{borderRadius:"3vw" , backgroundColor:"red"}} />
   */}
     {props.pic}
     <span>{props.heading}</span>
     <span>{props.detail}</span>
     <button className='c-button'>Learn More</button>
    </div>
  )
}

export default Card;
 