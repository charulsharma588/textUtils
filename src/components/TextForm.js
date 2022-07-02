import React, { useState } from 'react'



export default function TextForm(props) {
    const handleClearClick = () => {
        let newText ='';
        setText(newText)
        props.showAlert("cleared all","success")
    }
    
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success")

    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");

    return (
        <>

            <div className='container' style={{color:props.mode === 'dark' ? 'white' : 'black'}}>           
             <h2 >{props.heading}</h2>
                <div className="mb-3">

                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white',color:props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} id="textcontrol" rows="8"></textarea>
                    <button className='btn btn-primary mt-3' onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className='btn btn-primary mt-3 ml-1' onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className='btn btn-primary mt-3 ml-1' onClick={handleClearClick}>Clear All</button>
                </div>
            </div>
            <div className='container mt-2' style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your Summary Text</h2>
                <p>{text.length>0 ? text.trim().split(" ").length : 0} words and {text.trim().length} characters</p>
                <p>{0.008*text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text: 'Enter your text to preview it'}</p>
            </div>
        </>
    )
}
