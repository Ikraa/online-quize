import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "white", 
    fontWeight:"bold"
  };
  return (
    <div>
      <div className="navbar bg-purple-400 text-black">
        <div className="flex-1">
          <Link
            style={{ fontWeight: "500", cursor: "pointer"}}
            // style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="btn btn-ghost normal-case text-xl"
          >
            Online Quiz Practice
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/statistics"
              >
                Statistics
              </NavLink>
            </li>
          
            <li>
              <HashLink 
                // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/#topics"
                title="select any topic"
                smooth
                activeStyle={{ color: 'red' }}
              >
                Topics
              </HashLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
