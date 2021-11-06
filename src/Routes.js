import React from "react";
import { Route, Switch } from 'react-router-dom';
import Header from './header';
import PageLayout from "./Layout/withsidebar";


import Home from './LeftBar/Home';
import Explore  from './LeftBar/Explore';
import Notifications from './LeftBar/Notification';
import MessagesRoute from './LeftBar/MessageRoute';
import Bookmarks from './LeftBar/Bookmarks';
import List from './LeftBar/Lists';
import Profile from './LeftBar/Profile';

import MessageSender from './Middle/Message';


import RightBar from './RightBar/rightBar'

//<Route path="/" exact><MainLayout><Route component = {Auth(Home, null)} /></MainLayout></Route>

export default function Routes(){
    return(
        <Switch>
                <Route exact path="/Home"  ><PageLayout><Route component={Home} /></PageLayout></Route>
                <Route  exact path="/Explore" ><PageLayout><Route component={Explore}/></PageLayout></Route>
                <Route  exact path="/Notifications" component={Notifications}/>
                <Route  exact path="/Messages" component={MessagesRoute}/>
                <Route  exact path="/Bookmarks" component= {Bookmarks} />
                <Route  exact path="/List" component={List} />
                <Route  exact path="/Profile" component={Profile} />       
            </Switch>
    )
}