import "../styles/Partners.css";
import pataki from "../images/PatakiLift.PNG";
import comLift from "../images/Com-Lift.PNG";
import schindler from "../images/Schindler.PNG";
import { useEffect } from "react";

export default function Partners() {

    useEffect(()=>{
        const partnerElements = document.querySelectorAll(".partners > div");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {threshold: 0.2}
        );
        partnerElements.forEach((el)=> observer.observe(el));

        return()=>{
            partnerElements.forEach((el)=>observer.unobserve(el));
        }
    },[])


  return (
    <div id="Partners">
      <h2 className="partnerTitle">Partnereink</h2>
      <div className="partners">
        <div className="elevatorFriends">
          <h3>Elevator Friends Kft</h3>
        </div>
        <div className="pataki">
          <img src={pataki} alt="PatakiLift" />
        </div>
        <div className="comLift">
          <img src={comLift} alt="ComLift" />
        </div>
        <div className="schindler">
          <img src={schindler} alt="Schindler" className="schindlerImg" />
        </div>
      </div>
    </div>
  );
}
