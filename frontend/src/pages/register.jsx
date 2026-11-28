import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { resgisterschema } from "../components/formschema/registerschema";

function Register() {
    const navigate=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(resgisterschema)})
    function onsubmit1(data){
        console.log(data)
        alert("register success")
        navigate("/",{
            state:data
        })
    }
    return (  
        <>
         <div className=" flex  justify-center items-center ">
         <div className='mt-25 w max-w-sm  rounded-md border border-gray-400 bg-gray-100 px-3 shadow-md mt-4 pb-8 pt-4' >
        <form className="form" onSubmit={handleSubmit(onsubmit1)}>
            <h1 className=' text-center font-bold text-2xl '>REGISTER PAGE</h1>
        Name: <input type="text" placeholder="Enter your name" className='block w-full rounded-md border border-gray-300 px-3 py-2 text-center text-sm' {...register("name")}/>
        <p> {errors.name?.message}</p>
        Email: <input type="email" placeholder="Enter your mail" className='block w-full rounded-md border border-gray-300 px-3 py-2 text-center text-sm'  {...register("email")}a/>
        <p> {errors.email?.message}</p>
        Password: <input type="password" placeholder="Enter your password" className='block w-full rounded-md border border-gray-300 px-3 py-2 text-center text-sm' {...register("password")}/>
        <p> {errors.password?.message}</p>
        Age: <input type="number" placeholder="Enter your Age" className='block w-full rounded-md border border-gray-300 px-3 py-2 text-center text-sm'  {...register("age")}/>
        <p> {errors.age?.message}</p>
        <button type="submit" className='bg-indigo-500 mt-5 mx-auto block rounded-sm px-3 py-1 font-semibold text-white hover:bg-indigo-500'>SUBMIT</button>
        </form>
        </div>
        </div>
        </>
    );
}

export default Register;