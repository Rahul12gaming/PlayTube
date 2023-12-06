import { useContext } from 'react'
import '../../styles/suggestVideo.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { DataContext } from '../../context/context'
export const SuggestVideoCard=({video})=>
{
    const {theme}=useContext(DataContext)
    return (
        <>
            <div className="suggestvideoCard" id={theme==='dark'?'dark':'light'}>
                <div className="suggestvideoThumnail">
                    {/* <img src={video?.thumbnails[0]?.url} alt="" /> */}
                    <img src={video?.thumbnails[0]?.url} alt="" />
                    {/* <span className='videoLength'>06:40:56</span> */}
                </div>
                <div className="suggestvideoDetails">
                    
                    
                        {/* <span>{video?.title}</span>
                        <span>{video?.author?.title} 
                        <BsFillCheckCircleFill size={10}/></span> */}
                        <span>{video?.title}</span>
                        <span>{video?.author?.title}  <BsFillCheckCircleFill/></span>

                        <div className='suggestdetails'>
                            <span>254 Views</span>
                            <span>.</span>
                            <span>12 days ago</span>
                        </div>
                    
                </div>
            </div>
        </>
    )
}