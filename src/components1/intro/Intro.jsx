
import React from 'react';
import './intro.css'
import FloatingDiv from "../flotingdiv/FloatingDiv";
function Intro()

{
return (
    <div className='intro'> 
    <div className='i-left'>
        <div className='i-name'>

            <span>Hi ! I Am </span>
            <span> Raj </span>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio exercitationem excepturi consequatur vitae nemo, deleniti aliquid atque. Accusantium nesciunt in sint nisi quia, cupiditate quas aliquid! Omnis recusandae numquam eligendi?</span>
        </div>
        <button type="button" className="button i-button">Hire Me</button>
        <div className='i-icons'>
        <a href="#" >

            <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" alt ='' style={{width :'53px'}}/>
        </a>
        <a href='#'>

            <img src="https://icon-library.com/images/instagram-icon-png/instagram-icon-png-6.jpg"  alt =''  style={{width :'48px' ,}} />
        </a>
        </div>
    </div>
    <div className='i-right'  >
    <img src = "./images/code.jpg" alt=''/> 
   
    <div className='i-emoji' >
        <img src = "./images/emoji.webp"  />
    </div>

 </div>
    
    </div>
);

}
export default Intro;