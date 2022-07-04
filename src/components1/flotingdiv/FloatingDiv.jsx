import React from 'react'

function FloatingDiv(props,text1,text) {
  return (
    <div className="flotingdiv">
    <img src="" alt='' />
    <span >
   <h1> {props.text}</h1>
    <br />
   {props.text1 }
    </span>
 
    </div>
  )
}
export default FloatingDiv ;