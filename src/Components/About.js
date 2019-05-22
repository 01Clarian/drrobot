import React from 'react'
import './Home.css'

export default () => (
//section home page
<div>
    
<div className="page-header section">
<div className="moving-clouds"></div>
      <div className="site-section bg-image overlay back4" id="section-how-it-works">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center border-primary">
            										<h2 className="h1-responsive font-weight-bold text-center my-4" style={{  visibility: 'hidden'}}>a</h2>

            <h2 className="font-weight-light text-primary" data-aos="fade">How It Works</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
            <div className="how-it-work-item">
              <span className="number">1</span>
              <div className="how-it-work-body">
                <h2>IBM Watson Cloud</h2>
                <ul className="ul-check list-unstyled success text-white font-weight-light text-uppercase font-weight-bold">
                  <li className="text-white">API Access</li>
                  <li className="text-white">Node Server Setup</li>
                  <li className="text-white">Fetch Data</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
            <div className="how-it-work-item">
              <span className="number">2</span>
              <div className="how-it-work-body">
                <h2>UI</h2>
                <ul className="ul-check list-unstyled success text-white font-weight-light text-uppercase font-weight-bold">
                  <li className="text-white">Route Library</li>
                  <li className="text-white">Responsive Navigation</li>
                  <li className="text-white">PK2 Beta Bootstrap Compatibility</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300">
            <div className="how-it-work-item">
              <span className="number">3</span>
              <div className="how-it-work-body">
                <h2>Smart Dynamic</h2>
                <ul className="ul-check list-unstyled success text-white font-weight-light text-uppercase font-weight-bold">
                  <li className="text-white">Robot Voice Recognition</li>
                  <li className="text-white">Interactive Capacity</li>
                  <li className="text-white">Duplex + Language Build </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
      </div>
    </div>


);