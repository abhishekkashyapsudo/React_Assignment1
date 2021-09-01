import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Blogs List</NavLink>&nbsp;
          <NavLink to="/newblog">New Blog</NavLink>
       </div>
    );
}
 
export default Navigation;