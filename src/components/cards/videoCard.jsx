import '../../styles/videoCard.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { DataContext } from '../../context/context'
import { useContext } from 'react'
export const VideoCard=({video})=>
{
    const {theme}=useContext(DataContext)
    return (
        <>
        <Link to={`/videoDetails/${video?.videoId}`} className="videoCard" id={theme==='dark'?'dark':'light'}>
        
            
                <div className="videoThumnail">
                    <img src={video?.thumbnails[0]?.url} alt="" />
                    <span className='videoLength'>06:40:56</span>
                </div>
                <div className="videoDetails">
                    <div className="videoAvatar">
                        <img src={video?.author?.avatar[0]?.url} alt="" />
                    </div>
                    <div className="videoText">
                        <span>{video?.title}</span>
                        <span>{video?.author?.title} 
                        <BsFillCheckCircleFill size={10}/></span>

                        <div className='details'>
                            <span>254 Views</span>
                            <span>.</span>
                            <span>12 days ago</span>
                        </div>
                    </div>
                </div>
            
            </Link>
        </>
    )
}