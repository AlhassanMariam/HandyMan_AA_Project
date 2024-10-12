import React, { useState } from 'react'; 
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 
import { Link } from 'react-router-dom';



const Navbar = ({ id, onLogout }) => {
   
    const [openNav, setOpenNav] = useState(true);

    const ToggleNavBar = () => {
        setOpenNav(!openNav);
    };

    return (
        <>
            {/* Main Navigation Bar */}
            <nav className='flex justify-between items-center h-20 mx-auto px-5 text-[balck]'>
                
                <h1 className='font-semibold text-3xl'>handyhub</h1>
                
                {/* Desktop Navigation Links */}
                <ul className='hidden md:flex space-x-6 text-xl  font-semibold'>

                   <li className='hover:text-[#0E3995] '> <Link to={"/"}> Home </Link> </li>
                   <li className='hover:text-[#0E3995]'> <Link to={"/services"}> Services</Link> </li>
                    <li className='hover:text-[#0E3995]'><Link to={"/gallery"}> Gallery </Link></li>
                    <li className='hover:text-[#0E3995]'><Link to={"/blog"}> Blog </Link></li>
                    <li className='hover:text-[#0E3995]'><Link to={"/welcome"}> Contact Us </Link></li>

                   
                </ul>
                
                {/* Desktop Buttons */}
                {id ? (
                    <>
                    <div className='hidden space-x-4 md:flex'>
                    <button onClick={onLogout} className="bg-[#0E3995] px-4 py-2 rounded">
                      Logout
                    </button>
                    </div>
                  </>
                ) : (
                  <>
                <div className='hidden space-x-4 md:flex'>
                <Link to={"/Register"}><button className='border border-[#0E3995] text-[#0E3995] px-4 py-2 hover:bg-[#0E3995] hover:text-white font-bold rounded-md'>Request Service</button></Link>
                </div>
                </>
          )}
                
                {/* Hamburger Menu Icon for Mobile */}
                <div className='fixed md:hidden right-6' onClick={ToggleNavBar}>
                    {/* Toggle between open and close icons based on openNav state */}
                    {!openNav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>

                {/* Mobile Navigation Menu */}
                <div className={!openNav ? 'left-[0%] fixed top-0 w-[60%]  h-full block pl-4 pt-4 ease-in-out duration-500 md:hidden' : "fixed left-[100%] ease-in-out duration-500"}>
                    {/* Logo in Mobile Menu */}
                    <h1 className='text-[27px]  font-bold'>Handyhub</h1>
                    
                    {/* Mobile Navigation Links */}
                    <ul className='block pt-8 space-y-4'>
                        <li className='border-b border-[#0E3995]'> <Link to={"/"}> Home </Link>  </li>
                        <li className='border-b border-[#0E3995]'> <Link to={"/DisplayShoppingList"}> Service </Link>  </li>
                        <li className='border-b border-[#0E3995]'> <Link to={"/gallery"}> Gallery </Link> </li>
                        <li className='border-b border-[#0E3995]'> <Link to={"/blog"}> Blog </Link> </li>
                        <li className='border-b border-[#0E3995]'> <Link to={"/AddNew"}> Contact Us </Link> </li>
                    </ul>
                    
                    {/* Mobile Buttons */}
                    {id ? (
                    <>
                    <button onClick={onLogout} className="bg-red-500 px-4 py-2 rounded">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <div className='block pt-5 space-y-4'>
                    <Link to={"/Register"}><button className='border border-[#0E3995] hover:bg-[#0E3995] hover:text-white bg-violet-200 w-full py-2 text-[black] font-bold rounded-md'>Request Service</button></Link>
                    </div>
                    </>
          )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;