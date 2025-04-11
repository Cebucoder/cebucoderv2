import React from 'react'
import './Home.css'
import Main from '../../components/MainCon/main'
import Navbar from '../../components/Navbar/Navbar'


const Home = () => {
    return (
        <div className='home_con'>
            <Navbar></Navbar>
            <Main></Main>
        </div>
    )
}

export default Home
