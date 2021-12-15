import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <>
            <header id="home" >
                <section className="container main-hero-container " >
                 <div className="row">
                  <div className="col-12 col-lg-8 header-right-side d-flex 
                  justify-content-center flex-column  hero-1">
                  <h1 className="display-1 home-font-style">
                  "Predicting the future isn’t magic, it’s artificial intelligence."
                  </h1>

                 
                   <Link exact activeClass="active_class" to="service" spy={true} smooth={true} offset={-70} duration={500} className="btn btn-style mx-auto" >Learn More</Link>

                  </div>
                  
                 </div>
                </section>
            </header>
        </>
    )
}

export default Header
