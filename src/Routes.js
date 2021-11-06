import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './header';
import PageLayout from "./Layout/withsidebar";


import Home from './LeftBar/Home';
import Explore  from './LeftBar/Explore';
import Notifications from './LeftBar/Notification';
import MessagesRoute from './LeftBar/MessageRoute';
import Bookmarks from './LeftBar/Bookmarks';
import List from './LeftBar/Lists';
import Profile from './LeftBar/Profile';
import loginRegister from "./Login"

import MessageSender from './Middle/Message';


import RightBar from './RightBar/rightBar'

//<Route path="/" exact><MainLayout><Route component = {Auth(Home, null)} /></MainLayout></Route>

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/login"  ><Route component={loginRegister} /></Route>
                <Route exact path="/Home"  ><PageLayout><Route component={Home} /></PageLayout></Route>
                <Route  exact path="/Explore" ><PageLayout><Route component={Explore}/></PageLayout></Route>
                <Route  exact path="/Notifications/:id" ><PageLayout><Route component={Notifications}/></PageLayout></Route>
                <Route  exact path="/Messages" ><PageLayout><Route  component={MessagesRoute}/></PageLayout></Route>
                <Route  exact path="/Bookmarks" ><PageLayout><Route  component= {Bookmarks} /></PageLayout></Route>
                <Route  exact path="/List" ><PageLayout><Route  component={List} /></PageLayout></Route>
                <Route  exact path="/Profile" ><PageLayout><Route  component={Profile} />       </PageLayout></Route>
                <Redirect from='/' to='/Home'/>
            </Switch>
    )
}