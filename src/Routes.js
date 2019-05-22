import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home';
import About from './Components/About';
import NoMatch from './404';
import './Routes.css'
import MainDirectory from './Containers/mainDirectory.js'
import Contact from './Components/Contact'
import DeepTherapy from './Containers/DeepTherapy'

const Routes = () => (
    <div>
        <Navbar />
        <BrowserRouter>    
            <Switch>
                <Route exact path='/' component={Home} />
                <Route  path='/maindirectory' component={MainDirectory} />
                <Route  path='/contact' component={Contact} />
                <Route  path='/about' component={About} />
                <Route  path='/deeptherapy' component={DeepTherapy} />
                <Route component={NoMatch} />
            </Switch>
            </BrowserRouter>
        <Footer />
    </div>
);

export default Routes