import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
 return (
    <nav className="bg-blue-800 px-12 py-4"> {/* Changed background color to blue */}
      <div className="container mx-auto flex justify-between items-center ">
        <Link to="/" className="text-white text-xl hover:text-blue-300 duration-125">Home</Link> {/* Changed hover color to blue */}
        <div className="w-1/2 mx-4">
          <div className="flex justify-start">
            <Link to="/add" className="text-white text-xl hover:text-blue-300 duration-125">+ Add User</Link> {/* Changed hover color to blue */}
          </div>
        </div>
      </div>
    </nav>
 );
}

export default NavBar;
