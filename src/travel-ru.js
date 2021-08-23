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
import placekosa from "./images/place-kosa2.jpg";
import placekolsky from "./images/place-kolsky2.jpg";
import berlin from "./images/place-altai2.jpg";
import bonn from "./images/place-winter-baikal2.jpg";
import bremen from "./images/place-karelia2.jpg";



function TravelRu() {
  return (<>
     <div>  
       <title>Путешествия по России</title>
     </div>

     <div className="root">

    <main className="content">
      <section className="lead root__section">
        <h1 className="lead__title">Путешествия по России</h1>
        <p className="lead__subtitle">Настоящая страна не в выпусках новостей, а здесь.</p>
        <img className="lead__image" src={polka} alt="Путешествия по России" />
        <p className="lead__caption">ваша полка — верхняя</p>
      </section>


      <section className="intro root__section root__border">
        <h2 className="intro__title">Чего мы там не видели?</h2>
        <p className="intro__text">
          По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать,
          но только 36% планируют провести отпуск в родной стране.
          Мол, чего мы тут, дома, не видели? На самом деле,
          Россия — это целая вселенная с ласковым морем юга,
          густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть все эти красоты можно без миллионов на
          счету,
          загранпаспорта и многочасовых перелетов. Как, например, Вера Башмакова — смелая молодая мама, которая взяла в
          охапку
          троих детей, усадила их в свою «Ладу» и проехала 20 тысяч километров по родной стране.
          Мы выбрали и описали некоторые интересные места, достойные вашего отпуска.
        </p>
        <ul className="intro__list">
          <li>Часовых поясов<span className="intro__size"> 11</span></li>
          <li>Объектов природного наследия ЮНЕСКО<span className="intro__size"> 12</span></li>
          <li>Объектов культурного наследия ЮНЕСКО<span className="intro__size"> 16</span></li>
          <li>Природных заповедников<span className="intro__size"> 105</span></li>
          <li>Аэропортов <span className="intro__size"> 241</span></li>
        </ul>
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
          <h2 className="place__title">Куршская коса</h2>
          <div className="place__website">
            <p className="place__url-heading">URL</p>
            <a className="place__link" href="http://park-kosa.ru" target="_self">park-kosa.ru</a>
          </div>

          <img className="place__image" src={placekosa} alt="Куршская коса" />
          <div className="place__paragraph">
            <p className="place__paragraph">Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два
              водных горизонта —
              спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой.
              Уникальная природная зона на краю российского анклава.</p>
            <p className="place__paragraph">На этом Калининградская область не заканчивается.
              Для путешественника и исследователя там же по соседству — самая западная точка России,
              Балтийская коса, — и немецкое наследие россыпи небольших приморских городов.
              Атмосфера здешних мест исключает суету, окуная в спокойствие природы и запах стального, прохладного моря.
            </p>
          </div>
        </article>

        <article className="place">
          <h2 className="place__title">Кольский</h2>
          <div className="place__website">
            <p className="place__url-heading">URL</p>
            <a className="place__link" href="https://yourshot.nationalgeographic.com/photos/?keywords=kolskiy"
              target="_self">National Geographic</a>
          </div>
          <img className="place__image" src={placekolsky} alt="Кольский" />
          <div className="place__paragraph">
            <p className="place__paragraph">Почти весь полуостров находится за Полярным кругом. Саамская
              тундра, от которой на юг —
              тайга, а на север — Ледовитый океан, прикидывающийся Баренцевым морем.</p>
            <p className="place__paragraph">Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля в
              Териберке. Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний об уроках географии.
              Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов вас давно
              накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом
              в Мурманск.</p>
          </div>
        </article>

        <article className="place">
          <h2 className="place__title">Алтай</h2>
          <div className="place__website">
            <p className="place__url-heading">URL</p>
            <a className="place__link" href="https://www.facebook.com/vera.bashmakova/posts/10156011613718822"
              target="_self">Facebook</a>
          </div>
          <img className="place__image" src={berlin} alt="Алтай" />
          <div className="place__paragraph">
            <p className="place__paragraph">Алтай — одно из красивейших мест в России.
              В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и
              озёра.
              А если вы откроете в автомобиле окна, сможете познакомиться с невидимым чудом здешних мест — горным
              воздухом.</p>
            <p className="place__paragraph">Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите
              всё
              разнообразие местной флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы,
              а на равнинах пасутся косули. И знаменитые манулы — тоже обитатели Алтайского края.</p>
          </div>
        </article>

        <article className="place">
          <h2 className="place__title">Зимний Байкал</h2>
          <div className="place__website">
            <p className="place__url-heading">URL</p>
            <a className="place__link" href="https://vk.com/baikalmile" target="_self">https://vk.com/baikalmile</a>
          </div>
          <img className="place__image" src={bonn} alt="Зимний Байкал" />
          <div className="place__paragraph">
            <p className="place__paragraph">Всем известен Байкал как крупнейшее озеро
              в мире. Многие также знают, что это самый большой источник пресной воды и одно из красивейших мест в
              России.
            </p>
            <p className="place__paragraph">Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по
              скийорингу.
              Это такой вид спорта, когда лыжник привязывает себя
              к мотоциклу, и тандем старается развить как можно бóльшую скорость на льду. В марте 2019 года на фестивале
              «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.</p>
          </div>
        </article>

        <article className="place">
          <h2 className="place__title">Карелия</h2>
          <div className="place__website">
            <p className="place__url-heading">URL</p>
            <a className="place__link" href="http://vodlozero.ru/" target="_self">http://vodlozero.ru/</a>
          </div>
          <img className="place__image" src={bremen} alt="Карелия" />
          <p className="place__paragraph">
            Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу сибирская лиственница
            не растёт западнее Водлозера. Зато здесь она вымахивает на 30 метров — леса карельских национальных парков
            из-за непроходимых болот никогда не знали топора. Некоторым соснам уже больше чем полтысячелетия.
            Прикоснитесь
            к живому существу, видевшему солнце раньше, чем увидал его Иван Грозный.
            В девственном лесу на сотню километров не встретишь тропы. А на редких тропинках деревья
            в паре метров от земли помечены медвежьими когтями. Чтобы все знали, кто тут хозяин.
          </p>
        </article>
      </section>


      <section className="cover root__section">
        <a className="cover__link" href="https://stampsy.com/na-elektrichkakh-do-baikala" target="_self">
          <h2 className="cover__title">До Байкала
            «на собаках»</h2>
          <p className="cover__subtitle">По мотивам учебной темы о Транссибе
            — путешествие от столицы до Байкала
            на электричках.</p>
        </a>
      </section>
    </main>
    <footer className="footer root__border root__section">
      <nav className="menu menu_type_mobile">
        <a className="https://yandex.ru/maps" className="footer__link" target="_self">Карты</a>
        <a className="https://yandex.ru/pogoda" className="footer__link" target="_self">Погода</a>
        <a className="https://rasp.yandex.ru" className="footer__link" target="_self">Расписание</a>
        <a className="https://calendar.yandex.ru" className="footer__link" target="_self">Календарь</a>
        <a className="https://travel.yandex.ru" className="footer__link" target="_self">Путешествия</a>
      </nav>
      <p className="footer__copyright"> &copy; 2021 Elena Rozhkova</p>
    </footer>

  </div>

    </>
  );
}


export default TravelRu;