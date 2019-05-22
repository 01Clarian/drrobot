import React from 'react';
import {Route, Switch } from 'react-router-dom';
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
            <Switch>
                <Route exact path='/drrobot3/' component={Home} />
                <Route  path='/drrobot3/maindirectory' component={MainDirectory} />
                <Route  path='/drrobot3/contact' component={Contact} />
                <Route  path='/drrobot3/about' component={About} />
                <Route  path='/drrobot3/deeptherapy' component={DeepTherapy} />
                <Route component={NoMatch} />
            </Switch>
        <Footer />
    </div>
);

export default Routes