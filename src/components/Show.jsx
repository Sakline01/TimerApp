import React from 'react';
import "./Show.css"
const Show = ({count}) => {
    return (
        <div className="timer">
      <span className="digits">
        {("0" + Math.floor((count / 60) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor(count % 60)).slice(-2)}
      </span>
    </div>
    );
}

export default Show;
