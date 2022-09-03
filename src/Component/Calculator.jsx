import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState } from 'react'
import './Calculator.css'
const Calculator = () => {
    const[val,setVal] =useState(''); 
    // function Percentage(){
    //     const NewVal= val/100;
    //     setVal(val+'*')
    // }
    function Clear(){
       try {
        setVal(val.slice(0,-1));
       } catch (error) {
        setVal(val);
       }
    }

    function Eval(){
       try {
        const Calculate= eval(val);
        setVal(Calculate);
       } catch (error) {
          setVal('Error');
       }
    }
  return (
    <div className='warpper'>
       <div className='continer'>
           <div className='table'>
                        <div  id='inputFieldParent'><input type="text" name="eval" id="inputField" value={val} readOnly/></div>
                        <div className='main'> 
                            <div >
                                <button onClick={(e)=>setVal(val + e.target.value)} value='('>(</button>
                                <button onClick={(e)=>setVal(val + e.target.value)}value=')'>)</button>
                                <button onClick={()=>Clear()} value='C'>C</button>
                                <button onClick={(e)=>setVal('')} value='AC'>AC</button>
                            </div>
                            <div >
                                <button onClick={(e)=>setVal(val + e.target.value)} value='9'>9</button>
                                <button onClick={(e)=>setVal(val + e.target.value)} value='8'>8</button>
                                <button onClick={(e)=>setVal(val + e.target.value)} value='7'>7</button>
                                <button onClick={(e)=>setVal(val + e.target.value)} value='/'>/</button>
                            </div>
                            <div >
                                <button onClick={(e)=>setVal(val + e.target.value)} value='6'>6</button>
                                <button onClick={(e)=>setVal(val + e.target.value)} value='5'>5</button>
                                <button onClick={(e)=>setVal(val + e.target.value)} value='4'>4</button>
                                <button onClick={(e)=>setVal(val + e.target.value)} value='*'>*</button>
                            </div>
                            <div >
                                <button onClick={(e)=>setVal(val + e.target.value)} value='3'>3</button>
                                <button onClick={(e)=>setVal(val + e.target.value)} value='2'>2</button>
                                <button onClick={(e)=>setVal(val + e.target.value)} value='1'>1</button>
                                <button onClick={(e)=>setVal(val + e.target.value)} value='-'>-</button>
                            </div>
                            <div >
                                <button onClick={(e)=>setVal(val + e.target.value)} value='0'>0</button>
                                <button onClick={(e)=>setVal(val + e.target.value)} value='.'>.</button>
                                <button onClick={Eval} value='='>=</button>
                                <button onClick={(e)=>setVal(val + e.target.value)} value='+'>+</button>
                            </div>
                       </div>
           </div>
       </div>
    </div>
  )
}

export default Calculator