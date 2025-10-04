import React from 'react'
import ContactPage from "./ContactPage"
import AboutPage from "./AboutPage"
import UserPage from "./UserPage"
import UserDetailPage from "./UserDetailPage"
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <nav>
        <Link to="contact"  style={{margin:'10px',width:'300px', height:'150px',border:'2px solid black', backgroundColor:'lightgray'}}>Contact Page</Link>
        <Link to= "about"  style={{margin:'10px',width:'300px', height:'150px',border:'2px solid black', backgroundColor:'lightgray'}}>About Page</Link>
        <Link to="users">Users</Link>
        
      </nav>

      <Routes>
        
        <Route  path = "contact" element={<ContactPage />}/>
        <Route  path = "about" element={<AboutPage />}/>
        <Route path="users" element={<UserPage />}/>
        <Route path="users/:id" element={<UserDetailPage />}/>
      </Routes>
      </div>
  )
}

export default HomePage