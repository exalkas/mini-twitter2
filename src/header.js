import react from 'react';
import { FaTwitter } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { FiArrowLeft } from 'react-icons/fi';
import {BsThreeDots} from "react-icons/bs";

export default function Header() {
    
    return (
        <div className='header'>
         
           <div>
                <FiArrowLeft className='leftArrow'/>
                <IoSearchOutline className='searchIcon' />
                <input type='text' className='searchInput' />
           </div>
           <div><BsThreeDots className='dots'/></div>       
        
        </div>)
}


