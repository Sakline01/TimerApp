import React, { useState } from 'react';
import Input from './Input';
import Show from './Show';

const Timer = () => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    const [isStart, setIsStart] = useState(false);
    React.useEffect(() => {
        let interval=null;
        if (isStart&&(count<time)) {
            interval=setInterval(() => {
                setCount((count)=>count+1);
            }, 1000);
            
        }
        else{
            clearInterval(interval);
        }
        
        return () => {
            clearInterval(interval);
        };
    }, [isStart,count,time]);
    const handleTimerStart=(text)=>{
        setTime(text)
        setIsStart(true);
    }
    const handleReset=()=>{
        setTime(0);
        setCount(0);
        setIsStart(false);
    }
    return (
        <div>
            
            <Input start={isStart} handleReset={handleReset} handleTimerStart={handleTimerStart}/>
            <Show count={count}/>
        </div>
    );
}

export default Timer;
