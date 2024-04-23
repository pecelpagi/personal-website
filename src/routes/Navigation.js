import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Outlet />
    </div>
  )
}

export default Navigation