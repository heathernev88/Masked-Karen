// import React from 'react';
import '../styles/Page-1.css';
import iframe from 'react-iframe';
import React, { Component } from 'react';


// Component for content
class Content extends Component {
    
    render() {
        const videoStyle = {
            position: "absolute",
            width:"178%",
            left:"-39%",
            height:"178%",
            top:"-39%"

        };
        
        const frameStyle = {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%"
        }
    
    return (
    <div>
        <section className="u-align-center u-black u-clearfix u-section-4" id="carousel_f216">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h2 className="u-text u-text-custom-color-1 u-text-1">How to wear a mask.</h2>
                    <div className="u-video u-video-1">
                        <div style={{ videoStyle }} className="embed-responsive">
                        <iframe style={{ frameStyle }}
                        title = "How to wear a mask" 
                        className="embed-responsive-item" 
                        src="https://www.youtube.com/embed/qNzXb-GmptM?mute=0&amp;showinfo=0&amp;controls=0&amp;start=0" 
                        frameborder="0" 
                        allowfullscreen=""></iframe>
                        </div>
                    </div>
            </div>
        </section>
    </div >
    );
}
};

export default Content;