
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './header';

import Sidebar from './LeftBar/Sidebar';

import Home from './LeftBar/Home';
import Explore  from './LeftBar/Explore';
import Notifications from './LeftBar/Notification';
import MessagesRoute from './LeftBar/MessageRoute';
import Bookmarks from './LeftBar/Bookmarks';
import List from './LeftBar/Lists';
import Profile from './LeftBar/Profile';

import MessageSender from './Middle/Message';


import RightBar from './RightBar/rightBar'

function App() {
  return (

    <div className="App" style={{ display: 'flex' }} >
      
      
      
      <div className='parentContainer'>
        <div className='sidebarMainPage'>
            <Sidebar />
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route  path="/Explore" component={Explore}/>
                <Route  path="/Notifications" component={Notifications}/>
                <Route  path="/Messages" component={MessagesRoute}/>
                <Route  path="/Bookmarks" component= {Bookmarks} />
                <Route  path="/List" component={List} />
                <Route  path="/Profile" component={Profile} />       
            </Switch>
        </div>
       
      </div>
     
      <div>
        <div>
          <Header />
        </div>   
        <div> 
            <div className='MessageMainPage'>
                  <MessageSender />
            </div>
            <div className='MessageMainPage'>
            </div>
        </div>
      </div>
      <div>  <RightBar /></div>
    </div>
  );
}

export default App;
