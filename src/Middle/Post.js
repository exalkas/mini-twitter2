import React , {useState, useEffect}from 'react'
//import './Post.css'


import {FaRegComment} from 'react-icons/fa'
import {AiOutlineRetweet} from 'react-icons/ai'
import {FcLike} from 'react-icons/fc'
import {FiShare} from 'react-icons/fi'
import axios from 'axios';

function Post(props) {
    console.log("pops:", props);
    
    
    const Userfoto = ((id)=> {

        const [user, setUser] = useState();
 
    useEffect(async () => {
      const result = await axios(`https://elak-mini-twitter.herokuapp.com/users/${id}`
      );
   
      setUser(result.data);
    }, []);


      console.log(user)
      

      if (!user) return ("sorry")


        return(<img src={`${props.item.image_url}`} alt=''/>)

    })
    
    return (
        <div className='post'>
           <div className='postTop'>
               
               <div className='postTopInfo'>
               <img src={`${props.item.image_url}`} alt=''/>
                   <h3>{props.item.username}</h3>
                    <p>{props.item.timestamp}</p>
               </div>
               </div>
               <div className='postBottom'>
                   <p>{props.item.message}</p>
               </div>
               <div className='postImage'>
                  
               </div>
               <div className='postOptions'>
               <div className='postOption'>
                    <FaRegComment />
                   </div>
                   <div className='postOption'>
                    <AiOutlineRetweet />
                    <p>Comment</p>
                   </div>               
                   <div className='postOption'>
                    <FcLike />
                   </div>  
                     <div className='postOption'>
                    <FiShare />
                   </div>
               </div> 
        </div>
    )
}

export default Post


// please use state for image,comment , text etc. I have just given a default value for the same