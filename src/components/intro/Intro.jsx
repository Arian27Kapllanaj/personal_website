import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, {
            showCursor: false,
            strings: ["How are you?", 
            "Hope you are doing well", 
            "You can click the arrow below to check my projects", 
            "You can view my resume", 
            "You can view my LinkedIn", 
            "You can view my Github account", 
            "You can contact me via email", 
            "You can contact me via LinkedIn",
            "You can view my small project which I called experimentals"],
        });
    }, []);
  return (
    <div className="intro" id="intro">
        <div className="left">
            <div className="imgContainer">
                <img src="assets/photo.png" alt="me" />
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hi there, I am</h2>
                <h1>Arian Kapllanaj</h1>
                <h3><span ref={textRef}></span></h3>
                
            </div>
            <a href="#portfolio">
                <img src="assets/down.png" alt="arrow down" />
            </a>
        </div>

      </div>
  );
}
