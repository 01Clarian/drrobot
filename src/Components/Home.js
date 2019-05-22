import React from 'react'
import './Home.css'

export default () => (
//section home page
<div>
    
<div className="section">
  
  <div className="site-blocks-cover overlay"  data-aos="fade" data-stellar-background-ratio="0.5" id="section-home">
    <div className="container newFont">
      <div className="row align-items-center justify-content-center text-center">
        <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
          <h1 className=" font-weight-light text-uppercase font-weight-bold" style={{opacity:'0.8'}} data-aos="fade-up"><span className="highlight2">A</span><span className="highlight2">I</span> <span className="highlight">R</span>OBOT <span className="highlight4">INTERFACE</span></h1>
          <p className="mb-5 text-white font-weight-bold" data-aos="fade-up" style={{opacity:'0.4'}} data-aos-delay="100">Dr. <span style={{fontSize:'12px'}}> R</span>obot</p>
          <p data-aos="fade-up" data-aos-delay="200"><a href="/mainDirectory" className="btn btn-info py-3 px-8 mb-5 text-white"><span style={{opactiy:'0.3'}}>Start Program </span></a></p>
        </div>
      </div>
    </div>
  </div>  
  
</div>

  <div className="site-section bg-image back3"  id="section-about"  > 
  
    <div className="container">
      <div className="row mb-5">
        
        <div className="col-md-5 ml-auto mb-5 order-md-2" data-aos="fade-up" data-aos-delay="100">
          <img src="images/img_3.jpg" alt="Image45" className="img-fluid rounded">
       </img>
        </div>
        <div className="col-md-6 order-md-1" data-aos="fade-up">
          <div className="text-left pb-1 border-primary mb-4">
            <h2 className="text-primary">About Doctor Robot</h2>
          </div>
          <div className=" font-weight-bold">
          <p>This is a prototype exercise for Zero To Mastery Section APIs
                with JS inspiration from Voice coding challenge. 
              It incorporates a combination of server access from IBM WATSON with React smart components for 
              an interactive web app experience.</p>
          <p className="mb-5">Challenge includes utilizing libraries Paper Kit 2, React, React Route Dom, Express, and Bootstrap as well
          as node server IBM Cloud access API and implementation.</p>
          
          <ul className="ul-check list-unstyled success">
            <li>React / Libraries</li>
            <li>API</li>
            <li>Dynamic Functionality</li>
          </ul>
          </div>
        </div>
        </div>
      </div>
    </div>

  

  </div>

);