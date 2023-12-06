import { categories } from "../../utils/constant"
import '../../styles/leftSidebar.css'
import { useContext } from "react"
import { DataContext } from "../../context/context"
import {MdDarkMode} from 'react-icons/md'
import { MdOutlineLightMode } from "react-icons/md"
export const LeftSidebar=()=>
{
    const {theme,setTheme,mobileView,setCategory}=useContext(DataContext);
    const handleTheme=()=>
    {
        theme==='dark'?setTheme('light'):setTheme('dark')
    }
    const handleCategory=(name,type)=>
    {
        switch(type){
            case 'category':
                return setCategory(name);
            case 'menu':
                return ;
            default:
                return;
        }
    }
    return(
        <>
        
            
       
            <div className={mobileView?'leftSidebar open':'leftSidebar close'} id={theme==='dark'?'darkSidebar':'lightSidebar'} >
                <div className="darkBtn" onClick={handleTheme}>
                    {
                        theme==='dark'?<>Light Mode <MdOutlineLightMode/></>:
                        <>Dark Mode <MdDarkMode/></>
                    }
                </div>
                <div className="categoryLinks">
                    {
                        categories.map((item)=>(
                            <div key={item.name} onClick={()=>handleCategory(item.name,item.type)}>
                                <div className="text">
                                    <span className="icon">{item.icon}</span>
                                    {item.name}
                                </div>
                                {item.divider&&(
                                <hr style={{padding:'0px',margin:0}} />
                            )}
                            </div>
                            
                        ))
                    }
                </div>
                <p>Created By @Rahul Adhikari</p>
            </div>
        </>
    )
}