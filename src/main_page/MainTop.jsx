import React from "react";
import me from "../images/me.png";
const Maintop = () => {
  return (
    <>
    <div className='main_Container'>
      <div className="MainTop">
        <div className="img">
          <img src={me} alt="img crashed"></img>

          <span>
            Success is the result of perfection, hard work, learning from
            failure, loyalty, and persistence
          </span>
        </div>
      </div>
      <div className="newText">
        <h2>
          Success is the result of perfection, hard work, learning from failure,
          loyalty, and persistence.
        </h2>
      </div>
    </div>
    </>
  );
};

export default Maintop;
