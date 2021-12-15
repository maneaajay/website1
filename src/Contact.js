import React, { useState } from 'react'
import ContactService from './service/Contact.service';



const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [comment, setComment] = useState('');

    const saveContact = (e) => {
        
         e.preventDefault();
        
        const contacts = { firstName, lastName, email, contactNumber, comment };
        ContactService.create(contacts)
            .then(responce => {
                console.log('Contact form submit successfully', responce.data);
                alert("Contact form submit successfully");
            })
            .catch(error => {
                console.log('somthing went wrong', error);
            });
    }
    return (
        <>
          <form >
            <div className="container contact  mx-auto " id="contact">
                <h1 className="display-2 card-heading">CONTACT</h1>
                <div className="row ">

                    <div className="col-md-3">
                        <div className="contact-info">
                            <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
                            <h2>Contact Us</h2>
                            <h4>We would love to hear from you !</h4>
                        </div>
                    </div>
                    <div className="col-md-7 ">
                        <div className="contact-form">
                            <div className="form-group">
                                <label className="control-label col-sm-2" for="fname">First Name:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="firstName"
                                        placeholder="Enter First Name" value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" for="lname">Last Name:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" for="email">Email:</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" for="email">Contact Number:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="contactNumber" placeholder="Enter Contact Number" value={contactNumber}
                                        onChange={(e) => setContactNumber(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" for="comment">Comment:</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" rows="5" id="comment" value={comment}
                                        onChange={(e) => setComment(e.target.value)} ></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-blog1" onClick={(e) => saveContact(e)}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </>
    )
}

export default Contact
