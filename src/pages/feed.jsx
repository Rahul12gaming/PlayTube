import { VideoCard } from "../components/cards/videoCard"
import { LeftSidebar } from "../components/sidebar/LeftSidebar"
import '../styles/feed.css'
import { useContext } from 'react'
import { VideoSkeleton } from '../shared/videoSkeleton'
import { DataContext } from "../context/context"
import  UseOnline  from "../utils/useOnline"
import { OfflineComponent } from "../shared/offlineComponent"
import { ErrorComponent } from "../shared/errorComponent"
export const Feed = () => {
    const { results, loading ,error} = useContext(DataContext)
    const  isOnline  = UseOnline()
    return (
        <>
            <div className="feedContainer">
                <LeftSidebar />
                {
                    isOnline && !error && (
                        <div className="feedVideo">
                        {
                            loading ? Array(24).fill("").map((e, index) => (
                                <VideoSkeleton key={index} />
                            )) : <>

                                {
                                    results.map((item) => (
                                        <VideoCard video={item?.video} />
                                    ))
                                }
                            </>
                        }
                    </div>   
                    )
                }
                {
                    !isOnline && (
                        <OfflineComponent />
                    )
                }
                {error && (
                    <ErrorComponent/>
                )}
                

            </div>
        </>
    )
}