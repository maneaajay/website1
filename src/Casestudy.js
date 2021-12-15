import React,{useState} from 'react'
import Caseapi from './Api/Caseapi'
import { NavLink } from 'react-router-dom';

const Casestudy = () => {

    const [caseData, setCaseData] = useState(Caseapi);
    console.log(caseData);
 
    return (
        <>
         <div className="case" id="case">
         <h1 className="display-2 card-heading">CASE STUDY</h1>
         {caseData.map((curElem)=>{
             const{id, b_img, b_title, b_description} =curElem;
             return(
              <>
              <div className="card col-10 mx-auto">
            <img className="card-img-top" src={b_img} alt="Card image cap" height="300px" />
                <div className="card-body">
                    <h5 className="card-title">{b_title}</h5>
                    <p className="card-text">{b_description}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
              </>
             );
             
         })}
           
         <div className="text-center ">
         <NavLink to="/casestudy" className="btn btn-blog mx-auto">Read More</NavLink>
        </div>

        </div>
        </>
    )
}

export default Casestudy
