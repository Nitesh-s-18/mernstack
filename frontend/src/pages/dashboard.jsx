import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../components/api"
function Dashboard() {
    const location = useLocation();
    const [count ,setCount]=useState(0)
    const[userdata, setUserdata] = useState("");
     function displaydata(){
         setUserdata(location.state);
         console.log(userdata)
     }    
    // useEffect(()=>
    // {       setUserdata(location.state)  
    //         console.log(userdata)
    // },)
    const checkendpoint=async()=>{
        const response =await API.get("/api/get")
        console.log(response.data);
    }

    return ( 
        <>
            
            <div>HI</div>
            <button onClick={()=>setCount(count+1)}>count</button><br/>
            <button onClick={()=> checkendpoint}>submit</button>
        </>
     );
}

export default Dashboard;