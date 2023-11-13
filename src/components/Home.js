import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
    const {userName}= useContext(AuthContext);
    //init state current time
    const [currentTime, setCurrentTime]=useState(new Date().toLocaleTimeString());
    const timerChange=()=>{
        setCurrentTime(new Date().toLocaleTimeString())
    };

    // useEffect(() => {
    //     console.log("Effect invoke!!!!");
    //     let timerId=setInterval(timerChange,1000);
    // },[]);
    
    useEffect(() => {
        // console.log("Effect invoke!!!!");
        let timerId=setInterval(timerChange,1000);
        console.log(timerId);
        return ()=>{
            clearInterval(timerId);
            console.log("deleted");
        }
    });

    return (
        <>
            <div className="textInfo">
                <h2>Welcome home</h2>
                <h3>{userName}</h3>
            </div>
            <div>
                {/* <h3>{new Date().toLocaleTimeString()}</h3> */}
                <h3>{currentTime}</h3>
            </div>
        </>
    );
}