import React from 'react'
import {Link} from 'react-router-dom'


function SideBarRow({Icon,title}) {
    return (
        <div className='sidebarRow'>
          <Icon />
          <Link to={`/${title}`} style={{ textDecoration: 'none', color:'#00acee'}}> <h4>{title}</h4> </Link>
        </div>
    )
}

export default SideBarRow
