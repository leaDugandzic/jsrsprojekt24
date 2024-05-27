import Farma from "../Img/farma.jpg";
import Zrna from "../Img/zrna.jpg";
import Usluga from "../Img/usluga.jpg";
import Desert from "../Img/desert.jpg";
import Ljudi from "../Img/ljudi.jpg";
import Ekipa from "../Img/ekipa.jpg"
import Event from "../Img/event.jpg";
import Kuhanje from "../Img/kuhanje.jpg";
import Hiperveza from "./Hiperveza";

function Onama() {
    return (
        <div className="App">
            <div className="predstavljanje">
                <div className="box">
                    <img src={Zrna} />
                    <div className="infoBox">
                        <h2>Domaći proizvodi</h2>
                    </div>
                </div>
                <div className="box">
                    <img src={Usluga} />
                    <div className="infoBox">
                        <h2>Srdačno osoblje</h2>
                    </div>
                </div>
                <div className="box">
                    <img src={Desert} />
                    <div className="infoBox">
                        <h2>Slasni desrti</h2>
                    </div>
                </div>
                <div className="box">
                    <img src={Ljudi} />
                    <div className="infoBox">
                        <h2>Razna događanja</h2>
                    </div>
                </div>
            </div>
            <div className="uvod">
                <div className="opisTradicije">
                    <h1>Stojimo uz male farme</h1>
                    <h2>Samo domaće i svježe za naše goste</h2>
                    <p>
                        Kafić Aroma sreće oduvijek podržava domaće male farme i koristi
                        njihove proizvode kako bi osigurao najkvalitetnije sastojke za
                        svoje napitke i slastice. Suradnjom s lokalnim farmerima ,Aroma
                        sreće ne samo da pruža svježe i organske namirnice svojim gostima,
                        već i doprinosi održivosti i razvoju lokalne zajednice. Svako zrno
                        kave, mlijeko, voće i drugi sastojci koji se koriste u njihovim
                        proizvodima pažljivo su odabrani od malih, obiteljskih gospodarstava
                        koja prakticiraju ekološku poljoprivredu. Ova suradnja omogućava farmerima
                        stabilan prihod i potiče očuvanje tradicionalnih metoda uzgoja. Gosti
                        kafića Aroma sreće mogu uživati u bogatim okusima i aromama, znajući
                        da su njihovi obroci pripremljeni s ljubavlju i pažnjom prema okolišu.
                        Ova posvećenost kvaliteti i zajednici čini Aroma sreće omiljenim mjestom
                        za sve one koji cijene dobar okus i etički pristup prehrani.
                    </p>
                </div>
                <img src={Farma} />
            </div>
            <div className="uvod">
                <img src={Ekipa} />
                <div className="opisTradicije">
                    <h1>Iskusni zaposlenici</h1>
                    <h2>Garantiramo vrhunsksu poslugu</h2>
                    <p>
                        Ponosni smo na naše srdačno, iskusno i pouzdano osoblje koje svakodnevno pruža vrhunsku uslugu našim gostima. Naši zaposlenici nisu samo stručnjaci u pripremi najboljih pića i slastica, već su i istinski posvećeni stvaranju ugodne i prijateljske atmosfere. Svaki član našeg tima prolazi temeljitu obuku kako bi osigurao da svaki posjet našem kafiću bude nezaboravan. S osmijehom na licu i spremnošću da izađu u susret svakom zahtjevu, naše osoblje stvara osjećaj domaće topline i gostoprimstva. Iskustvo i stručnost naših barista i konobara odražavaju se u svakom savršeno pripremljenom piću i pažljivo serviranom desertu. Pouzdanost našeg osoblja daje sigurnost da će svaki posjetitelj dobiti najbolju moguću uslugu. Aroma sreće je mjesto gdje se svaki gost osjeća kao kod kuće, zahvaljujući predanom radu i ljubaznosti našeg osoblja.
                    </p>
                </div>
            </div>
            <Hiperveza />
            <div className="uvod">
                <div className="opisTradicije">
                    <h1>Neodoljivi deserti</h1>
                    <h2>Savršena kombinacija okusa</h2>
                    <p>
                        Slasni i ukusni deserti svakodnevno oduševljavaju naše goste. Naši deserti nisu samo vizualno privlačni, već su i pažljivo pripremljeni s najkvalitetnijim sastojcima. Svaki desert koji poslužujemo rezultat je strasti i stručnosti naših slastičara, koji se trude stvoriti savršenu kombinaciju okusa i tekstura. Od bogatih čokoladnih kolača do osvježavajućih voćnih tartova, svaki zalogaj je prava poslastica. Naši deserti su idealni za svakodnevno uživanje, ali i za posebne prilike koje želite učiniti nezaboravnima. U kafiću Aroma sreće, svaki desert je pažljivo serviran s ljubavlju i posvećenošću detaljima, kako bi svaki gost mogao doživjeti trenutke čistog užitka. Posjetite nas i otkrijte zašto su naši deserti omiljeni među ljubiteljima slatkog.
                    </p>
                </div>
                <img src={Kuhanje} />
            </div>
            <div className="uvod">
                <img src={Event} />
                <div className="opisTradicije">
                    <h1>Uzbudljiva događanja</h1>
                    <h2>Nezaboravni trenuci uz sjajnu atmosferu</h2>
                    <p>
                        Razna zabavna događanja stvaraju nezaboravne trenutke za naše goste. Bilo da je riječ o glazbenim večerima, kvizovima, tematskim zabavama ili radionicama, svaki događaj je pažljivo osmišljen kako bi pružio jedinstveno iskustvo i vrhunsku zabavu. Naša događanja omogućuju gostima da se opuste, zabave i druže u opuštenoj i prijateljskoj atmosferi. Svaki događaj donosi nešto novo i uzbudljivo, prilagođeno različitim interesima i ukusima. Uz vrhunska pića i slasne deserte, svaki posjet Aroma sreći postaje poseban doživljaj. Pridružite nam se i doživite zašto je Aroma sreće omiljeno mjesto za sve koji traže dobru zabavu i opuštanje. Ovdje, svaki trenutak je prilika za stvaranje lijepih uspomena uz sjajnu atmosferu i veselo društvo.                    </p>
                </div>
            </div>
        </div>
    );
}
export default Onama;