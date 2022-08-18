import React from 'react'
import {useForm} from 'react-hook-form'
import {useSelector, useDispatch} from 'react-redux'
import {userLogin} from '../Slices/userSlice'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import loginImg from './Images/login.svg'

function Login() {
const {register, handleSubmit, formState:{errors}}=useForm()

let {userObj, isError, isLoading, isSuccess, errMsg}=useSelector(state=>state.user)
let dispatch=useDispatch()
let navigate = useNavigate();

 //this to be executed when either isSuccess or isError changed
useEffect(() => {
  if (isSuccess) {
    navigate("/userdashboard");
  }
}, [isSuccess, isError]);

const onFormSubmit=(userCredentialsObj) => {
//  if(userCredentialsObj.userType==="user")
  dispatch(userLogin(userCredentialsObj))
  // if(userCredentialsObj.userType==="admin")
  // alert("Admin development in progress")
}
  return (
    <div className='container-fluid'>
      <div className='row'>
      <p className="display-3 text-center mt-5 mb-4">Login</p>
      <img src={loginImg} alt="" width={100} height={105} className='mt-4 mb-4'/>
      <div className="col-11 col-sm-8 col-md-6 mx-auto">
        <form onSubmit={handleSubmit(onFormSubmit)}>
       {/*  */}
          <div className="mb-4">
          <label htmlFor="un">Username</label>
          <input type="text" id="un"  className='form-control' {...register("username", {required:true})}/>
          {errors.username?.type==='required' && <p className='text-danger'>*Username is required</p> }
          </div>
          <div className="mb-4">
          <label htmlFor="ps">Password</label>
          <input type="password" id="ps" className='form-control' {...register("password", {required:true})}/>
          {errors.password?.type==='required' && <p className='text-danger'>*Password is required</p> }
          </div>
          <button type="submit" className="btn btn-success  mt-4 mb-5">Login</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login