import React from 'react';
import MessageSender from '../Middle/Message';
import MessagesRoute from './MessageRoute';

function Home() {
    return (
        <>
           <MessageSender />
           <MessagesRoute />
        </>
    )
}

export default Home