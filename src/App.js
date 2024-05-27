import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Naslovna from './Comp/Naslovna';
import Onama from "./Comp/Onama";
import Navbar from "./Comp/Navbar";
import Footer from './Comp/Footer';

function App() {
  let kava1 = {
    ime: "Karamel Latte",
    sastojci: "Kava, mlijeko, karamela, šlag",
    cijena: "3,50 €"
  };
  let kava2 = {
    ime: "Kokos Mocha",
    sastojci: "Kava, kokosovo mlijeko, čokolada",
    cijena: "3,80 €"
  };
  let kava3 = {
    ime: "Ledena Kava",
    sastojci: "Kava, mlijeko, led",
    cijena: "2, 20 €"
  };
  let kava4 = {
    ime: "Dalgona Kava",
    sastojci: "Instant kava, mlijeko, vanilija",
    cijena: "4, 00 €"
  };
  let kava5 = {
    ime: "Menta Mocha",
    sastojci: "Kava, čokolada, menta, mlijeko",
    cijena: "4,20 €"
  };

  let kava6 = {
    ime: "Vanilija Frappuccino",
    sastojci: "Kava, vanilija, led, mlijeko",
    cijena: "4,50 €"
  };
  let kava7 = {
    ime: "Karamela Macchiato",
    sastojci: "Kava, mlijeko, karamela, pjena",
    cijena: "4,20 €"
  };

  let kava8 = {
    ime: "Lješnjak Latte",
    sastojci: "Kava, mlijeko, lješnjak, šlag",
    cijena: "3,80 €"
  };

  let kava9 = {
    ime: "Ledeni Karamela Macchiato",
    sastojci: "Kava, mlijeko, led, karamela",
    cijena: "3,90 €"
  };

  let kava10 = {
    ime: "Bijela Čokolada Mocha",
    sastojci: "Kava, bijela čokolada, mlijeko, šlag",
    cijena: "4,00 €"
  };

  let kolac1 = {
    ime: "Čoko malina",
    sastojci: "Čokolada, maline, kakao",
    cijena: "3, 80 €"
  }
  let kolac2 = {
    ime: "Tiramisu",
    sastojci: "Mascarpone, kava, biskviti, kakao",
    cijena: "4,00 €"
  }

  let kolac3 = {
    ime: "Čupavci",
    sastojci: "Kokos, šećer, mlijeko, čokolada",
    cijena: "2,80 €"
  }

  let kolac4 = {
    ime: "Ledeni vjetar",
    sastojci: "Maskarpone, šećer, voće po izboru",
    cijena: "3,20 €"
  };
  let kolac5 = {
    ime: "Jaffa torta",
    sastojci: "Čokolada, naranča, biskvit",
    cijena: "3,90 €"
  }

  let kolac6 = {
    ime: "Cheesecake",
    sastojci: "Krem sir, keksi, voće",
    cijena: "4,20 €"
  }

  let kolac7 = {
    ime: "Limun kolač",
    sastojci: "Limun, šećer, brašno",
    cijena: "3,50 €"
  }

  let kolac8 = {
    ime: "Štrudla od jabuka",
    sastojci: "Jabuke, cimet, lisnato tijesto",
    cijena: "3,70 €"
  }

  let kolac9 = {
    ime: "Red Velvet torta",
    sastojci: "Kakao, crvena boja, krem sir",
    cijena: "4,80 €"
  }

  let kolac10 = {
    ime: "Pita od višanja",
    sastojci: "Višnje, tijesto, šećer",
    cijena: "3,30 €"
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Naslovna kava1={kava1} kava2={kava2} kava3={kava3} kava4={kava4} kava5={kava5} kava6={kava6} kava7={kava7} kava8={kava8} kava9={kava9} kava10={kava10} kolac1={kolac1} kolac2={kolac2} kolac3={kolac3} kolac4={kolac4} kolac5={kolac5} kolac6={kolac6} kolac7={kolac7} kolac8={kolac8} kolac9={kolac9} kolac10={kolac10} />} />
        <Route path="/onama" element={<Onama />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
