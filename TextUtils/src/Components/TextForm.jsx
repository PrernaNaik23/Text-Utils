import { useState } from "react"
import Button from "./Button"
import PropTypes from 'prop-types'

const TextForm = (props) => {
    const [text,setText] =useState('');
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const ConvertToUpperCase = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
    };
    const ConvertToLowerCase = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    };
    const ClearText = ()=>{
        let newText=' ';
        setText(newText);
    };
    const CopyText = ()=>{
        navigator.clipboard.writeText(text);
        alert('Text copied to the clipboard');
    };
  return (
    <>
    <div className="container my-3">
        <h1 className={`header mb-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>Enter your text</h1>
        <textarea className="form-control"id="FormControlTextarea" value={text} rows="8" onChange={handleOnChange} ></textarea>
        <Button label = 'Convert to Upper case' onClick={ConvertToUpperCase}/>
        <Button label="Convert to Lower case" onClick={ConvertToLowerCase}/>
        <Button label="Copy Text" onClick={CopyText}/>
        <Button label="Clear Text" onClick={ClearText}/>
    </div>
    <div className= {`container my-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}  onChange={handleOnChange}>
        <h3>Your text Summary</h3>
        <p>No. of words: {text.trim() ? text.trim().split(/\s+/).length : 0}</p>
        <p>No. of characters: {text.length} </p>
        <p>Minutes required to read: {text.trim() ? text.trim().split(/\s+/).length * 0.008:0}</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
};
TextForm.propTypes ={
    mode: PropTypes.string.isRequired,
};

export default TextForm