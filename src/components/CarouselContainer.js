import { Carousel } from 'react-bootstrap';
import liftService from "../images/liftService.png"
import escalatorService from "../images/escalatorService.png"
import modernization from "../images/modernization.png"
import CarouselImage from './CarouselImage';
import "../styles/CarouselContainer.css"

export default function CarouselContainer() {
  return (
    <div id="CarouselContainer">
      <Carousel>
        <Carousel.Item>
          <CarouselImage src={liftService} text="Biztonságos és zavartalan liftműködés - szakértői karbantartás"/>
          <Carousel.Caption>
            <h3>Megbízható lift szerviz és karbantartás</h3>
            <p>Hosszú távú biztonság és hatékonyság modern karbantartási megoldásokkal. Bízza szakértőinkre liftje zavartalan működését!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <CarouselImage src={escalatorService} text="Mozgólépcső szervizelés - megbízhatóság szakértő kezekből"/>
          <Carousel.Caption>
            <h3>Mozgólépcsők szakszerű szervizelése és gondozása</h3>
            <p>Precíz karbantartási szolgáltatásaink biztosítják mozgólépcsői folyamatos, biztonságos működését.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <CarouselImage src={modernization} text="Modernizáció - a jövő technológiájával frissítjük rendszereit"/>
          <Carousel.Caption>
            <h3>Innovatív modernizáció liftekhez és mozgólépcsőkhöz</h3>
            <p>
            Frissítse fel rendszereit a legújabb technológiával! Növelje a biztonságot, a megbízhatóságot és a kényelmet modernizációs szolgáltatásainkkal.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
