import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const gpu1_deets = {
  name:'Nvidia rtx 3080 ti ',
  img:"https://m.media-amazon.com/images/I/81761uwFaIL._AC_UY327_FMwebp_QL65_.jpg",
  price:120000
};

const gpu2_deets = {
  name:'Nvidia rtx 3070',
  img:'https://m.media-amazon.com/images/I/61RdOtWEiML._AC_UY327_FMwebp_QL65_.jpg',
  price:100000
};


const Image = (props) => <img src={props.src} alt=""/>;

const Name = (props) => <h3>{props.title}</h3>;

const Price = (props) => <h4 style={{color:'blue',fontSize:'0.75rem',fontFamily:'fantasy'}}>Rs. {props.amt}</h4>;

const Gpu = (props) => {
  return (<div className="gpu">
      <Image src={props.src}/>
      <Name title={props.name}/>
      <Price amt={props.amt}/>
    </div>
    );
}

const Home = () => {
  return (<div className="listing">
    <Gpu src={gpu1_deets.img} name={gpu1_deets.name} amt={gpu1_deets.price}/>
    <Gpu src={gpu2_deets.img} name={gpu2_deets.name} amt={gpu2_deets.price}/>
  </div>

  );

};

ReactDom.render(<Home/>,document.getElementById('root'));
