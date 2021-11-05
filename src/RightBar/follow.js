import React from 'react';

export default function Follow_RightBar() {

    return (
        <div>
            
            <div style={{ marginTop: '10px', marginLeft: '10px', fontWeight: 'bold', borderRadius: '4%', backgroundColor: ' #cad3db', height: '32px', width: '351px' }}>
               
                <label style={{marginLeft: '10',marginTop: '10px'}}>Trends</label>
            </div>

            <div className='follow'>
                <div style={{ marginTop: '10px',marginLeft: '10px', }} >Who to Follow </div>
           
                <hr style={{ marginTop: '10px' }} />
                
                <div style={{ marginTop: '10px',marginLeft: '10px'}}>
                    Followed Post here
                </div>

                <hr style={{ marginTop: '10px' }} />

                <button  style={{ marginLeft: '10px', fontWeight: 'bold', backgroundColor: ' #cad3db',border: '0',marginTop: '10'}}>Show More</button>
            </div>
            
        </div>
    )
}
