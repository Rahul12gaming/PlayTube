
import { useContext, useState } from "react"

import '../../styles/navbar.css'
import { DataContext } from "../../context/context"
import {MdDarkMode} from 'react-icons/md'
import { MdOutlineLightMode } from "react-icons/md"
import {IoIosSearch} from 'react-icons/io'
import { CgClose } from "react-icons/cg"
import {SlMenu} from 'react-icons/sl'
import { HiOutlineStatusOnline } from "react-icons/hi";
import { HiOutlineStatusOffline } from "react-icons/hi";
import UseOnline  from "../../utils/useOnline"
export const Navbar=()=>{
  const {theme,setTheme,mobileView,setMobileView,setCategory}=useContext(DataContext);
  const [searchBar,setSearchBar]=useState('')
  
  const handleSearch=()=>
  {
    setCategory(searchBar);
  }
  const switchTheme=()=>{
    theme==='dark'?setTheme('light'):setTheme('dark');
  }
  const isOnline=UseOnline()
  console.log(isOnline)
    return(
        <>
          <nav className={theme==='dark'?'nav-dark':'nav-light'}>
            
            <div className="logo">
              <div className="sidebarBtns" onClick={()=>setMobileView(!mobileView)}>
                {mobileView?<CgClose size={20}/>:<SlMenu size={20}/>}
              </div>


             <img src="https://playtube-eight.vercel.app/static/media/logo-no-background.9631519e713a529b7437.png" className='logo1' alt="Youtube" />
             <img src="data:image/png;base64,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" className={'logo2'} alt="" />
            </div>
            <div className="searchBar">
              <input onChange={(e)=>setSearchBar(e.target.value)} type="text" placeholder="Search" />
              <button onClick={handleSearch}>
                <IoIosSearch size={20}/>
              </button>
            </div>
            <div className="btns">
            
                  <div className="dark-btn" onClick={switchTheme}>
                  {
                    theme==='dark'?
                    <MdOutlineLightMode size={30}/>:
                    <MdDarkMode size={30}/>
                  }
                </div>
                {
                  isOnline?(
                    <HiOutlineStatusOnline size={30} style={{color:'#1795a8'}}/>
                  ):(
                    <HiOutlineStatusOffline size={30} style={{color:'#f74a8a'}}/>
                  )
                }
                <div className="avatar">
                  
                </div>
                  
            </div>
             
          </nav>
        </>
    )
}