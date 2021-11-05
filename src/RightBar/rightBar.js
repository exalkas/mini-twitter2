import React from 'react';
import Follow_RightBar from './follow'

export default function Header() {

      return (
        <div className='rightBar'>
          <div className='filter'>
            <div style={{marginTop:'10px',marginLeft:'10px', fontWeight:'bold'}}>
              Search filters
            </div>

            <hr style={{ marginTop: '10px' }} />
            
            <div  style={{marginTop:'10px',marginLeft:'10px'}}>
                <p style={{marginTop:'10px',fontWeight:'bold'}}>People</p>

                <div style={{marginTop:'10px'}}>
                  <label>From anyone</label>
                  <input type="checkbox" />
                </div>
                
                <label>People you Follow</label>
                <input type="checkbox"  style={{marginTop:'10px',marginLeft:'10px'}} />

                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Location</p>
              
                <div  style={{marginTop:'10px'}}>
                  <label>Anywhere</label>
                  <input type="checkbox"  style={{marginLeft:'10px'}} />
                
                 </div>
                
                  <label>Near you</label>
                  <input type="checkbox"  style={{marginTop:'10px',marginLeft:'10px'}} />
            </div>

            <hr style={{ marginTop: '10px' }} />
            
            <div  style={{marginTop:'10px',marginLeft:'10px'}}>Advanced Search</div>
           
          </div>
 
          <Follow_RightBar/>

          
        </div>)
}
