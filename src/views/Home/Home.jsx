import React from 'react';
import HomeImage from '../../components/HomeImage/HomeImage';
import Header from '../Header/Header';

export default function Home() {
    return (
        <div>
            <Header />
            Home: Short blurb and a few photos.
            <HomeImage />
        </div>
    );
}
