import "../styles/ServiceCardContainer.css";
import elevator from "../icons/elevator2.png";
import escalator from "../icons/escalator.png";
import emergency from "../icons/emergency.png";
import support from "../icons/support.png";
import modernization from "../icons/modernization.png";
import ServiceCard from "./ServiceCard";

export default function ServicesCardContainer() {

    

  return (
    <div id="ServicesCardContainer">
      <ServiceCard
        src={elevator}
        title="Liftek szervizelése és karbantartása"
        text="Megbízható lift szerviz a biztonságos működésért. Tartsa liftjeit
            zavartalanul üzemképes állapotban!"
        alt="elevator"
      />
      <ServiceCard
        src={escalator}
        title="Mozgólépcsők szervizelése és karbantartása"
        text="Precíz mozgólépcső karbantartás a folyamatos és biztonságos üzemelésért."
        alt="escalator"
      />
      <ServiceCard
        src={modernization}
        title="Liftek és mozgólépcsők modernizációja"
        text="Modernizálja rendszereit a legújabb technológiával a nagyobb biztonság és kényelem érdekében!"
        alt="modernization"
      />
      <ServiceCard
        src={emergency}
        title="Non-stop hibaelhárítás és javítás"
        text="Gyors hibaelhárítás, hogy rendszerei mindig üzemképesek legyenek - 24/7 elérhetőség!"
        alt="emergency"
      />
      <ServiceCard
        src={support}
        title="Szaktanácsadás és rendszerfelügyelet"
        text="Személyre szabott szaktanácsadás és rendszerfelügyelet a hatékony működésért."
        alt="support"
      />
    </div>
  );
}