import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Workapi from './Api/Workapi';
const Howitwork = () => {
    const [workData, setWorkData] = useState(Workapi);
    console.log(workData);
    return (
        <>
            <section className="bg-img3" id="service">
                <div className="work-container container">
                    <h1 className="main-heading text-center">GET STARTED YOUR PROJECT NOW...</h1>
                    <div className="row ">
                        {workData.map((curElem) => {
                            const { id, logo, title, info } = curElem;
                            return (
                                <>
                                    <div className="col-12 col-lg-4 text-center work-container-subdiv" >
                                   
                                        <i className={`fontawesome-style ${logo}`}></i>
                                       
                                        <h2 className="sub-heading">{title}</h2>
                                        <p className="main-hero-para w-100">{info}</p>
                                    
                                    </div>
                                    
                                </>
                            );
                        })}

                    </div>
                </div>
                {/* <div className="text-center ">
                    <NavLink to="/service" className="btn btn-blog mx-auto"> More Services </NavLink>
                </div> */}
            </section>
        </>
    )
}

export default Howitwork
