import React , {useState, useEffect}from 'react'
//import './Post.css'
import { Link, Switch, Redirect, useParams } from 'react-router-dom';


import {FaRegComment} from 'react-icons/fa'
import {AiOutlineRetweet} from 'react-icons/ai'
import {FcLike} from 'react-icons/fc'
import {FiShare} from 'react-icons/fi'
import axios from 'axios';

function Post2(props) {
    console.log(props)
   
    const [user, setUser] = useState();
    
    
    useEffect(async () => {
      const result = await axios(`https://elak-mini-twitter.herokuapp.com/users/${id}`
      );
   
      setUser(result.data);
    }, []);
    
    

    
    const {id} = useParams() ; 
    return (
        <div className='post'>
           <div className='postTop'>
               
               <div className='postTopInfo'>

               <img src={user?.image_url} alt=''/>
               {/* {Userfoto(props.item.user_id)} */}
                   <h3>{props.username}</h3>
                    <p>{props.timestamp}</p>
               </div>
               </div>
               <div className='postBottom'>
                   <p>{props.message}</p>
               </div>
               <div className='postImage'>
                  
               <img src={`${props.image_url}`} alt=''/>
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
// <Route path='/:id/userdetail/usercomments' exact component={CommentsDetail}  />
export default Post2


// please use state for image,comment , text etc. I have just given a default value for the same