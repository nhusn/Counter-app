import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incriment, incrimentByAmount, reset } from './redex/counterSlice'

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.count)
    const [amount,setAmount] = useState("")
    const handleIncriment = ()=>{
        if(amount === ""){
            alert("Please Provide Amount")
        }else{
            dispatch(incrimentByAmount(Number(amount)))
        }
    }
    return (
        <div style={{ height: "70ch" }} className='d-flex justify-content-center align-items-center'>
            <div className='d-flex justify-content-center align-items-center border rounded p-5 w-25 flex-column'>
                <h1 style={{ fontSize: "100px" }}>{count}</h1>
                <div className='d-flex justify-content-between w-100 mt-5'>
                    <button onClick={() => dispatch(decrement())} className='btn btn-warning'>Decrement</button>
                    <button onClick={() => dispatch(reset())} className='btn btn-danger'>Reset</button>
                    <button onClick={() => dispatch(incriment())} className='btn btn-success'>Increment</button>
                </div>
                <div className='mt-3 d-flex'>
                    <input onChange={e=>setAmount(e.target.value)} className='form-control' type="text" />
                    <button onClick={handleIncriment} className='ms-3 btn btn-primary'>By Amount</button>
                </div>
            </div>
        </div>
    )
}

export default Counter