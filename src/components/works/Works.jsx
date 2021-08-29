import { useState } from "react";
import "./works.scss";

export default function Works() {
    const  [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "assets/twitterLogo.png",
      title: "Twitter Clone",
      desc: "Twitter Clone has the same functionality as real Twitter. It does not have all the functionality but the basics. The user interface it is the same as the real twitter.",
      img: "assets/twitter.png",
      tech: "PHP, HTML5, CSS, JavaScript, Laravel 6, Bootstrap 4/5"
    },
    {
      id: "2",
      icon: "assets/vaccinationAppointmentsLogo.png",
      title: "Vaccination Appointments",
      desc: "Web Application where you can make an appointemnt to do the vaccination and after taking all the shots you will get the certification.",
      img: "assets/vaccinationAppointments.png",
      tech: "PHP, HTML5, CSS, Laravel 8, Bootstrap 5"
    },
    {
      id: "3",
      icon: "assets/calculatorLogo.png",
      title: "Calculator App",
      desc: "Simple Calculator App built with Android Studio",
      img: "assets/calculator.jpg",
      tech: "Android Studio, Java"
    },
  ];

  const handleClick = (way)=> {
      way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Technologies: {d.tech}</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt=""  onClick={()=>handleClick("right")}/>
    </div>
  );
}
