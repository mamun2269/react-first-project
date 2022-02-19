import React from 'react';
import CommonSection from '../CommonSection/CommonSection';
import service_2 from '../../images/service_2.png';


const SignUp = () => {
    return (
        <>
            <CommonSection
                title='Join with us'
                t1='Creating an'
                t2='account is'
                t3='extremely easy'
                details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ullam? Blanditiis, obcaecati. sapiente blanditiis quis alias aut voluptas, earum quibusdam dolor! Molestias, rem in!'
                about_btn='Start Now'
                visit='/contact'
                about_img={service_2}
            />
        </>
    )
}

export default SignUp;
