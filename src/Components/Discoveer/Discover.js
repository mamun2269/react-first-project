import React from 'react';
import DiscoverBaner from './DiscoverBaner';
import discover from '../../images/discover.png';

const Discover = () => {
    return (
        <div>
            <DiscoverBaner
                title='Unlimated Access'
                details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ullam? Blanditiis, obcaecati. sapiente blanditiis quis alias aut voluptas, earum quibusdam dolor! Molestias, rem in!'
                discover_btn='Learn More'
                visit='/contact'
                discover_img={discover}
            />
        </div>
    )
}

export default Discover;
