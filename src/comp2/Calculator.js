import React,{useState} from 'react'
import {Container,Current, Prevoius,Screen,Button} from '../style/Main'
function Calculator() {
  const[current,setCurrent]= useState('')
  const[prevoius,setPrevoius]= useState('')
  const[operation,setOperation]= useState('')
  

  function apendValueHandler(e){
    const value =e.target.getAttribute('data')
    if(value==='.' && current.includes('.')) return;
    setCurrent(current+value)
  }
  const deleteHandler=(()=>{
    setCurrent((current).slice(0,-1))
  })
  const allclearHandler=(()=>{
    setCurrent('')
    setPrevoius('')
    setOperation('')
  })
  const chooseOperationHandler = (el) => {
    if (current === "") return;
    if (prevoius !== "") {
      let value = compute();
      setPrevoius(value);
    } else {
      setPrevoius(current);
    }
    setCurrent("");
    setOperation(el.target.getAttribute("data"));
  };

  const equalHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevoius("");
    setOperation("");
  };

  const compute=( ()=> {
    let result;
    let previousNumber = parseFloat(prevoius);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operation) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "*":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  
  })
  return (
    <>
    <Container>
           <Screen>
             <Prevoius>
              {prevoius} {operation}
             </Prevoius>
             <Current>
              {current}
               </Current>
           </Screen>
          <Button gridSpan={2} control onClick={()=>allclearHandler()}>A/C</Button>
          <Button  del onClick= {deleteHandler}>DEL</Button>
          <Button data={'÷'} operation onClick={chooseOperationHandler}>÷</Button>
          <Button  data={7} number   onClick={apendValueHandler}>7</Button>
          <Button  data={8}  number onClick={apendValueHandler} >8</Button>
          <Button  data={9}  number onClick={apendValueHandler}>9</Button>
          <Button data={'*'}operation onClick={chooseOperationHandler}>*</Button>
          <Button data={4}  number  onClick={apendValueHandler}>4</Button>
          <Button data={5}   number onClick={apendValueHandler}>5</Button>
          <Button data={6}   number onClick={apendValueHandler}>6</Button>
          <Button data={'-'} operation onClick={chooseOperationHandler}>-</Button>
          <Button data={1}  number onClick={apendValueHandler}>1</Button>
          <Button data={2} number  onClick={apendValueHandler}>2</Button>
          <Button data={3}   number onClick={apendValueHandler}>3</Button>
          <Button data={'+'} operation onClick={chooseOperationHandler}>+</Button>
          <Button data={'.'} decimal  onClick={apendValueHandler}>.</Button>
          <Button data={0}  number onClick={apendValueHandler}>0</Button>
          <Button data={'='} gridSpan={2}  equals    onClick={equalHandler}>=</Button>
           </Container>
 
    </>
  )
}
export default Calculator;