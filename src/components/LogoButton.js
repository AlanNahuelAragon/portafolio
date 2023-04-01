import React, { useState, useEffect } from 'react'
const colors = [
    'white',
    'linear-gradient(146deg, rgba(255,0,0,1) 0%, rgba(232,255,0,1) 100%)',//RYellow
    'linear-gradient(146deg, rgba(14,255,0,1) 0%, rgba(241,255,0,1) 70%)',//YGreen
    'linear-gradient(146deg, rgba(2,0,36,1) 0%, rgba(0,255,8,1) 0%, rgba(0,255,248,1) 100%)',//GCyan
    'linear-gradient(146deg, rgba(0,5,255,1) 0%, rgba(0,215,255,1) 73%)',//CBlue
    'linear-gradient(146deg, rgba(2,0,36,1) 0%, rgba(0,14,255,1) 0%, rgba(230,0,255,1) 100%)',//BMagenta
    'linear-gradient(146deg, rgba(2,0,36,1) 0%, rgba(248,0,255,1) 0%, rgba(255,0,0,1) 100%)'//MRed
];
let i = 0;

function LogoButton() {
    let [BackgroundColor, setBackgroundColor] = useState("white");
    useEffect(() => {
        //change the bg after render
        document.body.style.background = colors[i];
    })
    const changeBackgroundColor = ()=>{
        //change the theme value
        setBackgroundColor(changeTheme())
      }
    //random color picker, may use in the future
    /*
    const getRandomColor = () => {
        return "#" + Math.random().toString(16).slice(2, 8);
     
    }*/
    const changeTheme = () => {
        i<6? i++:i=0;
        console.log(colors[i])
        return colors[i]
    }
    return (
        <img id='logobtn'
            src={`${process.env.PUBLIC_URL}/assets/AADFCC.svg`}
            className='Logo'
            style={{background:BackgroundColor}}
            onClick={changeBackgroundColor} alt='Logo' />
    )

}

export default LogoButton