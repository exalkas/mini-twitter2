import React from 'react'
//import './Post.css'
import {CgProfile} from 'react-icons/cg'
import {FaRegComment} from 'react-icons/fa'
import {AiOutlineRetweet} from 'react-icons/ai'
import {FcLike} from 'react-icons/fc'
import {FiShare} from 'react-icons/fi'

function Post1() {
    return (
        <div className='post'>
           <div className='postTop'>
               <CgProfile />
               <div className='postTopInfo'>
                   <h3>username</h3>
                    <p>timestamp</p>
               </div>
               </div>
               <div className='postBottom'>
                   <p>Hello Good Morning!!</p>
               </div>
               <div className='postImage'>
                  <img src='https://images2.alphacoders.com/910/thumb-1920-910289.jpg' alt=''/>
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

export default Post1


// please use state for image,comment , text etc. I have just given a default value for the same