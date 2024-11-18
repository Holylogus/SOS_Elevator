import "../styles/AboutPage.css";
import precizitas from "../icons/precizitas.png";
import clock from "../icons/clock.png";
import heart from "../icons/heart.png";
import glasses from "../icons/glasses.png";
import customer from "../icons/customer.png";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div id="AboutPage">
      <div className="aboutSection">
        <img className="mySelfImage" src="#" alt="myself" />
        <h2 className="aboutTitle">Rólunk:</h2>
        <div className="aboutContent">
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Congue hendrerit
          nec, odio fringilla lacus ad. Nascetur condimentum penatibus fermentum
          rhoncus ad eleifend, per volutpat tincidunt. Pellentesque erat montes
          ac urna massa odio dolor. Ainteger magna massa laoreet dignissim
          maecenas potenti. Sit luctus mollis mollis torquent parturient tempor
          gravida. Accumsan class tempus senectus quis nascetur suscipit
          convallis.
        </p>
        <p>
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
      <h2>Értékeink:</h2>
      <div className="ourValuesSection">
        <div className="valueContainer">
          <img src={precizitas} alt="precisionIcon" />
          <h3>Precizitás</h3>
        </div>
        <div className="valueContainer">
          <img src={clock} alt="pontossag" />
          <h3>Pontosság</h3>
        </div>
        <div className="valueContainer">
          <img src={heart} alt="megbizhatosag" />
          <h3>Megbízhatóság</h3>
        </div>
        <div className="valueContainer">
          <img src={glasses} alt="odafigyeles" />
          <h3>Odafigyelés</h3>
        </div>
        <div className="valueContainer">
          <img src={customer} alt="ugyfel" />
          <h3>Ügyfélközpontúság</h3>
        </div>
      </div>
      <Contact/>
      <Footer/>
    </div>
    
  );
}
