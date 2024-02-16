import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({ text, link, btnText }) => {
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
        </Link>
    </div>
}

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-sung text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, Im clara
            <br />
            A humain being from wonderland
        </h1>
    ),
    2: (
        <InfoBox
        />
    ),
    3: (
        <InfoBox
            text="Eating now"
            link="/about"
            btnText="Learn more"
        />
    ),
    4: (
        <InfoBox
            text="Sleeping now"
            link="/about"
            btnText="Learn more"
        />
    )
}


const HomeInfo = ({ currentStage }) => {
    // 1
    while (currentStage >=4.35 && currentStage <= 5.45)
        return (
            <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                We are
                <span className='font-semibold mx-2 text-white'>Kitch Corner</span>
                <br />
                A brand new cooking game
            </h1>
        );
    // 2
    while (currentStage >= 2.5 && currentStage < 4.25) {
        return (
            <div className='info-box'>
                <p className='font-regular sm:text-xl text-center'>
                    Our game is made by GDScript and C# <br />
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    Learn more
                </Link>
            </div>
        );
    }
    // 3
    while (currentStage >= 0.1 && currentStage < 2.4) {
        return (
            <div className='info-box'>
                <p className='font-regular sm:text-xl text-center'>
                    We are a team of 2 developpers who are passionate of the original game
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn' style={{width: '100%'}}>
                    Know more about us
                </Link>
            </div>
        );
    }
    // 4
    while (currentStage >= 5.45) {
        return (
            <div className='info-box'>
                <p className='font-regular sm:text-xl text-center'>
                    Interested in our projet or have some advices?
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    Contact us
                </Link>
            </div>
        );
    }

    return null;
}

export default HomeInfo