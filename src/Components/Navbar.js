import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return(
        <>
            <div className='sticky top-0'>
                <ul className='flex justify-center gap-[25%] text-[30px] font-[500] h-[50px] w-[100%] bg-[#4444]'>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/about">
                <li>About</li>
                </Link>
                <Link to="/contact">
                <li>Contact</li>
                </Link>
                </ul>
            </div>
        </>
    )
}
export default Navbar