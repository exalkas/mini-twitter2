// dependancies -- pplease install react icons


import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import SideBarRow from './SideBarRow'
import {BiHash} from 'react-icons/bi'
import {IoMdNotifications} from 'react-icons/io'
import {BiMessageAltDetail} from 'react-icons/bi'
import {MdBookmark} from 'react-icons/md'
import {BsList} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {CgMoreO} from 'react-icons/cg'
import {BsTwitter} from 'react-icons/bs'
// import  './Sidebar.css'


function Sidebar() {

    return (
        <div className='sidebar' style={{ marginLeft: '10px' }}> 
          <SideBarRow Icon={BsTwitter} title=''/> 
          <SideBarRow Icon={AiFillHome} title='Home'/>
          <SideBarRow Icon={BiHash} title='Explore'/>
          <SideBarRow Icon={IoMdNotifications} title='Notifications'/>
          <SideBarRow Icon={BiMessageAltDetail} title='Messages'/>
          <SideBarRow Icon={MdBookmark} title='Bookmarks'/>
          <SideBarRow Icon={BsList} title='Lists'/>
          <SideBarRow Icon={CgProfile} title='Profile'/>
          <SideBarRow Icon={CgMoreO} title='More'/> 
          <button type='button'>Tweet</button>
          
        </div>
    )
}

export default Sidebar
