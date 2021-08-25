import "./intro.scss"

export default function intro() {
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
                <h3><span>How are you?</span></h3>
                
            </div>
            <a href="#portfolio">
                <img src="assets/down.png" alt="arrow down" />
            </a>
        </div>

      </div>
  );
}
