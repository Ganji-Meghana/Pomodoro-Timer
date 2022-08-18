import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Signup() {

  const {register, handleSubmit, formState:{errors}}= useForm()
  const [img, setImg] = useState(null)

  const onImageSelect= (event) => {
    setImg(event.target.files[0])
  //  console.log(event)
  }

  const navigate=useNavigate()
  const onFormSubmit = (userObj) => {
    // axios.post('http://localhost:4000/user-api/create-user',userObj)
    // .then(response=>{
    //   console.log(response)
    //   alert(response.data.message)
    // })
    // .catch(error=>alert('error'))
    //create FormData object
     let formData = new FormData();
    // //append values to it
       formData.append("userObj", JSON.stringify(userObj));
       formData.append("photo", img);
    // //http post req
     axios
       .post("http://localhost:4000/user-api/create-user", formData)
       .then((response) => {
         alert(response.data.message);
         //if user created
         console.log(response.data.message)
         if (response.data.message === "New User created") {
           //navigate to login
           navigate("/login");
         }
       })
       .catch((error) => {
         console.log(error);
         alert("Something went wrong in creating user");
       });
  };


  return (
    <div className='container-fluid'>
    <div className='row'>
      <p className="display-3 text-center mt-3 mb-3">Sign up</p>
      <div className="col-11 col-sm-8 col-md-6 mx-auto">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="mb-3">
          <label htmlFor="un">Username</label>
          <input type="text" id="un" className='form-control' {...register("username", {required:true})}/>
          {errors.username?.type==='required' && <p className='text-danger'>*Username is required</p> }
          </div>
          <div className="mb-3">
          <label htmlFor="ps">Password</label>
          <input type="password" id="ps" className='form-control' {...register("password", {required:true})}/>
          {errors.password?.type==='required' && <p className='text-danger'>*Password is required</p> }
          </div>
          <div className="mb-3">
          <label htmlFor="em">Email</label>
          <input type="email" id="em" className='form-control' {...register("email" ,{required:true})}/>
          {errors.email?.type==='required' && <p className='text-danger'>*Email is required</p> }
          </div>
          <div className="mb-3">
          <label htmlFor="ci">City</label>
          <input type="text" id="ci" className='form-control' {...register("city", {required:true})}/>
          {errors.city?.type==='required' && <p className='text-danger'>*City is required</p> }
          </div>
          <div className="mb-3">
            <label htmlFor="photo">Image</label>
            <input type="file" id="photo" className='form-control' {...register("photo", {required:true})} onChange={(event)=>onImageSelect(event)}/>
            {errors.photo?.type==='required' && <p className='text-danger'>*Profile immage is required</p> }
          </div>
          <button type="submit" className="btn btn-success mt-4 mb-3">Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup