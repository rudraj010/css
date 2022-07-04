// compoent
// container(component or redux ko map karega)
// service(isme redux rakhege)
// action
// reducer
// constant(
    // jab data action se reducer m jayega to ye batayega ki kon sa data kon si function kon sa data kaha match hoga m jana chahiye)


import React from 'react'

   function Home() 
   {

      return (
          <div style={{backgroundColor:'cyan'}}>
          <h1>Home Compoenent</h1>
      <div className="add-to-cart" >
          <img src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-512.png" style={{width:'4vw' ,float:'right' ,margin:'1vw 1vw'}}/>
      </div>
      <div className='cart-Wallpaper'>
 <img src='https://img.giznext.com/assets/model/2/100/apple-mobiles-apple-iphone-11-pro-3-1633945276.jpg' style={{width:'10vw' ,marginTop:'10vw',justifyContent:'center' ,marginLeft:'7vw'}} />

 <div className='text-wrap item'>
<span> price<h1>$1000</h1></span>
<div className='btn-wrap itrm'>
<button style={{fontSize: '25px' , backgroundColor:'red' }} >Buy Now</button>

</div>

 </div>
      </div>
      </div>
      )
    }
    export default Home;