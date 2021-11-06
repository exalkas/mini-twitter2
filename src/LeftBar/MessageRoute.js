import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../Middle/Post';


  

export default function MessagesRoute() {

    const [data, setData] = useState();
 
    useEffect(async () => {
      const result = await axios(
        'https://elak-mini-twitter.herokuapp.com/messages/',
      );
   
      setData(result.data);
    }, []);


      console.log(data)
      console.log(data.user)

      if (!data) return ("sorry")
    return (
        data.map((ele) => <Post item = {ele}/>)
    )
}

