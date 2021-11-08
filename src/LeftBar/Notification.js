import React, {useState, useEffect } from 'react';
import Post1 from '../Middle/Post1';
import Post2 from '../Middle/Post2';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Notification() {

    const {id} = useParams() ; 
    console.log("PARAMS",id);
    const [message, setMessage] = useState(); 
    
 
    useEffect(async () => {
        console.log(id);
      const result = await axios.get(`https://elak-mini-twitter.herokuapp.com/messages/${id}`
      );
   
      if(result){setMessage(result.data); console.log("MESSAGE:", message) }
      else{
          console.log(`https://elak-mini-twitter.herokuapp.com/messages/${id}`)
      }

      
    }, []);




     function Loading(){
         while(!message){
             return "loading"
         }
         return  <Post2 item1={message} /> 
     } 
      

 
    


    return (

        <div>
          {Loading()}
        </div>
    )
}

export default Notification