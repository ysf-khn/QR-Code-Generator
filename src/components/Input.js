import { useRef } from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  const inputRef = useRef();

  const generateQRHandler = (e) => {
    e.preventDefault();

    props.onEnterText(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <form className={classes.form}>
      <input type="text" ref={inputRef} placeholder="Enter text to encode..." />
      <button onClick={generateQRHandler}>Generate</button>
    </form>
  );
};

export default Input;
