import React from 'react'
import ComputerIcon from '@material-ui/icons/Computer';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/Dashboard';

function Skills() {

  return (
    <div className='Skills'>
      <div className='MiniContainer'>
        <div className='SectionTitle'>
          {"<SKILLS>"}
        </div>
        <div className='SkillsContainer'>
          <div className='skill-blocks'>
            <p className='skill-tittle'>Languages <CodeIcon/></p>
            <div className='skill-buttons-container'>
              <button className='button-gradient' type='button' >JavaScript</button>
              <button className='button-gradient' type='button' >CSS</button>
              <button className='button-gradient' type='button' >HTML</button>
              <button className='button-gradient' type='button' >C#</button>
              <button className='button-gradient' type='button' >T-SQL</button>
            </div>
          </div>
          <div className='skill-blocks'>
            <p className='skill-tittle'>Tech <DashboardIcon/></p>
            <div className='skill-buttons-container'>
              <button className='button-gradient' type='button' >React</button>
              <button className='button-gradient' type='button' >Angular</button>
              <button className='button-gradient' type='button' >Vue</button>
              <button className='button-gradient' type='button' >Git</button>
              <button className='button-gradient' type='button' >MongoDB</button>
            </div>
          </div>
          <div className='skill-blocks'>
            <p className='skill-tittle'>Others <ComputerIcon/></p>
            <div className='skill-buttons-container'>
              <button className='button-gradient' type='button' >Unity3D</button>
              <button className='button-gradient' type='button' >Excel</button>
              <button className='button-gradient' type='button' >Sitecore</button>
              <button className='button-gradient' type='button' >DotNetNuke</button>
              <button className='button-gradient' type='button' >Blender</button>
            </div>
          </div>
        </div>
        <div className='SectionTitle'>
          {"</SKILLS>"}
        </div>
      </div>
    </div>
  )
}

export default Skills