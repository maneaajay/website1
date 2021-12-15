import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
const Navbar = () => {



    const [show, setShow] = useState(false);
    return (
        <>
            <section className="navbar-bg " >
                <nav className="navbar navbar-expand-lg navbar-light  ">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/"> <img className="logo"
                            src="./images/logo.png" /> iAnalyst</NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"
                            onClick={() => setShow(!show)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li className="nav-item">

                                    <Link exact activeClass="active_class" aria-current="page" to="home" spy={true} smooth={true} offset={-70} duration={500} className="nav-link ">Home</Link>
                                </li>
                                <li className="nav-item">

                                    <Link exact activeClass="active_class" to="service" spy={true} smooth={true} offset={-70} duration={500} className="nav-link ">Services</Link>
                                </li>
                                <li className="nav-item">

                                    <Link exact activeClass="active_class" to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-link " >About</Link>
                                </li>
                                <li className="nav-item">
                                <NavLink exact activeClass="active_class" to="blog" spy={true} smooth={true} offset={-70} duration={500} className="nav-link " >Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                <Link exact activeClass="active_class" to="case" spy={true} smooth={true} offset={-70} duration={500} className="nav-link " >Case Study</Link>
                                </li>
                                <li className="nav-item">
                                <Link exact activeClass="active_class" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link " >Contact</Link>
                                </li>
                            </ul>

                        </div>

                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar
