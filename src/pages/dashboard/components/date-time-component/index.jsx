import React, { useEffect, useState } from "react";


const DateTimeComponent = () => {
    const [date, setDate] = useState(new Date());

   
    useEffect(()=>{
       let timer = setInterval(() => {setDate(new Date())}, 1000)
        
        return function cleanup(){
            clearInterval(timer);
        }
    },[date])
    return(
        <span>date/time: {date.toLocaleString()}</span>
    )
}

export default DateTimeComponent;