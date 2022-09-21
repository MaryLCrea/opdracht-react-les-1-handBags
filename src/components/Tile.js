
import React from 'react';

function Tile({kop, tekst, foto, pica}) {
    return (
        <section>
            {foto && <img src={foto} alt={pica}/>}
            <h2>{kop}</h2>
            <p>{tekst}</p>
            </section>
    );
}
export default Tile;