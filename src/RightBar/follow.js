import React from 'react';

export default function Follow_RightBar() {

    return (
        <div>
            
            <div className='trends'>
                <label style={{ marginLeft: '10px', marginTop: '10px' }}>Trends</label>
            </div>

            <div className='follow'>
                <div style={{ marginTop: '10px',marginLeft: '10px', fontSize:'18px',fontWeight:'bold'}} >Who to Follow </div>
           
                <hr style={{ marginTop: '10px' }} />
                
                <div style={{ marginTop: '10px',marginLeft: '10px'}}>
                    Followed Post here
                </div>

                <hr style={{ marginTop: '10px' }} />

                <button  style={{ marginLeft: '10px', fontWeight: 'bold',color:'rgb(0, 172, 238)',border: '0',marginTop: '10'}}>Show More</button>
            </div>
            
        </div>
    )
}
