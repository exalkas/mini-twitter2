import React from 'react';
import FollowRightBar from './follow'

export default function Header() {

      return (
        <div className='rightBar'>
          <div className='filter'>
            <div style={{marginTop:'10px',marginLeft:'10px', fontWeight:'bold',fontSize:'18px'}}>
              Search filters
            </div>

            <hr style={{ marginTop: '10px' }} />
            
            <div  style={{marginTop:'10px',marginLeft:'10px'}}>
                <p style={{marginTop:'10px',fontWeight:'bold'}}>People</p>

                  <span>From anyone</span>
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox" style={{ borderRadius: '50%',height:'20px',width:'20px'}} ></label>
               
                
                <label>People you Follow</label>
                <input type="checkbox"  style={{marginTop:'10px',marginLeft:'10px'}} />

                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Location</p>
              
               
                  <span>Anywhere</span>
                  <input type="checkbox"  style={{marginLeft:'10px'}} />
                
              
                
                  <label>Near you</label>
                  <input type="checkbox"  style={{marginTop:'10px',marginLeft:'10px'}} />
            </div>

            <hr style={{ marginTop: '10px' }} />
            
            <div  style={{marginTop:'10px',marginLeft:'10px',fontWeight:'bold',color:'rgb(0, 172, 238)'}}>Advanced Search</div>
           
          </div>
 
          <FollowRightBar/>

          
        </div>)
}
