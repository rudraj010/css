import React from 'react'
let data1='babbbhu'
function Sam(props) {
  return (
    <div>
    {/* <h1>child</h1> */}
      <button  onClick={()=> props.data(data1)}>dddddd</button>
    </div>
  )
}

export default Sam
