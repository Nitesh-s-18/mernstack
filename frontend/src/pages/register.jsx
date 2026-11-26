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
        navigate("/")
    }
    return (  
        <>
        <form className="form" onSubmit={handleSubmit(onsubmit1)}>
        Name: <input type="text" placeholder="Enter your name" className="name"{...register("name")}/>
        <p> {errors.name?.message}</p>
        Email: <input type="email" placeholder="Enter your mail" className="name" {...register("email")}a/>
        <p> {errors.email?.message}</p>
        Password: <input type="password" placeholder="Enter your password" className="pass"{...register("password")}/>
        <p> {errors.password?.message}</p>
        Age: <input type="number" placeholder="Enter your Age" className="name" {...register("age")}/>
        <p> {errors.age?.message}</p>
        <button type="submit" className="bg-amber-600">SUBMIT</button>
        </form>
        </>
    );
}

export default Register;