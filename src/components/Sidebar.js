import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData'
import LogoButton from './LogoButton';



function Sidebar({handleClick}) {
    return <div className='Sidebar'>
        <div className='SidebarContainer'>
        <LogoButton/>
        <ul className='SidebarList'>

            {SidebarData.map((val, key) => {
                return <li
                    key={key}
                    className='row'
                    id={window.location.pathname === val.link ? 'active' : ''}
                    onClick={() => handleClick(val.link)}
                    >
                    <div id='icon'>
                        {val.icon}
                    </div>{" "}
                    <div id='tittle'>
                        {val.tittle}
                    </div>
                </li>
            })}
        </ul>
        </div>
        
    </div>
}

export default Sidebar