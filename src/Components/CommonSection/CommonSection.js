import React from 'react';
import { Link } from "react-router-dom";


const CommonSection = (props) => {
    return (
        <div>
            <div className="common_section signup_section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="common_text">
                                <span className="heading_title">{props.title}</span>
                                <h3>
                                    <span>{props.t1}</span> 
                                    <span>{props.t2}</span>
                                    <span>{props.t3}</span>
                                </h3>
                                <p>{props.details}</p>
                                <Link to={props.visit} className="sign_btn btN nav_link" >{props.about_btn}</Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="common_frame">
                                <img src={props.about_img} alt="about img" className="common_img img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default CommonSection;
