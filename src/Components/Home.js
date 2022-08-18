import React from 'react'
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import {MdDelete} from 'react-icons/md'
import '../Components/Home.css'
import { Outlet, NavLink } from 'react-router-dom'
import {Nav} from 'react-bootstrap'


function Home() {
  const {register, handleSubmit, formState:{errors}}=useForm()
  const [todos,setTodos]=useState([])

  const onFormSubmit = (todoObj) => {
    
    setTodos([...todos,todoObj.todo])
    
  
  }
  const deleteTask=(id)=>{
    const updatedItems = todos.filter((todo, index)=>index!==id)
    setTodos(updatedItems)
  }
 

  return (

    <div >
    <Nav className="justify-content-center mt-4" variant='pills'>
      <Nav.Item>
        <Nav.Link as={NavLink} to="pomodoro"  className='nav_link'>
           Pomodoro
        </Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link as={NavLink} to="shortBreak" className='nav_link'>
           Short Break
        </Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link as={NavLink} to="longBreak" className='nav_link'>
           Long Break
        </Nav.Link>
      </Nav.Item>
    </Nav>      
    <Outlet/>
    <timeImg/>
    <div className='row'>
      <div className="col-11 col-sm-8 col-md-5 mx-auto mt-5">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div >
          <label htmlFor="todo">Enter Task</label>
          <input type="text" id="todo" className='form-control' {...register("todo")}/>
        </div>
        <button type='submit' className="btn btn-success mt-3">Add Task</button>
      </form>
      <p>List of Tasks</p> 
      {
        todos.map((todo,index)=><p className='bg-light p-2 shadow-lg' key={index} >{todo}<MdDelete size={20} className='delete' onClick={()=>deleteTask(index)}/></p>)
      }
      </div>
    </div>        
    </div>
  )
}

export default Home