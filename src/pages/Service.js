import "../styles/ServicesPage.css";
import karbantartas from "../images/ServicesKarbantartas.png";
import szervizeles from "../images/ServicesSzervizeles.png";
import modernizacio from "../images/ServicesModernization.png";
import tanacsadas from "../images/ServicesTanacsadas.png";

export default function Service() {
  return (
    <div id="ServicePage">
      <div className="services">
        <section id="karbantartas">
          <div>
            <h4 className="title">
              Karbantartás - Hosszú távú megbízhatóság liftek és mozgólépcsők
              számára
            </h4>
            <p className="content">
              A liftek és mozgólépcsők zavartalan és biztonságos működése
              elengedhetetlen a mindennapi élet gördülékenységéhez.
              <strong>
                {" "}
                A SOS Elevator Kft. karbantartási szolgáltatásai garantálják,
                hogy rendszerei hosszú távon megbízhatóan és hatékonyan
                üzemeljenek.
              </strong>
            </p>
            <h5>Miért válassza karbantartási szolgáltatásainkat?</h5>
            <ul>
              <li>
                <strong>Szakértői támogatás: </strong>Képzett technikusaink
                modern eszközökkel végzik a karbantartást, hogy csökkentsék a
                meghibásodás kockázatát és növeljék az élettartamot.
              </li>
              <li>
                <strong>Megelőző ellenőrzések: </strong>Az időszakos
                felülvizsgálatok során azonosítjuk és megelőzzük a potenciális
                problémákat, mielőtt azok komoly károkat okoznának.
              </li>
              <li>
                <strong>Gazdaságos működés: </strong>A karbantartással
                elkerülheti a költséges javításokat, és biztosíthatja rendszerei
                energiahatékonyságát.
              </li>
              <li>
                <strong>Testreszabott megoldások: </strong>Szolgáltatásainkat az
                Ön egyedi igényeihez igazítjuk, hogy maximális kényelmet és
                biztonságot nyújtsanak.
              </li>
            </ul>
            <h5>Hogyan működik?</h5>
            <ol>
              <li>
                <strong>Állapotfelmérés: </strong>Rendszerei jelenlegi
                állapotának alapos elemzése.
              </li>
              <li>
                <strong>Megelőző karbantartás: </strong>Kulcsfontosságú
                alkatrészek tisztítása, kenése és szükség esetén cseréje.
              </li>
              <li>
                <strong>Rendszeres ellenőrzések: </strong>Az ütemezett
                vizsgálatok biztosítják a folyamatos, problémamentes üzemelést.
              </li>
            </ol>
            <p>
              Fektessen a biztonságba és a megbízhatóságba!
              <strong>
                {" "}
                Válassza a SOS Elevator Kft.-t, hogy liftek és mozgólépcsők
                problémamentesen szolgálhassák Önt és ügyfeleit!
              </strong>
            </p>
          </div>
          <img src={karbantartas} alt="karbantartas" />
        </section>
        <section id="szerviz">
          <img src={szervizeles} alt="szerviz" />
          <div className="szerviz">
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
                <strong>Gyors hibaelhárítás: </strong>Szakértő csapatunk 24/7
                elérhetőséggel biztosítja, hogy a váratlan problémák ne állítsák
                meg rendszerei működését.
              </li>
              <li>
                <strong>Megbízható megoldások: </strong>Precíz diagnosztika és
                korszerű technológiák segítségével minimalizáljuk az állásidőt.
              </li>
              <li>
                <strong>Hosszú élettartam garantálása: </strong>Az időben
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
            <p className="content">
              <strong>
                Modernizáció liftek és mozgólépcsők számára: Innováció és
                hatékonyság a csúcstechnológiával
              </strong>{" "}
              A régi rendszerek modernizációja nem csupán esztétikai, hanem
              funkcionális és biztonsági szempontból is nélkülözhetetlen. A
              legújabb technológiai megoldások alkalmazásával a liftek és
              mozgólépcsők energiahatékonyabbak, megbízhatóbbak és
              kényelmesebbek lesznek mindennapi használatra. A modernizáció
              során korszerű vezérlőrendszereket, energiatakarékos megoldásokat
              és intelligens funkciókat integrálunk az Ön meglévő rendszereibe.
            </p>
            <h5>Miért válassza a modernizációt?</h5>
            <ul>
              <li>
                <strong>Költséghatékonyság: </strong>Csökkentse üzemeltetési
                költségeit energiahatékony komponensekkel.
              </li>
              <li>
                <strong>Biztonság: </strong>Korszerűsített biztonsági rendszerek
                a zavartalan és balesetmentes működésért.
              </li>
              <li>
                <strong>Kényelem és esztétika: </strong>Újítsa meg liftek és
                mozgólépcsők megjelenését és használhatóságát, igazítva a modern
                igényekhez.
              </li>
              <li>
                <strong>Környezetvédelem: </strong>Hozzon létre fenntarthatóbb
                működést a régi rendszerek energiahatékonyságának növelésével.
              </li>
            </ul>
            <h5>Mit kínálunk?</h5>
            <ul>
              <li>
                Komplett rendszercserét vagy részleges modernizációt az Ön
                igényei szerint.
              </li>
              <li>
                Korszerű dizájnelemekkel és érintőképernyős vezérlőpanelekkel
                felszerelt rendszereket.
              </li>
              <li>
                Megbízható szakértői csapatunk személyre szabott megoldásokat
                nyújt a telepítés, frissítés és karbantartás minden fázisában.
              </li>
            </ul>
            <p>
              <strong>
                Emelje magasabb szintre rendszereit, és hozza ki a maximumot
                meglévő berendezéseiből!
              </strong>
              A modernizációval nem csupán az üzleti hatékonyságát növelheti,
              hanem ügyfelei és alkalmazottai számára is egy kényelmesebb és
              biztonságosabb környezetet biztosíthat.
            </p>
            <p>
              <strong>Kapcsolat:</strong>Vegye fel velünk a kapcsolatot, hogy
              szakértői csapatunk segíthessen az Ön igényeire szabott
              modernizációs megoldások kiválasztásában!
            </p>
          </div>
          <img src={modernizacio} alt="modernizacio" />
        </section>
        <section id="tanacsadas">
        <img src={tanacsadas} alt="tanacsadas" />
          <div className="tanacsadas">
            <h4 className="title">
              Szaktanácsadás - Szakértői útmutatás a hatékony működésért
            </h4>
            <p className="content">
              A liftek és mozgólépcsők működésének optimalizálása sokszor
              összetett kihívást jelent. Az <strong>SOS Elevator Kft. </strong>
              szaktanácsadási szolgáltatásai segítenek Önnek megérteni és
              megoldani a rendszerei működésével kapcsolatos problémákat,
              valamint megalapozott döntéseket hozni. Tapasztalt szakembereink
              egyedi igényekre szabott megoldásokkal támogatják Önt, hogy
              rendszerei mindig a legjobb teljesítményt nyújtsák.
            </p>
            <h5>
              Miért érdemes szaktanácsadási szolgáltatásainkat választani?
            </h5>
            <ul>
              <li>
                <strong>Egyedi megoldások: </strong>Minden tanácsadásunk a
                konkrét igények és kihívások figyelembevételével készül, hogy
                valódi hozzáadott értéket nyújtsunk.
              </li>
              <li>
                <strong>Megbízható szakértelem: </strong>Csapatunk hosszú évek
                tapasztalatával rendelkezik a liftek és mozgólépcsők
                karbantartása, modernizációja és szervizelése terén.
              </li>
              <li>
                <strong>Költséghatékony megoldások: </strong>A hatékony
                tanácsadás segít megelőzni a váratlan hibákat és optimalizálja a
                működtetési költségeket.
              </li>
              <li>
                <strong>Jövőbiztos rendszerek: </strong>Segítünk megtervezni
                azokat a lépéseket, amelyek biztosítják, hogy rendszerei a
                legújabb technológiai elvárásoknak is megfeleljenek.
              </li>
            </ul>
            <h5>Hogyan működik?</h5>
            <p>
              Az <strong>SOS Elevator Kft.</strong> szaktanácsadási
              szolgáltatása az Ön igényeire szabott. Legyen szó
              rendszerdiagnosztikáról, modernizációs lehetőségek felméréséről
              vagy költségoptimalizálásról, szakértőink részletes elemzésekkel
              és javaslatokkal állnak rendelkezésére. Fektessen a hosszú távú
              biztonságba és hatékonyságba! Forduljon hozzánk, és használja ki a
              szakértői tanácsadás minden előnyét.
            </p>
          </div>
          
        </section>
      </div>
    </div>
  );
}
