import '../styles/skeleton.css'
export const VideoSkeleton=()=>
{
    return(
        <>
            <div className="skeleton">
                <div className="thumbnail">

                </div>
                <div className="skeletonDetails">
                    <div className="avatar">

                    </div>
                    <div className="skeletonText">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </>
    )
}