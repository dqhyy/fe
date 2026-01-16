import React from 'react'
import Banner from '../components/Banner'
import WhyUs from '../components/WhyUs'
import Certifi from '../components/Certifi'
import Partner from '../components/Partner'

const Home = () => {
    return (
        <div className='bg-bgcolor'>
            <Banner />
            <WhyUs />
            <Certifi />
            <Partner/>
        </div>
    )
}

export default Home