import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/" className='li'>Arome sreće</Link></li>
                    <li><Link to="/onama" className='li'>O nama</Link></li>
                </ul>
            </nav>
            <div className="header">
                <div className="naslov">
                    <h1>Slatki trenuci, nezaboravni okusi</h1>
                    <h2>Lea Dugandžić g2p - Aroma sreće</h2>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
