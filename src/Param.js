import {useParams} from 'react-router-dom'
function Param(){

    let params =useParams()
    let  {name}= params
    return(
      <div>
     
     
     <h1> this is {name} page </h1>
  
  
      </div>
    )
  }
  export default Param;