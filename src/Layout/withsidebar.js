import React from 'react';
import '../App.css';

import Header from '../header';


//import Sidebar from '../LeftBar/Sidebar';
import Sidebar from '../LeftBar/Sidebar'

import Home from '../LeftBar/Home';
import Explore  from '../LeftBar/Explore';
import Notifications from '../LeftBar/Notification';
import MessagesRoute from '../LeftBar/MessageRoute';
import Bookmarks from '../LeftBar/Bookmarks';
import List from '../LeftBar/Lists';
import Profile from '../LeftBar/Profile';
import Routes from '../Routes';

import MessageSender from '../Middle/Message';



import RightBar from '../RightBar/rightBar'

function PageLayout(props) {
  return (

    <div className="App" style={{ display: 'flex' }} >
      
      
      
      <div className='parentContainer'>
        <div className='sidebarMainPage'>
            <Sidebar />
            
        </div>
       
      </div>
     
      <div>
        <div>
          <Header />
        </div>   
        <div> 
            <div className='MessageMainPage'>
            {props.children}
                  {/* <MessageSender /> */}
            </div>
            <div className='MessageMainPage'>
            </div>
        </div>
      </div>
      <div>  <RightBar /></div>
    </div>
  );
}

export default PageLayout;