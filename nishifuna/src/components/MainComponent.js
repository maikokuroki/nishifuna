import React from 'react';

import MainBody from './MainBody';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


function Main() {
    
    return(
        <React.Fragment>
            <Header />
            <MainBody />
            <Footer />
        </React.Fragment>
    );
}

export default Main;