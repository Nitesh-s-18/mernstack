import { Link, Outlet } from "react-router-dom";

function Adminlayout() {
    return (    
        <>
        ADMIN PAGE
        <nav>
            <Link to ="/admin/dashboard">Dashboard</Link>
            <Link to ="/admin/details">Details</Link>
            <Link to ="/admin/settings">Settings</Link>
        </nav>
        <Outlet/>
        </>
     );
}

export default Adminlayout;