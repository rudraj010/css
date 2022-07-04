


function Picture(props) {

if(props.profile==='')
{
throw new Error('erroe')
}else{

}

    return (
      <div className="App">
  <h1> this is picture</h1>
  <img src = {props.profile} alt="" />
  
      </div>
    )
  }
  export default Picture;