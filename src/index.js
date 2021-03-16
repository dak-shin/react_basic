import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

import {gpu_deets} from './gpu'; // importing a variable 
import GPU_INFO from './render'; // using default export 
  
const gpu_listing = (list) => {

  return (<div className="listing">
    {list.map(({id ,name, img, price}) => <GPU_INFO key={id} src={img} name={name} amt={price}>Out of stock</GPU_INFO>)}
    </div>);
}

const Home = () => {
  return (gpu_listing(gpu_deets));
};

ReactDom.render(<Home/>,document.getElementById('root'));
