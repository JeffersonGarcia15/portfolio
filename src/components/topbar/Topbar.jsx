import "./topbar.scss"
import {PersonPin, MailOutline} from "@material-ui/icons"

function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">.genius</a>
                    <div className="itemContainer">
                        <PersonPin className="icon"></PersonPin>
                        <span>(617) 970 5004</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutline className="icon"></MailOutline>
                        <span>jeffersongarcia1599@gmail.com</span>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
