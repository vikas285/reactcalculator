import React, {useState, useEffect, useRef } from "react";
import "./App.css";
function App (){
 const [result , setResult] = useState("");
 const inputRef = useRef(null);

 useEffect(() => inputRef.current.focus());
 function vr(e){
   setResult(result.concat (e.target.name));
 }

 function backspace(){
   setResult(result.slice(0 , result.length - 1));
 }
 function clear(){
   setResult("");
 }

 function calculate(){
   try{
     setResult(eval(result).toString());
   }catch(error){
     setResult("Error");
   }
 }

 return (
     <div className="calc-app">
         <from>
             
             <input type="text" value={result} ref={inputRef}/>
         </from>
         <div className ="keypad">
             <button id ="clear" onClick={clear}>Clear</button>
             <button id= "backspace" onClick={backspace}>C</button>
             <button name="+" onClick={vr}>+</button>
             <button name="7" onClick={vr}>7</button>
             <button name="8" onClick={vr}>8</button>
             <button name="9" onClick={vr}>9</button>
             <button name="-" onClick={vr}>-</button>
             <button name="4" onClick={vr}>4</button>
             <button name="5" onClick={vr}>5</button>
             <button name="6" onClick={vr}>6</button>
             <button name="*" onClick={vr}>*</button>
             <button name="1" onClick={vr}>1</button>
             <button name="2" onClick={vr}>2</button>
             <button name="3" onClick={vr}>3</button>
             <button name="/" onClick={vr}>/</button>
             <button name="0" onClick={vr}>0</button>
             <button name="." onClick={vr}>.</button>
             
             <button id="result" onClick={calculate}>Result</button>
         </div>
     </div>

 )
}

export default App;
