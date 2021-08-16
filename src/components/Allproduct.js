import React from 'react'
import  Sidebar  from './Sidebar'
import './Allproduct.css'

function Allproduct() {


  return (
    <React.Fragment>
      <div className="container"  style={{marginLeft:'150px'}}>
        <div className="ui grid container">
        <div class="ui six column grid">
            <div class="row">
            <div class="column">
                <Sidebar></Sidebar>
            </div>
            </div>
      
        </div>
      
       </div>

<div>
  <div class="ui four column grid" style={{marginLeft:'50px'}}>
    <div class="row">
  <div class="coulmn">
  <h3>All Products </h3>
  </div>
  <div class="column">
  <button class="ui positive button" style={{borderRadius:15/2}}>+Add New Product</button>
  </div>
      <div class="Right floated right aligned column">Sort by<br></br>Product no.</div>
      <div class="Right floated right aligned column">Filter by<br></br>Purchased</div>
    </div>
  </div>
   
</div>
<table class="ui small table">
  <thead>
    <tr><th>no.</th>
    <th>name</th>
    <th>categories</th>
    <th>views</th>
    <th>purchased</th>
    <th>cost/kg</th>
    <th>in stock</th>
    <th></th>
  </tr></thead>
  <tbody> </tbody>
 
</table>
    </div>
     
    </React.Fragment>

  )
}

export default Allproduct
