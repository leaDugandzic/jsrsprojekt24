import React, { Component } from "react";


export class Hiperveza extends Component {
    state = {
        ime: "",
        prezime: "",
        email: "",
        prikazaniPodaci: ""
    }

    onSubmit = e => {
        e.preventDefault();
        const { ime, prezime, email } = this.state;
        const prikazaniPodaci = `Hvala na prijavi na našu nagradnu igru ${ime} ${prezime}. Sretno i sve novosti ćemo slati na tvoj email - ${email} .`;
        this.setState({ prikazaniPodaci });
    }

    render() {
        const { prikazaniPodaci } = this.state;
        return (
            <div className="prijava">
                <div className="natjecanje">
                    <h1>Prijavi se na naš natječaj</h1>
                    <h2>i osvoji novi aparat za kavu</h2>
                    <p>Sve što trebaš je popuniti ovu prijavu i doći na izvlačenje u četvrtak 6.6.2024. u 18.00h. Iz našeg velikog bubnja izvlačiti ćemo imena, tko zna možda si baš ti sretni dobitnik. Ako ne možeš doći u četvrtak ostavi svoj email pa ti pošaljemo sretne vijesti.</p>
                    <div className="ispis">
                        <h3>Okušaj svoju sreću</h3>
                        <p>{prikazaniPodaci}</p>
                    </div>
                </div>
                <div className="form">
                    <form onSubmit={this.onSubmit}>
                        <label>Ime</label><input onChange={e => this.setState({ ime: e.target.value })} />
                        <label>Prezime</label><input onChange={e => this.setState({ prezime: e.target.value })} />
                        <label>Email</label><input onChange={e => this.setState({ email: e.target.value })} />
                        <button type="submit">Pošalji</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Hiperveza;
