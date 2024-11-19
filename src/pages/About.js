import "../styles/AboutPage.css";
import precizitas from "../icons/precizitas.png";
import clock from "../icons/clock.png";
import heart from "../icons/heart.png";
import glasses from "../icons/glasses.png";
import customer from "../icons/customer.png";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";

export default function About() {

  const aboutSectionRef = useRef(null);
  const valueTitleRef = useRef(null);
  const valueSectionRef = useRef(null);

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry)=>{
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      {threshold: 0.2}
    );

    if (aboutSectionRef.current) {
      const elementsToAnimate = aboutSectionRef.current.querySelectorAll(".slideInRight");
      elementsToAnimate.forEach((el)=>observer.observe(el));
    };

    if (valueTitleRef.current) {
      observer.observe(valueTitleRef.current);
    }

    if (valueSectionRef.current) {
      const elementsToAnimate = valueSectionRef.current.querySelectorAll(".fadeInUp");
      elementsToAnimate.forEach((el)=> observer.observe(el));
    }

    return()=>observer.disconnect();
  },[])

  return (
    <div id="AboutPage" >
      <div className="aboutSection" ref={aboutSectionRef}>
        <img className="mySelfImage" src="#" alt="myself" />
        <h2 className="aboutTitle slideInRight delay-1">Rólunk:</h2>
        <div className="aboutContent">
        <p className="slideInRight delay-2">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Congue hendrerit
          nec, odio fringilla lacus ad. Nascetur condimentum penatibus fermentum
          rhoncus ad eleifend, per volutpat tincidunt. Pellentesque erat montes
          ac urna massa odio dolor. Ainteger magna massa laoreet dignissim
          maecenas potenti. Sit luctus mollis mollis torquent parturient tempor
          gravida. Accumsan class tempus senectus quis nascetur suscipit
          convallis.
        </p>
        <p className="slideInRight delay-3">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Congue hendrerit
          nec, odio fringilla lacus ad. Nascetur condimentum penatibus fermentum
          rhoncus ad eleifend, per volutpat tincidunt. Pellentesque erat montes
          ac urna massa odio dolor. Ainteger magna massa laoreet dignissim
          maecenas potenti. Sit luctus mollis mollis torquent parturient tempor
          gravida. Accumsan class tempus senectus quis nascetur suscipit
          convallis.
        </p>
        </div>
      </div>
      <h2 className="fadeInUp delay-1">Értékeink:</h2>
      <div className="ourValuesSection">
        <div className="valueContainer fadeInUp delay-2">
          <img src={precizitas} alt="precisionIcon" />
          <h3>Precizitás</h3>
        </div>
        <div className="valueContainer fadeInUp delay-3">
          <img src={clock} alt="pontossag" />
          <h3>Pontosság</h3>
        </div>
        <div className="valueContainer fadeInUp delay-4">
          <img src={heart} alt="megbizhatosag" />
          <h3>Megbízhatóság</h3>
        </div>
        <div className="valueContainer fadeInUp delay-5">
          <img src={glasses} alt="odafigyeles" />
          <h3>Odafigyelés</h3>
        </div>
        <div className="valueContainer fadeInUp delay-6">
          <img src={customer} alt="ugyfel" />
          <h3>Ügyfélközpontúság</h3>
        </div>
      </div>
    </div>
    
  );
}
