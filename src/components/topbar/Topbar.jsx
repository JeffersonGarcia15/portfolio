import "./topbar.scss"
import {
  PersonPin,
  MailOutline,
} from "@material-ui/icons";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";


function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Jefferson Jurado Garcia
          </a>
          <div className="itemContainer">
            <PersonPin className="icon"></PersonPin>
            <span>(617) 970 5004</span>
          </div>
          <div className="itemContainer">
            <MailOutline className="icon"></MailOutline>
            <span>jeffersongarcia1599@gmail.com</span>
          </div>
          <div className="itemContainer">
            <PictureAsPdfIcon className="icon"></PictureAsPdfIcon>
            <a
              style={{
                marginBottom: "4px",
                textDecoration: "none",
                color: "black",
              }}
              href="https://docs.google.com/document/d/1_djS_cAiSU_ZvaspgFMzI35GydeRi1l5kfSgZvtVdS0/edit?usp=sharing"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar
