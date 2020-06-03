import React, { useState } from "react";

const ButtonPad = () => {
  const [count, setCount] = useState(0);
  const [prev, setPrev] = useState(null);

  const handleOnUpClick = () => {
    setPrev(count);
    setCount(count + 1);
  };

  const handleOnDownClick = () => {
    setPrev(count);
    setCount(count - 1);
  };

  const handleOnReset = () => {
    setPrev(count);
    setCount(0);
  };

  const handleOnDoubleClick = () => {
    setPrev(count);
    setCount(count * 2);
  };

  return (
    <div>
      <section className="display">
        <div>
          Current Value: <b>{count}</b>
        </div>
        <div>
          Previous Value: <b>{prev}</b>
        </div>
      </section>
      <button onClick={() => handleOnUpClick()}>Up Button</button>
      <button onClick={() => handleOnDownClick()}>Down Button</button>
      <button className="btn-reset" onClick={() => handleOnReset()}>
        Reset
      </button>
      <section>
        <button className="btn-double" onClick={() => handleOnDoubleClick()}>
          Double Button
        </button>
      </section>
    </div>
  );
};

export default ButtonPad;
