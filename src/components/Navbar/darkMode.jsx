import React, { useState } from 'react'

export const DarkMode=()=> {
    const [mode,setMode]=useState(true);
    const handleDarkMode=()=>{
        document.body.classList.toggle('dark-mode');
        setMode(!mode);
        console.log(mode);
    }
      return (
    <div>
        {
            mode?<i onClick={handleDarkMode} className='fa fa-dark-moon'>dark</i>:<i onClick={handleDarkMode} className='fa fa-dark-moon'>light</i>
        }
    </div>
  )
}

