import LogoKava from '../Img/cup-of-hot-chocolate.png';
import LogoMeni from '../Img/menu.png';
import LogoKoment from '../Img/chat.png';
import LogoTorta from '../Img/cake.png';
import Kava1 from '../Img/caramel-latte.jpg';
import Kava2 from '../Img/toasted-coconut-mocha.jpg';
import Kava3 from '../Img/ice-coffee.jpg';
import Kava4 from '../Img/dalgona-coffee.jpg';
import Kolac1 from '../Img/coko-malina.jpg';
import Kolac2 from '../Img/tiramisu.jpg';
import Kolac3 from '../Img/cupavci.jpg';
import Kolac4 from '../Img/ledeni-vjetar.jpg';
import Korisnik from '../Img/korisnik.png';

function Naslovna({ kava1, kava2, kava3, kava4, kolac1, kolac2, kolac3, kolac4, kava5, kava6, kava7, kava8, kava9, kava10, kolac5, kolac6, kolac7, kolac8, kolac9, kolac10 }) {
    return (
        <div className="App">
            <div className="ikone">
                <div className="item">
                    <a href='#kava'><img src={LogoKava} /></a>
                </div>
                <div className="item">
                    <a href='#meni'><img src={LogoMeni} /></a>
                </div>
                <div className="item">
                    <a href='#kolaci'><img src={LogoTorta} /></a>
                </div>
                <div className="item">
                    <a href='#naslovKoment'><img src={LogoKoment} /></a>
                </div>
            </div>
            <div className="posebnaPonuda">
                <h1>Posebna ponuda</h1>
                <div className="izdvojeno" id="kava">
                    <div className="item2">
                        <img src={Kava1} />
                        <h2>{kava1.ime}</h2>
                        <p>{kava1.sastojci}</p>
                        <h3>Cijena: {kava1.cijena}</h3>
                    </div>
                    <div className="item2">
                        <img src={Kava2} />
                        <h2>{kava2.ime}</h2>
                        <p>{kava2.sastojci}</p>
                        <h3>Cijena: {kava2.cijena}</h3>
                    </div>
                    <div className="item2">
                        <img src={Kava3} />
                        <h2>{kava3.ime}</h2>
                        <p>{kava3.sastojci}</p>
                        <h3>Cijena: {kava3.cijena}</h3>
                    </div>
                    <div className="item2">
                        <img src={Kava4} />
                        <h2>{kava4.ime}</h2>
                        <p>{kava4.sastojci}</p>
                        <h3>Cijena: {kava4.cijena}</h3>
                    </div>
                </div>
                <div className="izdvojeno" id="kolaci">
                    <div className="item2">
                        <img src={Kolac1} />
                        <h2>{kolac1.ime}</h2>
                        <p>{kolac1.sastojci}</p>
                        <h3>Cijena: {kolac1.cijena}</h3>
                    </div>
                    <div className="item2">
                        <img src={Kolac2} />
                        <h2>{kolac2.ime}</h2>
                        <p>{kolac2.sastojci}</p>
                        <h3>Cijena: {kolac2.cijena}</h3>
                    </div>
                    <div className="item2">
                        <img src={Kolac3} />
                        <h2>{kolac3.ime}</h2>
                        <p>{kolac3.sastojci}</p>
                        <h3>Cijena: {kolac3.cijena}</h3>
                    </div>
                    <div className="item2">
                        <img src={Kolac4} />
                        <h2>{kolac4.ime}</h2>
                        <p>{kolac4.sastojci}</p>
                        <h3>Cijena: {kolac4.cijena}</h3>
                    </div>
                </div>
            </div>
            <div className="meniNaslov" id="meni">
                <h1>Naš meni</h1>
                <h3>Spoj koji osvaja srca</h3>
            </div>
            <div className="meni">
                <div className="stupac">
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kava1.ime}</h2>
                            <p>{kava1.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kava1.cijena}</h2>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kava2.ime}</h2>
                            <p>{kava2.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kava2.cijena}</h2>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kava3.ime}</h2>
                            <p>{kava3.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kava3.cijena}</h2>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            < h2>{kava4.ime}</h2>
                            <p>{kava4.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kava4.cijena}</h2>
                            <p>NOVO</p>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kava5.ime}</h2>
                            <p>{kava5.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kava5.cijena}</h2>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kava6.ime}</h2>
                            <p>{kava6.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kava6.cijena}</h2>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kava7.ime}</h2>
                            <p>{kava7.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kava7.cijena}</h2>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kava8.ime}</h2>
                            <p>{kava8.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kava8.cijena}</h2>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kava9.ime}</h2>
                            <p>{kava9.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kava9.cijena}</h2>
                            <p>NOVO</p>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kava10.ime}</h2>
                            <p>{kava10.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kava10.cijena}</h2>
                        </div>
                    </div>
                </div>
                <div className="stupac">
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kolac1.ime}</h2>
                            <p>{kolac1.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kolac1.cijena}</h2>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kolac2.ime}</h2>
                            <p>{kolac2.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kolac2.cijena}</h2>
                            <p>NOVO</p>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kolac3.ime}</h2>
                            <p>{kolac3.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kolac3.cijena}</h2>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kolac4.ime}</h2>
                            <p>{kolac4.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kolac4.cijena}</h2>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kolac5.ime}</h2>
                            <p>{kolac5.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kolac5.cijena}</h2>
                            <p>NOVO</p>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kolac6.ime}</h2>
                            <p>{kolac6.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kolac6.cijena}</h2>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kolac7.ime}</h2>
                            <p>{kolac7.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kolac7.cijena}</h2>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kolac8.ime}</h2>
                            <p>{kolac8.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kolac8.cijena}</h2>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kolac9.ime}</h2>
                            <p>{kolac9.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kolac9.cijena}</h2>
                        </div>
                    </div>
                    <div className="redak">
                        <div className="sadrzaj">
                            <h2>{kolac10.ime}</h2>
                            <p>{kolac10.sastojci}</p>
                        </div>
                        <div className="cijena">
                            <h2>{kolac10.cijena}</h2>
                            <p>NOVO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="naseUsluge" id="usluge">
                <div className="red">
                    <div className="polje">
                        <h2>Radno vrijeme</h2>
                        <p>Pon - Pet : 8.00h - 23.00h</p>
                        <p>Sub : 8.00h - 22.00h</p>
                        <p>Ned : Zatvoreno</p>
                    </div>
                    <div className="polje" id="slija1"></div>
                    <div className="polje">
                        <h2>Lokacija</h2>
                        <p>Ulica Petra Svečića 2</p>
                        <p>21 000 Split</p>
                        <p>Hrvatska</p>
                    </div>
                </div>
                <div className="red">
                    <div className="polje" id="slija2"></div>
                    <div className="polje">
                        <h2>Rezervirajte prostor</h2>
                        <p>Mail : aromaSrece@gmail.com</p>
                        <p>Tel : 021 345 821</p>
                    </div>
                    <div className="polje" id="slija3"></div>
                </div>
            </div>
            <h2 id='naslovIznadKoment'>Dođi i postani dio</h2>
            <h1 id='naslovKoment'>Naših zadovoljnih kupaca</h1>
            <div className="komentari">
                <div className="koment">
                    <div className="opis">
                        <img src={Korisnik} />
                        <div className="korisnik">
                            <h2>Greta Skokić</h2>
                            <h3>greta.skokic@gmail.com</h3>
                        </div>
                    </div>
                    <div className="sadrzajKomentara">
                        <p>U kafiću Aroma sreće uvijek se osjećam kao kod kuće. Atmosfera je opuštajuća, kava je ukusna, a osoblje izuzetno ljubazno.
                        </p>
                    </div>
                </div>
                <div className="koment">
                    <div className="opis">
                        <img src={Korisnik} />
                        <div className="korisnik">
                            <h2>Ivan Bubalo</h2>
                            <h3>i.bubalo77@gmail.com</h3>
                        </div>
                    </div>
                    <div className="sadrzajKomentara">
                        <p>Kad god trebam malo odmora od užurbanog dana, svratim u Aromu sreće. Osjećam se kao da sam na kraju radnog tjedna, čak i kad je srijeda.
                        </p>
                    </div>
                </div>
                <div className="koment">
                    <div className="opis">
                        <img src={Korisnik} />
                        <div className="korisnik">
                            <h2>Lovre Marić</h2>
                            <h3>maric.lovre@gmail.com</h3>
                        </div>                    </div>
                    <div className="sadrzajKomentara">
                        <p>Aroma sreće je moje omiljeno mjesto za sastanke s prijateljima. Uvijek ima dobru atmosferu i fantastičnu ponudu kave i kolača.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Naslovna;