import React from 'react';
import { Route, Switch,} from 'react-router'
import Eat from './EatComponent';
import MainBody from './MainBody';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Venue from './PlayComponent';
import Router from './RouterComponent';

function Main() {
    
    return(
        <React.Fragment>

            <Header />
            
            <MainBody />
            <Router />
            
            
            
            <Footer />

            
        </React.Fragment>
    );
}

export default Main;