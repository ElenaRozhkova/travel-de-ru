import './App.css';
import './pages/index.css';
import polka from "./images/lead-polka.jpg";
import train from "./images/photo-grid-train.jpg";
import tuman from "./images/photo-grid-tuman.jpg";
import tulsi from "./images/photo-grid-atharva-tulsi.jpg";
import sochi from "./images/photo-grid-sochi.jpg";
import arisa from "./images/photo-grid-arisa.jpg";
import baikal from "./images/photo-grid-baikal.jpg" ;
import elbrus from "./images/photo-grid-elbrus.jpg";
import kondratiev from "./images/photo-grid-kondratiev.jpg";
import kamchatka2 from "./images/photo-grid-kamchatka-1.jpg" ;
import kamchatka3 from "./images/photo-grid-kamchatka-2.jpg";
import baikal2 from "./images/photo-grid-baikal-2.jpg";
import ergaki from "./images/photo-grid-ergaki.jpg";
import placekosa from "./images/place-kosa.jpg";
import placekolsky from "./images/place-kolsky.jpg";
import berlin from "./images/place-altai.jpg";
import bonn from "./images/place-winter-baikal.jpg";
import bremen from "./images/place-karelia.jpg";


function TravelDe() {
  return (<>
     <div>  
       <title>Erleben Sie das Reiseland Deutschland</title>
     </div>

    <div className="root">
    <main className="content">
            <section className="lead root__section">
                <h1 className="lead__title">Deutschland einfach freundlich</h1>
                <p className="lead__subtitle">Erleben Sie das Reiseland Deutschland</p>
                <img className="lead__image" src={polka} alt="Reiseland Deutschland" />
                <p className="lead__caption">Eine der schönsten Städtereisen in Deutschland führt ins bayerische Rothenburg ob der Tauber</p>
            </section>


            <section className="intro root__section root__border">
                <h2 className="intro__title">Städte & Kultur</h2>
                <p className="intro__text">
                    In Deutschland warten mehr als 10.000 Städte zwischen Nordsee und Alpen darauf, von Ihnen entdeckt zu werden. Dabei hat jede ihren ganz eigenen Charakter und begeistert mit unvergesslichen Highlights.
                </p>

            </section>

            <section className="photo-grid root__section">
                <img src={train} alt="Поезд" className="photo-grid__item" />
                <img src={tulsi} alt="Горы" className="photo-grid__item" />
                <img src={tuman} alt="Туман" className="photo-grid__item" />
                <img src={sochi} alt="Сочи" className="photo-grid__item" />
                <img src={arisa} alt="Ариса" className="photo-grid__item" />
                <img src={baikal} alt="Байкал" className="photo-grid__item" />
                <img src={elbrus} alt="Эльбрус" className="photo-grid__item" />
                <img src={kondratiev} alt="Кондратиев" className="photo-grid__item" />
                <img src={kamchatka2} alt="Камчатка" className="photo-grid__item" />
                <img src={kamchatka3} alt="Полуостров Камчатка" className="photo-grid__item" />
                <img src={baikal2} alt="Озеро Байкал" className="photo-grid__item" />
                <img src={ergaki} alt="Ергаки" className="photo-grid__item" />
            </section>


            <section className="places root__section">
                <article className="place">
                    <h2 className="place__title">Aachen</h2>
                    <div className="place__website">
                        <p className="place__url-heading">URL</p>
                        <a className="place__link" href="https://www.germany.travel/de/staedte-kultur/aachen.html" target="_self">https://www.germany.travel/de</a>
                    </div>

                    <img className="place__image" src={placekosa} alt="Aachen" />
                    <div className="place__paragraph">
                        <p className="place__paragraph">Aachen ist eine Stadt, die Europa lebt und fühlt. Sozusagen ein Europa im Kleinen: Zentral in einem Dreiländereck gelegen und seit Karl dem Großen auf vielfältige Weise den geistigen Wurzeln, Werten und Idealen des Kontinents verpflichtet.</p>
                        <p className="place__paragraph">Wahrzeichen und Monument früher europäischer Größe ist der Aachener Dom. Schon um das Jahr 800 war er der erste Dom Nordeuropas und über Jahrhunderte die Krönungskirche fast aller deutschen Könige. Seine Schatzkammer birgt den
                            bedeutendsten Kirchenschatz nördlich der Alpen. Kein Wunder also, dass beides Glanzpunkte der historischen Route durch die Stadt sind. Sie führt an einer ganzen Reihe herausragender Gebäude entlang. Jede Station der Route behandelt
                            ein eigenes Thema: Geschichte, Wissenschaft, Europa, Religion, Macht, Wirtschaft und Medien. Fast ist man versucht, eine Station „Pferdesport“ zu vermissen: Der jährliche Aachener Concours Hippique International Officiel (CHIO)
                            ist immerhin eines der bedeutendsten Pferdesportturniere der Welt.
                        </p>
                    </div>
                </article>

                <article className="place">
                    <h2 className="place__title">Baden-Baden</h2>
                    <div className="place__website">
                        <p className="place__url-heading">URL</p>
                        <a className="place__link" href="https://www.germany.travel/de/staedte-kultur/baden-baden.html" target="_self">https://www.germany.travel/de</a>
                    </div>
                    <img className="place__image" src={placekolsky} alt="Baden-Baden" />
                    <div className="place__paragraph">
                        <p className="place__paragraph">Europas Sommerhauptstadt während der Belle Époque und heute weltweit bekannt als Bäder- und Kulturstadt von erstklassigem medizinischem Ruf: Baden-Baden. Mit ihren glanzvollen Festen, ihrer Eleganz und den milden Temperaturen bietet
                            sie von allem nur das Beste.</p>
                        <p className="place__paragraph">Wunderschön gelegen am Fuße des Schwarzwalds, bildet Baden-Baden den denkbar stilvollsten Rahmen für jedes Kultur- und Gesundheitsprogramm. Aus 12 Quellen und einer Tiefe von 2.000 Metern sprudelt das 68 °C heiße Quellwasser und
                            verwöhnt Gäste aus aller Welt. Außerdem wird es für unterschiedliche Therapien genutzt. </p>
                    </div>
                </article>

                <article className="place">
                    <h2 className="place__title">Berlin</h2>
                    <div className="place__website">
                        <p className="place__url-heading">URL</p>
                        <a className="place__link" href="https://www.germany.travel/de/staedte-kultur/berlin.html" target="_self">Facebook</a>
                    </div>
                    <img className="place__image" src={berlin} alt="Berlin" />
                    <div className="place__paragraph">
                        <p className="place__paragraph">Das Leben kommt langsam zurück nach Berlin. Es muss nicht immer der Großstadttrubel mit seinen klassischen Hotspots sein, denn die Hauptstadt bietet auch viele Möglichkeiten für Outdooraktivitäten.
                        </p>
                        <p className="place__paragraph">Wer Berlin sagt, denkt wohl zuerst an das Brandenburger Tor, das wohl berühmteste Bauwerk der Hauptstadt. Jahrzehntelang Symbol der Teilung, aber auch Mittelpunkt einer zu allen Zeiten quirligen Metropole voller Ideen, Impulse,
                            Kunst, Kultur und Kreativität. Der Kurfürstendamm, Inbegriff des eleganten Stadtboulevards, wunderbare Bürgerviertel und schicke Galerien prägen den Westen der Stadt. Und natürlich das berühmte Nachtleben. </p>
                    </div>
                </article>

                <article className="place">
                    <h2 className="place__title">Bonn</h2>
                    <div className="place__website">
                        <p className="place__url-heading">URL</p>
                        <a className="place__link" href="https://www.germany.travel/de/staedte-kultur/bonn.html" target="_self">https://www.germany.travel/de</a>
                    </div>
                    <img className="place__image" src={bonn} alt="Bonn" />
                    <div className="place__paragraph">
                        <p className="place__paragraph">Bis 1990 Hauptstadt der damaligen Bundesrepublik Deutschland und heute selbstbewusste Wirtschafts- und Kulturmetropole von internationalem Rang: Das idyllisch am Rhein gelegene Bonn präsentiert sich Besuchern weltoffen und umtriebig
                            wie eh und je.
                        </p>

                    </div>
                </article>

                <article className="place">
                    <h2 className="place__title">Bremen</h2>
                    <div className="place__website">
                        <p className="place__url-heading">URL</p>
                        <a className="place__link" href="https://www.germany.travel/de/staedte-kultur/bremen.html" target="_self">https://www.germany.travel/de</a>
                    </div>
                    <img className="place__image" src={bremen} alt="Bremen" />
                    <p className="place__paragraph">
                        Bremen hat viele Gesichter. Die Hansestadt ist das pulsierende Herz Nordwestdeutschlands und Heimat der weltberühmten Bremer Stadtmusikanten. Eine Großstadt mit vielen Facetten, wo sich Geschichte, Tradition, Wissenschaft, Natur und Kultur zu einem faszinierenden
                        Gesamtbild vereinen.
                    </p>
                </article>
            </section>


            <section className="cover root__section">
                <a className="cover__link" href="" target="_self">
                    <h2 className="cover__title">Historic Route</h2>
                    <p className="cover__subtitle">Deutschland barrierefrei erleben</p>
                </a>
            </section>
        </main>
        <footer className="footer root__border root__section">
            <nav className="menu menu_type_mobile">
                <a className="https://yandex.ru/maps" className="footer__link" target="_self">Karten</a>
                <a className="https://yandex.ru/pogoda" className="footer__link" target="_self">Wetter</a>
                <a className="https://rasp.yandex.ru" className="footer__link" target="_self">Zeitplan</a>
                <a className="https://calendar.yandex.ru" className="footer__link" target="_self">Kalender</a>
                <a className="https://travel.yandex.ru" className="footer__link" target="_self">Reisen</a>
            </nav>
            <p className="footer__copyright"> &copy; 2021 Elena Rozhkova</p>
        </footer>

    </div>

    </>
  );
}


export default TravelDe;