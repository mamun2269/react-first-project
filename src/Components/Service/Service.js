import React, {useState} from 'react';
import ServiceData from './ServiceData';

const Service = () => {
    const [ data, setData]= useState(ServiceData);

    return (
        <div>
            <div className="service_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-5">
                            <div className="service_top section_top">
                                <h2>Our Services</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                    {
                        data.map((elements)=>{
                            const{ id, img, title, details}= elements; 
                            return(
                                <>
                                    <div className="col-12 col-md-3 text-center" key={id}>
                                        <div className="service_card">
                                            <div className="service_frame">
                                                <img src={img} alt="" className="service_img"/>
                                            </div>
                                            <h5>{title}</h5>
                                            <p>{details}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;
