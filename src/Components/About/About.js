import React from 'react';
import CommonSection from '../CommonSection/CommonSection';
import about from '../../images/about.png';




const About = () => {

    return (
        <div>
            <CommonSection
                title='premium bank'
                t1='Unlimated'
                t2='Transactions with'
                t3='zero fees'
                details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ullam? Blanditiis, obcaecati. sapiente blanditiis quis alias aut voluptas, earum quibusdam dolor! Molestias, rem in!'
                about_btn='Get Started'
                visit='/contact'
                about_img={about}
            />
        </div>
    )
}

export default About;
