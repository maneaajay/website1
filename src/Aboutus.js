import React from 'react'
import { NavLink } from 'react-router-dom'
const Aboutus = () => {

  return (
    <>
      <div className="about-page" id="about">
        <div className="background-img col-12 mx-auto bg-img">
          <div className="container col-10 mx-auto py-5">
            <div className="row  align-items-center py-5">
              <div className="col-lg-12 mx-auto d-lg-block">
                <h1 className="display-2 heading-1">ABOUT COMPANY</h1>
                <p className="main-hero-para">We are a private limited company providing product development,
                  consulting and training services, especially related to ‘Analytics’. We conduct corporate
                  training and public programs. We are a Specialist Analytics service provider who helps
                  businesses plan for strategic growth. We have extensive technology and consulting experience
                  with a strong focus on service delivery. Our core leadership team is an expert in analytics, technology,
                  and consulting with more than 10 years of experience. We have a team of highly skilled and trained
                  data scientists with extensive knowledge of statistical and mathematical modeling techniques. (Ph.D., Masters in Statistics, Mathematics, B.E.)</p>
              </div>
              {/* <div className="col-lg-6 d-none d-lg-block"><img src="./images/office1.jpg" alt="" className=" about-img" /></div> */}
            </div>
          </div>
          {/* <div className=" ">
         <NavLink to="/casestudy" className="btn btn-blog mx-auto">Read More</NavLink>
        </div>
        <div className="">
         <NavLink to="/casestudy" className="btn btn-blog mx-auto">Read More</NavLink>
        </div>
        <div className="">
         <NavLink to="/casestudy" className="btn btn-blog mx-auto">Read More</NavLink>
        </div> */}

        </div>

      </div>
      <div className="container industries">
        <h1 className="display-2 card-heading" > INDUSTRIES</h1>
        <div className="row">
          <div className="col-sm">
          
              <img className="card-img-top " src="./images/bank.jpg" alt="Card image cap" height="250px" width="200px"/>
            
            <h5 className="card-title">BANKING</h5>
          </div>
          <div className="col-sm">
          
              <img className="card-img-top" src="./images/financial.jpg" alt="Card image cap" height="250px" width="200px" />
            
            <h5 className="card-title">FINANCIAL SERVICE</h5>
          </div>
          <div className="col-sm">
          
              <img className="card-img-top" src="./images/helth.jpg" alt="Card image cap" height="250px" width="200px" />
            
            <h5 className="card-title">HEALTH CARE</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          
              <img className="card-img-top" src="./images/tax.jpeg" alt="Card image cap" height="250px" width="200px"/>
            
            <h5 className="card-title">TAX & ACCOUNTING</h5>
          </div>
          <div className="col-sm">
          
              <img className="card-img-top" src="./images/retail.jpg" alt="Card image cap" height="250px" width="200px" />
            
            <h5 className="card-title">RETAIL</h5>
          </div>
          <div className="col-sm">
          
              <img className="card-img-top" src="./images/legal.jpg" alt="Card image cap" height="250px" width="200px" />
            
            <h5 className="card-title">LEGAL</h5>
          </div>
        </div>
      </div>


    </>
  )
}

export default Aboutus
