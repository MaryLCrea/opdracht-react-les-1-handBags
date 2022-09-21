import React from 'react';
import './App.css';
import Button from './components/Button.js';
import Products from './components/Products.js';
import Tile from './components/Tile.js';
import fotoTas1 from './assets/bag_1.png';
import fotoTas2 from './assets/bag_2.png';
import fotoTas3 from './assets/bag_3.png';
import fotoTas4 from './assets/bag_4.png';
import foto1 from './assets/brand.png';
import foto2 from './assets/our_story.png';

function App() {
  return (
      <>
          <h1>Handbags & Purses</h1>
          <nav>
          <Button isDisabled={false} clickHandler={()=>console.log("to the collection")} > to the collection </Button>
          <Button isDisabled={false} clickHandler={()=>console.log("shop all bags")} > shop all bags </Button>
          <Button isDisabled={true} clickHandler={()=>console.log("pre-orders")} > pre-orders </Button>
          </nav>
          <main>
              <Products redLabel="Best Seller" foto= {fotoTas1} name="Handy" price={400}/>
              <Products redLabel="Best Seller" foto= {fotoTas2} name="stylisch" price={250}/>
              <Products redLabel="New Collection" foto= {fotoTas3} name="simple" price={300}/>
              <Products redLabel="New Collection" foto= {fotoTas4} name="Trendy" price={150}/>
          </main>

          <footer>
              <Tile kop="The Brand" tekst="
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit." ></Tile>
              <Tile foto={foto1}></Tile>
              <Tile foto={foto2}></Tile>
              <Tile kop="Our Story" tekst="
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. "></Tile>
              </footer>
      </>
  )
}
export default App;



