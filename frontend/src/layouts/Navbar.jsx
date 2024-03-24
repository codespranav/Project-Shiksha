import React from 'react';
import PWSkills from '../assets/pwskillslogo.webp' 
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className='bg-white shadow-md'>
        <div className='w-full px-4 py-2 md:px-28 md:py-2'>
            <div className='flex items-center justify-between'>
                <Link to="/"><img className='w-40 md:w-36' src={PWSkills} alt="PWSkills Logo" /> </Link> 
                <div className='hidden border border-stroke-200 px-4 py-3 gap-4 md:flex items-center rounded w-[70%]'>
                    <CiSearch className=' text-xl'/>
                    <form action="" className='w-full'>
                        <input className='focus:outline-none w-full' type="text" name="" id="" placeholder='Search by course title'/>
                    </form>
                </div>
                <button className='hidden md:block bg bg-red-500 text-white px-4 py-3 rounded-md font-medium'>Login/Register</button>
                <GiHamburgerMenu className='block md:hidden text-xl cursor-pointer'/>
            </div>
        {/* navlinks section  */}
        <div className='flex justify-between flex-col md:flex-row bg-gray-400 md:bg-white items-end h-full py-4 md:items-center text-gray-800 mt-2'>
                <Link className='text-base font-semibold px-[17px] py-[9px]' to="/about">Courses</Link>
                <Link className='text-base font-semibold px-[17px] py-[9px]' to="">Job Portal</Link> 
                <Link className='text-base font-semibold px-[17px] py-[9px]' to="">Faculties</Link> 
                <Link className='text-base font-semibold px-[17px] py-[9px]' to="">Teachers</Link> 
                <Link className='text-base font-semibold px-[17px] py-[9px]' to="">Student Portal</Link> 
                <Link className='text-base font-semibold px-[17px] py-[9px]' to="">Become an Affiliate</Link> 
        </div>
        </div>

    </div>
  );
};

export default Navbar;
