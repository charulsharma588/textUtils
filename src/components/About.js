import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: "black"
    });
    const [text, setText] = useState('Enable Dark Mode');

    const handleColor = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setText('Enable Dark Mode')
        } else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            setText('Enable Light Mode')
        }
    }

    return (
        <>
            <h2>About Us</h2>
            <div style={myStyle}>
                If your control element is targeting a single collapsible element – i.e. the data-target attribute is pointing to an id selector – you should add the aria-controls attribute to the control element, containing the id of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself.
            </div>
            <button className='btn m-3' onClick={handleColor} style={myStyle}>{text}</button>
        </>
    )
}
