import React from 'react';
import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <>
            <div className="hero_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 hero_content text-center">
                            <h2>Virtual Banking Made Easy</h2>
                            <p>Lorem, ipsum dolor sit amet Doloribus tempore dolor?</p>
                            <Link to="/signin" className="sign_btn btN nav_link" >Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
