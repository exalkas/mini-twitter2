import './App.css';
import Sidebar from './Components/Sidebar';
import MessageSender from './Components/Message';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Explore  from './Components/Explore';
import Notifications from './Components/Notifications';
import MessagesRoute from './Components/MessagesRoute';
import Bookmarks from './Components/Bookmarks';
import List from './Components/Lists';
import Profile from './Components/Profile';


//Please install react router dom and react icons
//Below roots shows some issues. Kindly check what i am missing
//I have created seperate .css file for the sidebar, messages and post. 



function App() {
  return (
    <div className="App">
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
        <div className='MessageMainPage'>
               <MessageSender />
        </div>
        <div className='MessageMainPage'>
        </div>  
      </div>
    </div>
  );
}

export default App;
