import {useState} from 'react'
import login from '../assets/login.jpg'
import { useNavigate } from 'react-router-dom';
function Login()
{
  const navigate=useNavigate()
const[formdata,setFormdata]=useState({username : " ",password : " ",});
function handlechange(e)
{ e.preventDefault()
 setFormdata({
  ...formdata,
  [e.target.name]: e.target.value
});

}
 
  const formsubmit=(e)=>
  {
    e.preventDefault()
    console.log(formdata)
    alert("Form Submitted Successfully!")
    navigate("/dashboard")
  
    

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
   UserName: <input type ="email" required  placeholder='Enter your name' className='name'  name='username'onChange={handlechange} /> <br />  
   Password: <input type ="password" required placeholder='Enter your password' className='pass' name='password' onChange={handlechange}  /><br/>
   <button type="submit" className='bg-blue-400'>Submit </button>
   </form>
    </>
   )}
   export default Login