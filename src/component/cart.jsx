import React from 'react';
import {products} from './../apiData.js';
import {Link} from 'react-router';
import CreateContext from '../context/contextGlobal.jsx';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
const Cart = () => {
const {savedProductData}=useContext(CreateContext);

  return <div style={{padding:'2px'}}>
  <h1 style={{textAlign:'center'}}>Your cart items </h1>
    <div class="row" style={{padding:'45px'}}>
{
savedProductData.map((pro)=>(
<div class="card" style={{width: "155px",margin:"5px"}}>
  <img src={pro.img} height="140px" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{pro.name}</h5>
    <a href="#" class="btn btn-primary">view</a>
  </div>
</div>
  ))
}

</div>
  </div>;
};

export default Cart;
