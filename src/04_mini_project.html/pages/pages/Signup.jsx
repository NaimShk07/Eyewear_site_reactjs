import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';


function Signup() {
   const [formvalue, setFormvalue] = useState({ //use state variable
      name: "",
      email: "",
      password: "",
      mobile: ""
   });

   const onChangeHandle = (e) => { // get the written data
      // setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
      setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });

      console.log(formvalue);
   };

   let validation = () => { //checking every field
      var result = true;
      if (formvalue.name == "" || formvalue.name == null) {
         result = false; // further code should not run
         toast.error("Name field is required");
         return false; // for reload
      }

      if (formvalue.email == "" || formvalue.email == null) {
         result = false;
         toast.error("email field is required");
         return false;
      }

      if (formvalue.password == "" || formvalue.password == null) {
         result = false;
         toast.error("password field is required");
         return false;
      }
      return result;
   };

   const onsubmit = async (e) => { //on click send the data to the server
      e.preventDefault();
      if (validation()) {
         const res = await axios.post("http://localhost:3000/user", formvalue);
         if (res.status == 201) {
            setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "" });
            toast.success("Insert Success");
            return false;
         }
      }
   };


   return (
      <div>
         <section className="vh-100 mt-5" style={{ backgroundColor: '#eee' }}>
            <div className="container h-100">
               <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-lg-12 col-xl-11">
                     <div className="card text-black" style={{ borderRadius: 25 }}>
                        <div className="card-body p-md-3">
                           <div className="row justify-content-center">
                              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                 <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4">Sign up</p>
                                 <form className="mx-1 mx-md-4" method='post'>
                                    <div className="d-flex flex-row align-items-center mb-2">
                                       <i className="fa fa-user fa-lg mb-4 mr-2 fa-fw" />
                                       <div className="form-outline flex-fill mb-0">
                                          {/* ############################################################ */}
                                          <input type="text" id="" name='name' onChange={onChangeHandle} value={formvalue.name} className="form-control" />
                                          <label className="form-label" htmlFor="form3Example1c"> Name</label>
                                       </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-2">
                                       <i className="fa fa-phone fa-lg mb-4 mr-2 fa-fw" />
                                       <div className="form-outline flex-fill mb-0">
                                          {/* ############################################################ */}
                                          <input type="text" id="" name='mobile' onChange={onChangeHandle} value={formvalue.mobile} className="form-control" />
                                          <label className="form-label" htmlFor="form3Example1c"> Mobile</label>
                                       </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-2">
                                       <i className="fa fa-envelope fa-lg mb-4 mr-2 fa-fw" />
                                       <div className="form-outline flex-fill mb-0">
                                          {/* ############################################################ */}
                                          <input type="email" id="form3Example3c" name='email' value={formvalue.email} onChange={onChangeHandle} className="form-control" />
                                          <label className="form-label" htmlFor="form3Example3c"> Email</label>
                                       </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-2">
                                       <i className="fa fa-lock fa-lg mb-4 mr-2 fa-fw" />
                                       <div className="form-outline flex-fill mb-0">
                                          {/* ############################################################ */}
                                          <input type="password" id="form3Example4c" name='password' value={formvalue.password} onChange={onChangeHandle} className="form-control" />
                                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                                       </div>
                                    </div>
                                    {/* <div className="d-flex flex-row align-items-center mb-2">
                                       <i className="fa fa-key fa-lg mb-4 mr-2 fa-fw" />
                                       <div className="form-outline flex-fill mb-0">
                                          <input type="password" id="form3Example4cd" className="form-control" />
                                          <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                       </div>
                                    </div> */}
                                    <div className="form-check d-flex justify-content-center mb-5">
                                       {/* <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3c" /> */}
                                       <label className="form-check-label" htmlFor="form2Example3">
                                          Already have an account? <NavLink to="/">Log in</NavLink>
                                       </label>
                                    </div>
                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                       <button type="button" className="btn btn-primary btn-lg" onClick={onsubmit}>Sign up</button>
                                    </div>
                                 </form>
                              </div>
                              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>

   );
}

export default Signup;