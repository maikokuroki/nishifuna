import React from 'react';
import { Router,} from 'react-router'
import EatDrink from './EatDrinkComponent';
import MainBody from './MainBody';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

function Main() {
    return(
        <div>
            <Header />
            <MainBody />
            <Footer />
        </div>
    );
}

export default Main;