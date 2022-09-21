
import React from 'react';


function Products({redLabel, foto, name, price}) {
    return (
        <article>
            <span>{redLabel}</span>
            <img src={foto} alt="foto"/>
            <p> The {name} Bag</p>
            <h4>€{price}</h4>
        </article>

    )
}
export default Products;