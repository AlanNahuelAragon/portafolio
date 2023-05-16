import React from 'react'
import ComputerIcon from '@material-ui/icons/Computer';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { SkillsDataLang } from './SkillsDataLang'
import { SkillsDataTech } from './SkillsDataTech'
import { SkillsDataOthers } from './SkillsDataOthers'

function Skills() {

  return (
    <div id='skills' className='Skills'>
      <div className='MiniContainer'>
        <div className='SectionTitle'>
          <h1 className='title-gradient'>
            {"<Skills>"}
          </h1>
        </div>
        <div className='SkillsContainer'>
          <div className='skill-blocks'>
            <p className='skill-tittle'>Languages <CodeIcon /></p>

            <ul className='SkillList'>
              {SkillsDataLang.map((val, key) => {
                return <li
                key={key} 
                className='button-gradient'>
                <img id='skill-logo'
                  src={`${process.env.PUBLIC_URL}/assets/skills-icons/${val.image}.png`}
                  alt='Skill-Logo'
                />
                <div id='tittle'>
                  {val.tittle}
                </div>
              </li>
              })}
            </ul>

          </div>
          <div className='skill-blocks'>
            <p className='skill-tittle'>Tech <DashboardIcon /></p>

            <ul className='SkillList'>
              {SkillsDataTech.map((val, key) => {
                return <li
                key={key} 
                className='button-gradient'>
                <img id='skill-logo'
                  src={`${process.env.PUBLIC_URL}/assets/skills-icons/${val.image}.png`}
                  alt='Skill-Logo'
                />
                <div id='tittle'>
                  {val.tittle}
                </div>
              </li>
              })}
            </ul>

          </div>
          <div className='skill-blocks'>
            <p className='skill-tittle'>Others <ComputerIcon /></p>

            <ul className='SkillList'>
              {SkillsDataOthers.map((val, key) => {
                return <li
                  key={key} 
                  className='button-gradient'>
                  <img id='skill-logo'
                    src={`${process.env.PUBLIC_URL}/assets/skills-icons/${val.image}.png`}
                    alt='Skill-Logo'
                  />
                  <div id='tittle'>
                    {val.tittle}
                  </div>
                </li>
              })}
            </ul>

          </div>
        </div>
        <div className='SectionTitle'>
          <h1 className='title-gradient'>
            {"</Skills>"}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Skills