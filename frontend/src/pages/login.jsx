import {useState} from 'react'
import login from '../assets/login.jpg'
function Login()
{
const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const formsubmit=(e)=>
  {
    e.preventDefault()
    console.log(email,password)

  }
  return( 
  <> 
  {/*
   Email: <input type ="text"  placeholder='Enter your name' className='name'  value={email} onChange={(e) => setEmail(e.target.value)} /> <br />  
   Password: <input type ="password" placeholder='Enter your password' className='mail' value={password} onChange={(e) => {setPassword(e.target.value)}}  /><br/>
    <button type="submit" onClick ={()=> console.log(email,password)} >Submit   </button>
  */}
  <h1 className='header'>LOGIN PAGE</h1>
  <img src={login} className='image'/>
  <form onSubmit= {formsubmit} className="form">
   Email: <input type ="text" required  placeholder='Enter your name' className='mail'  value={email} onChange={(e) => setEmail(e.target.value)} /> <br />  
   Password: <input type ="password" required placeholder='Enter your password' className='pass' value={password} onChange={(e) => {setPassword(e.target.value)}}  /><br/>
   <button type="submit" className='bg-blue-400'>Submit </button>
   </form>
    </>
   )}
   export default Login