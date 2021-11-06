import React, {useState, useEffect } from 'react';
import Post1 from '../Middle/Post1';
import Post2 from '../Middle/Post2';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Notification() {

    const {id} = useParams() ; 
    console.log("PARAMS",id);
    const [message, setMessage] = useState(); 
    
    console.log(`https://elak-mini-twitter.herokuapp.com/messages/${id}`)
 
    useEffect(async () => {
        console.log(id);
      const result = await axios.get(`https://elak-mini-twitter.herokuapp.com/messages/${id}`
      );
   
      if(result){setMessage(result.data); console.log("MESSAGE:", message) }
      else{
          console.log(`https://elak-mini-twitter.herokuapp.com/messages/${id}`)
      }

      
    }, []);


      
      

 
    


    return (

        <div>
            <Post2 item1={message} />
        </div>
    )
}

export default Notification