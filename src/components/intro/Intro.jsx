import "./intro.scss";
import DownloadIcon from '@mui/icons-material/Download';
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
          <div className="bottom__download">
            <div className="download__left">
              <a href="https://drive.google.com/file/d/1nyzfYTdacJ90W373oNg6B-ggUV8nhXRh/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <div className="left__button">
                  <DownloadIcon/>
                  <div className="button__download">
                    <p>Resume (CV)</p>
                    <p>Descargar</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="download__right">
                <a href="https://www.linkedin.com/in/jordan-terrazos/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://github.com/JordanTrz" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
            </div>
          </div>
        </div>
      </div>
      <a href="#portfolio">
          <img src="assets/down.png" alt="" />
      </a>
    </div>
  );
};

export default Intro;
