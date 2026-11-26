
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Task from './pages/task'
import Project from './pages/project'
import Calender from './pages/calender'
import Clients from './pages/clients'
import Dashboard from './pages/dashboard'
import Teams from './pages/teams'
import Settings from './pages/settings'
import Register from './pages/register'


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/task" element={<Task/>}/>  
    <Route path="/calender" element={<Calender/>}/>
    <Route path="/clients" element={<Clients/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/teams" element={<Teams/>}/>
    <Route path="/settings" element={<Settings/>}/>
    <Route path="/registers" element={<Register/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App
