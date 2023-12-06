import ReactPlayer from 'react-player'
import '../styles/videoDetails.css'
import { fetchDataFromApi } from '../utils/api'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useContext, useEffect, useState } from 'react'
import { VideoCard } from '../components/cards/videoCard';
import { SuggestVideoCard } from '../components/cards/leftSideSuggestVideo';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/context';
import { ytData } from '../utils/constant';
import { SuggestVideoSkeleton } from '../shared/suggestVideoSkeleton';
import { VideoSkeleton } from '../shared/videoSkeleton';
import  UseOnline  from '../utils/useOnline';
import { OfflineComponent } from '../shared/offlineComponent';
export const VideoDetails = () => {
    const { loading, setLoading, results } = useContext(DataContext)

    const [video, setVideo] = useState();

    const [relatedVideos, setRelatedVideos] = useState();

    const { id } = useParams();



    const getData = async () => {
        setLoading(true)

        const data = await fetchDataFromApi(`video/details/?id=${id}`)

        setVideo(data)

        setLoading(false)

    }


    const fetchRelatedVideos = async () => {
        setLoading(true);

        const data = await fetchDataFromApi(`video/related-contents/?id=${id}`);

        console.log(data);

        setRelatedVideos(data)

        setLoading(false)

    }


    useEffect(() => {

        getData()

        fetchRelatedVideos()

    }, [id])

    const isOnline= UseOnline()
    return (
        <>
        {
            !isOnline && (
                <OfflineComponent />
            )
        }
        {
            isOnline && (
                <div className="videoDetailsContainer">
                        <div className="videoDetailsContent">
                            <div className="videoPlayer">
                                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width={'100%'} height={'100%'} playing={true} />
                            </div>
                            <span className='cta-text'>{video?.title}</span>
                            <div className="videoDetails2">
                                <div className='avatar'>
                                    <img src={video?.author?.avatar[0]?.url} alt="" />
                                </div>
                                <div className='detailsText1'>
                                    <span>{video?.author?.title}  <BsFillCheckCircleFill /> </span>
                                    <span> {video?.author?.stats?.subscribersText}</span>
                                </div>
                            </div>
                            {/* <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere autem voluptatibus fugiat molestias impedit praesentium, consequatur, rem deserunt esse sunt illo dolorem eveniet ratione blanditiis provident doloremque saepe quos earum!
                    </div> */}
                            <div className="suggestVideoRow">

                                {
                                    loading ? Array(46).fill("").map((e, index) => (
                                        <VideoSkeleton key={index} />
                                    ))
                                        : <>
                                            {
                                                relatedVideos?.contents?.map((item) => (
                                                    <VideoCard video={item?.video} />
                                                ))
                                            }
                                        </>
                                }


                            </div>
                        </div>
                        <div className="suggestVideo">

                            {
                                loading ? Array(24).fill("").map((e, index) => (
                                    <SuggestVideoSkeleton key={index} />
                                )) : <>
                                    {
                                        relatedVideos?.contents?.map((item) => (
                                            <SuggestVideoCard video={item?.video} />
                                        ))
                                    }
                                </>
                            }


                        </div>

                    </div>
            )
        }
            {
                // isOnline ? <>

                //     <div className="videoDetailsContainer">
                //         <div className="videoDetailsContent">
                //             <div className="videoPlayer">
                //                 <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width={'100%'} height={'100%'} playing={true} />
                //             </div>
                //             <span className='cta-text'>{video?.title}</span>
                //             <div className="videoDetails2">
                //                 <div className='avatar'>
                //                     <img src={video?.author?.avatar[0]?.url} alt="" />
                //                 </div>
                //                 <div className='detailsText1'>
                //                     <span>{video?.author?.title}  <BsFillCheckCircleFill /> </span>
                //                     <span> {video?.author?.stats?.subscribersText}</span>
                //                 </div>
                //             </div>
                //             {/* <div>
                //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere autem voluptatibus fugiat molestias impedit praesentium, consequatur, rem deserunt esse sunt illo dolorem eveniet ratione blanditiis provident doloremque saepe quos earum!
                //     </div> */}
                //             <div className="suggestVideoRow">

                //                 {
                //                     loading ? Array(46).fill("").map((e, index) => (
                //                         <VideoSkeleton key={index} />
                //                     ))
                //                         : <>
                //                             {
                //                                 relatedVideos?.contents?.map((item) => (
                //                                     <VideoCard video={item?.video} />
                //                                 ))
                //                             }
                //                         </>
                //                 }


                //             </div>
                //         </div>
                //         <div className="suggestVideo">

                //             {
                //                 loading ? Array(24).fill("").map((e, index) => (
                //                     <SuggestVideoSkeleton key={index} />
                //                 )) : <>
                //                     {
                //                         relatedVideos?.contents?.map((item) => (
                //                             <SuggestVideoCard video={item?.video} />
                //                         ))
                //                     }
                //                 </>
                //             }


                //         </div>

                //     </div>
                // </> : <OfflineComponent />

}
        </>
    )
}