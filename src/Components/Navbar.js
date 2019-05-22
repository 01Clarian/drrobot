import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return ( 
        <div className="changeIt">  
        <div className="fixed-top">
            <div className="SocialBar"  >
                <ul>
                    <li>
                        <a rel="tooltip noopener noreferrer" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/" target="_blank">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a rel="tooltip noopener noreferrer" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/Yosei.Gorazu" target="_blank">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                    </li>
                    <li>
                        <a rel="tooltip noopener noreferrer" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/clariannorth/?hl=en" target="_blank">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a rel="tooltip noopener noreferrer" title="Star on GitHub" data-placement="bottom" href="https://github.com/01Clarian" target="_blank">
                            <i className="fa fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <nav className="navbar navbar-dark sticky-top navbar-expand-md bg-info"  color-on-scroll="300">
                <div className="container">
                    <div className="navbar-translate">
                        <Link className="navbar-brand" to="/">Home</Link>
                        <Link className="navbar-brand" to="/About">About</Link>
                        <Link className="navbar-brand" to="/mainDirectory">Directory</Link>
                        <Link className="navbar-brand" to="/DeepTherapy">Deep Therapy</Link>
                        <Link className="navbar-brand" to="/Contact">Contact</Link>
                        
                    </div>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            </li>
                        </ul>
                        
                    </div> 
                </div>
            </nav>
                
        </div>
        </div>        
      );
    }
export default Navbar