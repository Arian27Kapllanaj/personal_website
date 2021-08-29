import "./contact.scss";
import { Mail } from "@material-ui/icons";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <br></br>
        <div>
          <Mail className="icon" />
          <span>ariankapllanaj@outlook.com</span>
        </div>
        <div>
          <br></br>
          <a href="https://www.linkedin.com/in/arian-kapllanaj-b0a283192/" target="_blank" rel="noreferrer"><LinkedInIcon className="icon"/></a>
          <span>Arian Kapllanaj</span>
        </div>
      </div>
    </div>
  );
}
