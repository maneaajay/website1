import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Blogapi from './Api/Blogapi'
const Blog = () => {

    const [blogData, setBlogData] = useState(Blogapi);
    console.log(blogData);


    return (
        <>
            <div className="container blog" id="blog">
                <h1 className="display-2 card-heading">BLOG'S</h1>
                <div className="row">
                    {blogData.map((curElem) => {
                        const { id, b_img, b_title, b_description } = curElem;
                        return (
                            <>
                                <div className="col-sm">
                                    <div className="card" >
                                        <img className="card-img-top" src={b_img} alt="Card image cap" height="250px" />
                                        <div className="card-body">
                                            <h5 className="card-title">{b_title} </h5><br />
                                            <p className="card-text">{b_description}  </p>
                                            <NavLink to="/blog" className="btn btn-blog1">Continue Reading</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}


                </div>
                <div className="text-center ">
                    <NavLink to="/blog" className="btn btn-blog mx-auto">Read More Blog</NavLink>
                </div>
            </div>
        </>
    )
}

export default Blog
