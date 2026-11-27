import {useState} from 'react'
import login from '../assets/login.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import { resgisterschema } from '../components/formschema/registerschema';
import { cache } from 'react';
function Login()
{
const location=useLocation()
const navigate=useNavigate()
const resgisterdata=location.state
const[logindata,setLogindata]=useState({username : " ",password : " ",});
function handlechange(e)
{ e.preventDefault()
 setLogindata({
  ...logindata,
  [e.target.name]: e.target.value
  
});

}
 
  const formsubmit=(e)=>
  {
    e.preventDefault()
    
    if(resgisterdata.email===logindata.username && resgisterdata.password===logindata.password)
  {
    alert("Login successfull")
    navigate("/dashboard",{state:logindata})
  }
  else{
    alert("Invalid credentials")
  }
  
  

  }
  return( 
  <div> 
  {/*
   Email: <input type ="text"  placeholder='Enter your name' className='name'  value={email} onChange={(e) => setEmail(e.target.value)} /> <br />  
   Password: <input type ="password" placeholder='Enter your password' className='mail' value={password} onChange={(e) => {setPassword(e.target.value)}}  /><br/>
    <button type="submit" onClick ={()=> console.log(email,password)} >Submit   </button>
  */}
  
  <img src={login}  alt='Login banner' className="mx-auto mt-25 block h-35 w-auto" />
  <div className=" flex  justify-center items-center ">
    <div className='w max-w-sm  rounded-md border border-gray-400 bg-gray-100 px-6 shadow-md mt-4 pb-8 pt-4' >
  <form onSubmit= {formsubmit} className="">
    <h1 className=' text-center font-bold text-2xl '>LOGIN PAGE</h1>
   UserName: <input type ="email" id="username"required  placeholder='Enter your name' className='block w-full rounded-md border border-gray-300 px-3 py-2 text-center text-sm'  name='username'onChange={handlechange} /> <br />  
   Password: <input type ="password" required placeholder='Enter your password' className='block w-full  rounded-md border border-gray-300 px-3 py-2' name='password' onChange={handlechange}  /><br/>
   <button type="submit" className='bg-indigo-500  mx-auto block rounded-sm px-3 py-1 font-semibold text-white hover:bg-indigo-500'>Submit </button>
   </form>
   </div>
   </div>
   </div>
    
   )}
   export default Login