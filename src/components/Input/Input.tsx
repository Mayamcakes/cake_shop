import React, { FC } from 'react';
import './Input.scss';
import './search.png';

type InputProps = {
    input: string,
    setInput:(input:string) => void,
}

const Input:React.FC<InputProps> = ({ input, setInput }) => (
  <div className="input__box">
    <span className="input__search-icon">&#128269;</span>
    <input
      className="input__field"
      type="text"
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
      }}
      placeholder="item..."
    />
  </div>
);

export default Input;
