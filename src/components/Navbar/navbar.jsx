import { useAuth0 } from "@auth0/auth0-react"
import { useState } from "react"
import { DarkMode } from "./darkMode";
import '../../styles/navbar.css'
export const Navbar=()=>{
    const {loginWithRedirect,user}=useAuth0()
    
    console.log(user,"user");
    return(
        <>
          <nav>
            <div className="logo">
                
            </div>
            <div className="links">

            </div>
            <div className="btns">

            </div>
          </nav>
        </>
    )
}