import React from 'react';
import Header from './Header';
import Title from './Title'

function MainPageLayout({children}) {
    return (
        <div>
            <Title title="Box Office" subtitle="Are you looking for a movie or actor" />
            <Header/>
            {children}
        </div>
    );
}

export default MainPageLayout;