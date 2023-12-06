import { Link, useRouteError } from "react-router-dom";
import '../styles/error.css'
export const ErrorComponent=()=>
{
    
    return (
        <>
            <div className="errorComponent">
                <p>Error</p>
                <p>Sorry, we couldn't find this page.</p>
                <p> But dont worry, you can find plenty of other things on our homepage.</p>
            </div>
        </>
    )
}