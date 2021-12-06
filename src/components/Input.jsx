import React,{useState} from 'react';
import styles from './Input.module.css';

const Input = ({start, handleTimerStart,handleReset}) => {
    const [text, setText] = useState("");
    const handleOnchange=(e)=>{
        setText(e.target.value)
    }
    const handleClick=()=>{
        handleTimerStart(text);
    }
    const handleResetButton=()=>{
        handleReset();
    }
    const starts=(
        <button onClick={handleClick}>Start</button>
    )
    const stop=(
        <button onClick={handleResetButton}>Reset</button>
    )
    return (
        <div className={styles.Input}>
            <label>Enter time here in second</label>
            <input
             type="text"
             value={text}
             onChange={handleOnchange}
             placeholder="enter time here"
            />
            {start&&Number(text)?stop:starts}
        </div>
    );
}

export default Input;
