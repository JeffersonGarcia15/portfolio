import { useEffect, useRef } from 'react'
import "./intro.scss"
import { init } from 'ityped'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';

function Intro() {
    const textRef = useRef()

    useEffect(() => {
        init(
            textRef.current, 
            {
                showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                strings: ['Full Stack Developer', 'Scientist', 'Mathematician.']
            }
        )
    }, [])

    return (
      <div className="intro" id="intro">
        <div className="left">
          <div className="img-container">
            <img
              src="https://astrogram.s3.us-east-2.amazonaws.com/profile.jpg"
              alt="profile-image"
            />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi there, I'm</h2>
            <h1>Jefferson Lopez Garcia</h1>
            <h3>
              A <span ref={textRef}></span>
            </h3>
          </div>
          <a href="#portfolio">
            <ArrowDownwardOutlinedIcon
              style={{
                color: "black",
                fontSize: "50px",
                paddingLeft: "400px",
                animation: "arrowBlink 2s infinite",
              }}
            ></ArrowDownwardOutlinedIcon>
          </a>
        </div>
      </div>
    );
}

export default Intro
