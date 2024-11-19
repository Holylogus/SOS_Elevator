import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/ServicesPage.css";
import karbantartas from "../images/ServicesKarbantartas.png";
import szervizeles from "../images/ServicesSzervizeles.png";

export default function Service() {
  return (
    <div id="ServicePage">
      <div className="services">
        <section id="karbantartas">
          <div>
            <h4 className="title">Karbantartás:</h4>
            <p className="content">
              <strong>
                Megbízható liftek és mozgólépcsők zavartalan működése a
                rendszeres karbantartás erejével!
              </strong>{" "}
              A SOS Elevator Kft. professzionális karbantartási szolgáltatásai
              garantálják, hogy rendszerei mindig biztonságosan, hatékonyan és
              hosszú távon üzemeljenek. Szakértő csapatunk tapasztalata és
              modern technológiák alkalmazása révén minimalizáljuk a
              meghibásodások kockázatát, miközben növeljük az élettartamot.{" "}
              <strong>
                {" "}
                Fektessen a biztonságba és megbízhatóságba - válasszon minket a
                liftek és mozgólépcsők problémamentes működéséért!
              </strong>
            </p>
          </div>
          <img src={karbantartas} alt="karbantartas" />
        </section>
        <section id="szerviz">
          <img src={szervizeles} alt="szerviz" />
          <div>
            <h4 className="title">
              Szervizelés - Megbízhatóság szakértői kezekből
            </h4>
            <p className="content">
              A liftek és mozgólépcsők szervizelése kulcsfontosságú a zavartalan
              működés és az utasok biztonságának érdekében. Az SOS Elevator a
              legmagasabb színvonalú szervizszolgáltatásokat nyújtja, legyen szó
              akár hirtelen fellépő meghibásodások gyors javításáról, akár a
              rendszeres ellenőrzésekről.
            </p>
            <h5>Miért válassza szervizszolgáltatásunkat?</h5>
            <ul>
              <li>
                <strong>Gyors hibaelhárítás:</strong>Szakértő csapatunk 24/7
                elérhetőséggel biztosítja, hogy a váratlan problémák ne állítsák
                meg rendszerei működését.
              </li>
              <li>
                <strong>Megbízható megoldások:</strong>Precíz diagnosztika és
                korszerű technológiák segítségével minimalizáljuk az állásidőt.
              </li>
              <li>
                <strong>Hosszú élettartam garantálása:</strong>Az időben
                elvégzett javításokkal és cserékkel meghosszabbítjuk liftjei és
                mozgólépcsői élettartamát.
              </li>
            </ul>
            <p>
              <strong>Hogyan működik?</strong> Az SOS Elevator
              szervizszolgáltatásait az Ön igényeire szabjuk. Teljes körű
              vizsgálatot végzünk, azonosítjuk a hibákat, és gyors, hatékony
              javításokat végzünk, hogy rendszerei a lehető leghamarabb újra
              üzemeljenek.
            </p>
            <p>
              <strong>
                Forduljon hozzánk bizalommal, és biztosítsa rendszerei
                zavartalan működését a legjobb szakértők segítségével!
              </strong>
            </p>
          </div>
        </section>
        <section id="modernizacio">
          <div>
            <h4 className="title">
              Modernizáció - A jövő technológiájának előnyei a mai rendszerekben
            </h4>
            <p className="content"></p>
          </div>
          <img src="#" alt="modernizacio" />
        </section>
        <section id="hibaelharitas">
          <img src="#" alt="hibaelharitas" />
          <div>
            <h4 className="title">Hibaelhárítás</h4>
            <p className="content"></p>
          </div>
        </section>
        <section id="tanacsadas">
          <div>
            <h4 className="title">Tanácsadás</h4>
            <p className="content"></p>
          </div>
          <img src="#" alt="tanacsadas" />
        </section>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
