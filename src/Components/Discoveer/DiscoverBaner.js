import React from 'react';
import { Link } from "react-router-dom";


const DiscoverBaner = (props) => {
    return (
        <div>
            <div className="discover_section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="discover_img">
                                <img src={props.discover_img} alt="about img" className="discover_img img-fluid" />
                            </div>
                        </div>
                        <div className="c0l-12 col-md-6 discover_text about_text">
                                <span className="heading_title">{props.title}</span>
                                <h3>
                                    <span>Login your </span> 
                                    <span>Account any time</span>
                                </h3>
                                <p>{props.details}</p>
                                <Link to={props.visit} className="sign_btn btN nav_link" >{props.discover_btn}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscoverBaner;
