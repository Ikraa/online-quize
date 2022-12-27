import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-purple-400 text-black">
        <div className="flex-1">
          <Link style={{fontWeight:"500",cursor:"pointer"}} className="btn btn-ghost normal-case text-xl">
            Online Quiz Practice
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link style={{fontWeight:"500",cursor:"pointer"}} to="/home">Home</Link>
              <Link style={{fontWeight:"500",cursor:"pointer"}} to="/statistics">Statistics</Link>
            </li>
            <li tabIndex={0}>
              <Link style={{fontWeight:"500",cursor:"pointer"}} to="/home" title="select any topic">
                Topics
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link style={{fontWeight:"500",cursor:"pointer"}} to="">Submenu 1</Link>
                </li>
                <li>
                  <Link style={{fontWeight:"500",cursor:"pointer"}} to="">Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link style={{fontWeight:"500",cursor:"pointer"}} to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
