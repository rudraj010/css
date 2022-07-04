



import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  React,{useState ,useEffect,useMemo,useRef}  from 'react';
// import HomeContainer from './Container/HomeContainer' 
import axios from 'axios'

import './App.css';
import Navbar from './components1/navbar/Navbar';
import Intro from './components1/intro/Intro';
import Services from './components1/Services/Services'
import Router,{BrowserRouter} from 'react-router-dom'





// function App() {

//     return(

//     <div className="App">
//    <Navbar />
//    <Intro />
//    <Services />
      
        
         
//     </div>

//     )
// }

// export default App;
// import axios from 'axios';

// function Get()
// {
//     const[data,setData]=('')

//    useEffect(() => {
        
//         axios.get('https://gorest.co.in/public/v2/posts')
    
//         .then((resp)=>{
//           console.log(resp)
//           setData(resp)
        
          
//         })
   
        
//     },[])
    
//    return(
//        <div>
       
//                <table>
//                    <tr>
//                        <td>id</td>
//                        <td>user_id</td>
//                        <td>title</td>
//                    </tr>
//                    {
//                        data.map((item)=>
//                        <td> {item.user_id}</td>)
//                    }
//                </table>
           
       
//        </div>
//    )

// }

// export default Get;




// function Get(){

    // let Arr= [{name: "rj",last:"don"} ,{name:'mj',last:'pj'}] 
    // //  Arr.push([{name: "rj",last:"don"}])
    // //  console.log(Arr)
    // //  Arr.pop(Arr)
    // var pop_removed= Arr.pop()
    //  console.log(Arr)
    //  console.log(pop_removed)

// }
//    let arr= [{name: "rj",last:"don"} ,{name:'mj',last:'pj'} ,{name:'mj00',last:'pj00'},{name:'mj777',last:'p777j'},{name:'mjdddd777',last:'p777j'},{name:'mjdddd777',last:'p777j'}] 
    //   let arr=[1,2,3,4,5,6]
    //   arr.splice(-4,1,7)
    //   console.log(arr)
//    let newarr= arr.slice(2, -3)
//    console.log(newarr)
   
// function app(element){
  
//   let bih=  element.name.length<4

   
// }
//    let newarr=  arr.find((bih)=>
//    bih   )
//    console.log(newarr)

//    function Get1(a,b,c,...d)
//    {

//     console.log(...d)
    
    
//     }
//     Get1('apple','aam','pap','ita,','jamun',Get1)
          
// export default Get1;

// function Get1(...d)
// {
//        let ar1=['rj','vj','cj','mj']
//        let ar2=['rj',...ar1,'vj','cj','mj']

//   let newar=  [...ar2]
//   newar.push('don')
//    console.log(newar)
//    console.log(ar2)
    
    
//     }
//     // Get1(...ar1,...ar2)
          
// export default Get1;


// function* Gen(){


//     console.log(2**3)            
//     yield 'first step'           
//     console.log(2**3)                
//     yield 'second step'           
//     console.log(2**3)                  
//     yield 'third step'               


// let stp=Gen();
// function getStep(){
//     console.log(stp.next());
// }
// <button  onClick={getStep}>ssssssssss</button>
// getStep()
// }
// export default Gen;



// function  Gen(){
// let song=2
// console.log(song)
// let data=new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         resolve('dataxxxxxxxxxxxxxxxx');
//      },2000)

// })
// data.then((item)=>{

//     console.log(item)
// })
// console.log('last')

 

// }
// export default Gen;


//  async function  Gen(){
    
   
//     let data=new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             resolve('dataxxxxxxxxxxxxxxxx');
//          },2000)
         
//         })
//         console.log('a')
//          let x= await data;
//          console.log(x)
//          console.log('add')
    
     
    
//     }
   
    // let api=fetch('url').then((item)=>{
    //     item.json().then((sog)=>{
    //         console.log(sog)
    //     })
    // })
 
    
     
    
  
   
//    

//  function App() {


//   class dryFruits{

//     kaju(){

//         return 'badam';
//     }
//     kismis(){

//         return 'badam';
//     }

//   }


// class Fruits extends dryFruits{
//       a='Apple';
//       constructor() {
//        super();
       
//       }
//      Cam(){
//        let b='orange'
//         console.log( 'function' ,b)
//         console.log( isNaN(2))
//         console.log( isFinite('2'))

//      }
// }

//   let f1= new Fruits();
//   let f2= new dryFruits();

//  console.log(f1.kismis())
//  console.log(f1.Cam())


// }
// export default App;


// const f=25;
// function app (a,b){
//   var f=250;
//   var f=2500;
// let c=a+b
// ;

// console.log(c)
// console.log(f)
// } 
// console.log(f)
// console.log()
// console.log(app(5,5))
// console.log( isFinite('2'))
// console.log( isNaN({}))
// console.log( isNaN({}))


// export default app;



// function App(){

//   return(
//     <div>
//    <BrowserRouter>
// <Link to='/rout' > Home </Link> <br />
// <Link to='/rout1' > about </Link>    <br />
// <Link to='/rout12' > about </Link>  <br />
// <Link to='/math' > hh </Link> <br />
// <Link to='/param/raj' > raj page </Link>  <br />
// <Link to='/param/don' > don page </Link>
//     <Routes>
//       <Route path = '/' element={<Rout />} />
//       <Route path = '/rout1' element={<Rout1 />} />
//       {/* <Route path = '/*' element={<Page404 />} /> */}
//       <Route path = '/*' element={<Navigate to = '/' />} />
//       <Route path = '/math' element={<h1>math</h1>} />
//       <Route path = '/param/:name' element={<Param />} />
//     </Routes>
//    </BrowserRouter>


//     </div>
//   )
// }
// export default App;




// function App() {
  
//   const[name,setName]=useState('DON')
//   return (
//     <div>
//    <h1>{name} </h1> 
//    return{

//       <h1> <Sam data={(data1)=>setName(data1)} /> </h1>
//    }
//     </div>
//   )
// }

// export default App



//  function App(b,Cell){
   
   
    // setTimeout(() => {
    //     console.log(b)
    //  Cell()
    // }, timeout);
//     


//  }
//  function Bpp(){
//     let c=30;
//     console.log(c)
//   }
//   App( 'apple', Bpp)

  
// export default App;



// function App(){

//     class Fruits1 {
        
//         test1(){
//             return 'kaju'
//         }
//     }
         


//     class Fruits extends Fruits1{
//         name='apple';
//         constructor()
//         { 
//             super();
//             console.log('constructor',this.name)
//         }
//         test(){
//            let name1='mango'
//            console.log(name1);
//         }
//     }
//     let call=new Fruits();
//   let z= call.test1()
//    console.log(z)
// //    let newarr1= new Fruits1()
// //    newarr1.test1()    


// test3(){

//     let s=[1,2,3,4,5,6,7,8]
// }

// }                            
// export default App;



// async function app() {
// let data1='don'
//     console.log(data1)
// let data=  new Promise((resolve,reject) => {
    
//     setTimeout(() => {
//         reject('dataxxxxxxxxxxxxxxxx')

//     },2000);
//    })
//   let x= await data
//   console.log(x)
//   console.log('3')
//         data.catch((err)=>{
// console.log(err)
//         })   
    
    
//     }
// export default app;


function App(){

   
   let  a=[9,2,5,4,9]
   let newarry=a.filter((item)=>
         
    )
    console.log(newarry)

           
         
      
    

    
}
export default App;