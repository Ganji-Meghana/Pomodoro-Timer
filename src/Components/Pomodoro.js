import React from 'react'
import {useState} from 'react'
import './Pomodoro.css'

function Pomodoro() {
    const [time,setTime] = useState({s:0, m:25})
    let updatedS=time.s, updatedM=time.m, intervalId,f;
    const startTimer=()=>{
        intervalId= setInterval(run, 1000, intervalId)
    }
    
    const run=(intervalId)=> {
        if(updatedS==0) {
            console.log('hi')
            updatedM--;
            updatedS=60
            f=0
        }
        if(updatedM<0) {
             clearInterval(intervalId)
             f=1
        }
        if(f==0)   {
        updatedS--;
        return setTime({s:updatedS, m:updatedM})
        }
    }

    return (
        <div className='bgTimer'>
        <div className='p-4 text-center mt-5  me-5 ms-5 bg-success bg-gradient bg-opacity-10 shadow'>
            <h5 className='bg-success bg-gradient p-4 text-white'>Pomodoro</h5>
            <div className=" bg-success bg-gradient bg-opacity-75 p-4">
           <h1 className='d-inline pe-2 text-white'>{(time.m>=10)? time.m : "0"+time.m}</h1>
           <span className='text-white display-5'>:</span>
           <h1 className='d-inline ps-2 text-white'>{(time.s>=10)? time.s : "0"+time.s}</h1>
           <br />
           </div>
           <button className='btn mt-3 text-white  bg-success bg-gradient bg-opacity-50'  onClick={startTimer}>Start</button>
        </div>
        </div>
    )
}

export default Pomodoro