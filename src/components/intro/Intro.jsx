import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay:  1500,
      showCursor: true,
      strings: ["Frontend", "Responsive design", "Backend"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="top">
        <div className="imgContainer">
          <img src="https://raw.githubusercontent.com/JordanTrz/myself/main/1516869724668.jpeg" alt="" />
        </div>
      </div>
      <div className="bottom">
        <div className="wrapper">
          <h2>Hola! Soy</h2>
          <h1>Jordan Terrazos</h1>
          <h3>
            Desarrollador <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
