import React from 'react'
import { NavLink} from 'react-router-dom';
import Sidebar from './Sidebar';


function Card() {
    return (
        <React.Fragment>
        <div className="container"  style={{marginLeft:'200px'}}>
        <div className="ui grid container">
        <div class="ui six column grid">
            <div class="row">
            <div class="column">
                <Sidebar></Sidebar>
        </div>
        </div>
        <div class="row">
        <div class="column">
        <div class = "ui card" style={{width:'150px', height:'200px', borderRadius:25/2, backgroundColor:'#F3F7EC', marginLeft:'10px'}}>
        <NavLink className="nav-link" activeClassName="nav-link active" to="/product">
          <div class="card" >
          <div class="content">
            <div class="header">
            <i class="table huge icon" style={{color:'#6CA501'}}></i>
            </div>
            <div class="meta">All Product</div>
            <div class="description">
            <p> count</p>
           </div>
          </div>
          </div>
          </NavLink>
  </div>
  </div>
            <div class="column">
            <div class = "ui card" style={{width:'150px', height:'200px', borderRadius:25/2, backgroundColor:'#F3F7EC', marginLeft:'10px'}} >
          <div class="card" >
          <div class="content">
            <div class="header" ><i class="list layout huge icon" style={{color:'#6CA501'}}></i></div>
            <div class="meta">All Categories</div>
            <div class="description">
            <p> count</p>
          </div>
          </div>
  </div>
  </div>
            </div>
            <div class="column">
            <div class = "ui card" style={{width:'150px', height:'200px', borderRadius:25/2, backgroundColor:'#F3F7EC', marginLeft:'10px'}} >
     <div class="card">
    <div class="content">
      <div class="header"><i class="announcement huge icon" style={{color:'#6CA501'}}></i></div>
      <div class="meta">All Banners</div>
      <div class="description">
       <p> count</p>
      </div>
    </div>
  </div>
  </div>
            </div>
            <div class="column">
            <div class = "ui card" style={{width:'150px', height:'200px', borderRadius:25/2, backgroundColor:'#F3F7EC', marginLeft:'10px'}}>
     <div class="card">
    <div class="content">
      <div class="header"><i class="grid layout huge icon" style={{color:'#6CA501'}}></i></div>
      <div class="meta">All Rows</div>
      <div class="description">
       <p> count</p>
      </div>
    </div>
  </div>
  </div>
            </div>
            </div>
            <div class="row">
            <div class="column">
            <div class = "ui card" style={{width:'150px', height:'200px', borderRadius:25/2, backgroundColor:'#F3F7EC', marginLeft:'10px'}}>
     <div class="card">
    <div class="content">
      <div class="header"><i class="book huge icon" style={{color:'#6CA501'}}></i></div>
      <div class="meta">All Recipes</div>
      <div class="description">
       <p> count</p>
      </div>
    </div>
  </div>
  </div>
            </div>
            <div class="column">
            <div class = "ui card" style={{width:'150px', height:'200px', borderRadius:25/2, backgroundColor:'#F3F7EC', marginLeft:'10px'}} >
     <div class="card">
    <div class="content">
      <div class="header"><i class="sticky note huge icon" style={{color:'#6CA501'}}></i></div>
      <div class="meta">All Testimonials</div>
      <div class="description">
       <p> count</p>
      </div>
    </div>
  </div>
  </div>
            </div>
            <div class="column">
            <div class = "ui card" style={{width:'150px', height:'200px', borderRadius:25/2, backgroundColor:'#F3F7EC', marginLeft:'10px'}} >
     <div class="card">
    <div class="content">
      <div class="header"><i class="file alternate huge icon" style={{color:'#6CA501'}}></i></div>
      <div class="meta">All Blogs</div>
      <div class="description">
       <p> count</p>
      </div>
    </div>
  </div>
  </div>
            </div>
            <div class="column">
            <div class = "ui card" style={{width:'150px', height:'200px', borderRadius:25/2, backgroundColor:'#F3F7EC', marginLeft:'10px'}} >
     <div class="card">
    <div class="content">
      <div class="header"><i class="rupee huge icon" style={{color:'#6CA501'}}></i></div>
      <div class="meta">All Promo Codes</div>
      <div class="description">
       <p> count</p>
      </div>
    </div>
  </div>
  </div>
            </div>
          </div>
        </div>
</div>
</div>
</React.Fragment>
    )
}

export default Card
