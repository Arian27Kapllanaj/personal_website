import "./topbar.scss";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Arian Kapllanaj</a>
                    <div className="itemContainer">
                        <span>
                        <a href="https://www.linkedin.com/in/arian-kapllanaj-b0a283192/" target="_blank" rel="noreferrer"><LinkedInIcon className="icon"/></a>
                        <a href="https://github.com/Arian27Kapllanaj" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
                        <a href="https://drive.google.com/file/d/1vI3DP4diucjkR7uNlVFESr4_vjvgWGL4/view" target="_blank" rel="noreferrer"><span className="text">Resume</span></a>
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
