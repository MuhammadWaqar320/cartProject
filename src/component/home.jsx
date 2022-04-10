import React from 'react';
import { useContext } from 'react';
import CreateContext from '../context/contextGlobal.jsx';
import {products} from './../apiData.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
const {noOfCartItem,setNoOfCartItem,savedProductData,dispatchProductData}=useContext(CreateContext);
useEffect(()=>{

console.log(JSON.stringify(savedProductData))
},[savedProductData])
return <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Cart App </a>
    <form class="d-flex">
        <Link to="/cart" class="btn success" style={{background:'black',color:'white'}} type="submit">cart items ({noOfCartItem})</Link>
      </form>

  </div>
</nav>



{/* products */}
<div class="row" style={{padding:'30px'}}>
{
  products.map((pro)=>(
<div class="card" style={{width: "260px",margin:"5px"}}>
  <img src={pro.pic} height="200px" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{pro.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button onClick={()=>{setNoOfCartItem(noOfCartItem+1);dispatchProductData({type:"add",payload:{id:pro.id,name:pro.name,img:pro.pic}})}} class="btn btn-primary">add to cart</button>
  </div>
</div>
  ))
}

</div>

  </div>;
};

export default Home;