import React from 'react'
import "./Home.css";
import homeImg from "../../images/home.jpg";
import Product from '../product/Product';
import shortid from "shortid";
import ProductImg1 from "../../images/products/1.png";
import ProductImg2 from "../../images/products/2.png";
import ProductImg3 from "../../images/products/3.png";
import ProductImg4 from "../../images/products/4.png";
import ProductImg5 from "../../images/products/5.png";
import ProductImg6 from "../../images/products/6.png";

const Home = () => {
  return (
    <div className='home'>
        <div className='home-container'>
            <img src={homeImg} className='home-image' alt='homeImg'/>
            <div className='home-row'>
              <Product 
               id={shortid.generate()}
               image={ProductImg1}
               price={34}
               title="lorem ipsum for some information about our product"
               rating={5}
              />
              <Product 
               id={shortid.generate()}
               image={ProductImg2}
               price={87}
               title="lorem ipsum for some information about our product"
               rating={3}
              />
            </div>
            <div className='home-row'>
              <Product 
               id={shortid.generate()}
               image={ProductImg3}
               price={90}
               title="lorem ipsum for some information about our product"
               rating={7}
              />
              <Product 
               id={shortid.generate()}
               image={ProductImg4}
               price={77}
               title="lorem ipsum for some information about our product"
               rating={3}
              />
            </div>
            <div className='home-row'>
              <Product 
               id={shortid.generate()}
               image={ProductImg5}
               price={68}
               title="lorem ipsum for some information about our product"
               rating={5}
              />
              <Product 
               id={shortid.generate()}
               image={ProductImg6}
               price={45}
               title="lorem ipsum for some information about our product"
               rating={2}
              />
            </div>
        </div>
    </div>
  )
}

export default Home;