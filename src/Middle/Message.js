import React from 'react'
//import './Message.css'
import {CgProfile} from 'react-icons/cg'
import {BiImage} from 'react-icons/bi'
import {AiOutlineFileGif} from 'react-icons/ai'
import {BiPoll} from 'react-icons/bi'
import {GoSmiley} from 'react-icons/go'
import {GrSchedule} from 'react-icons/gr'
import Post from './Post'

function MessageSender() {


    return (
        <div className='messageSender'>
          <div className='messageSenderTop'>
                    <CgProfile/>
              <form>
                  <input className='messageSenderInput'  type='text' placeholder="what's on your mind"/>
              </form>
              </div>  
              <div className='messageSenderBottom'>
                      <BiImage/>
                      <AiOutlineFileGif/>
                      <BiPoll/>
                      <GoSmiley/>
                      <GrSchedule/>  
                      <button type='submit'>Tweet</button>
              </div>  
              <Post /> 
        </div>
    )
}

export default MessageSender
