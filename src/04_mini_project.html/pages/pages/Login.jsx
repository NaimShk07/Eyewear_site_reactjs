import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';







function Login() {
   const redirect = useNavigate(); //use Navigate

   const [formvalue, setFormvalue] = useState({
      id: "",
      email: "",
      password: ""
   });

   const onChangeHandle = (e) => {
      setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
      console.log(formvalue);

   };

   let validation = () => { //checking every field
      var result = true;

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

   const onsubmit = async (e) => {
      e.preventDefault();

      if (validation()) {
         const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`, formvalue);
         // console.log(res.data);
         if (res.data.length > 0) {
            if (res.data[0].password == formvalue.password) {
               localStorage.setItem('user', res.data[0].name);
               localStorage.setItem('userid', res.data[0].id);


               toast.success('login succes');
               setFormvalue({ ...formvalue, email: "", password: "" });
               return redirect('/');

            }
            else {
               toast.error('password not found');
               return false;
            }


         } else {
            toast.error('email not found');
            return false;
         }

      }


   };
   return (
      <div>

         <div>
            <section className="vh-100" style={{ backgroundColor: '#eee' }}>
               <div className="container h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                     <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: 25 }}>
                           <div className="card-body p-md-5">
                              <div className="row justify-content-center">

                                 <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                                 </div>
                                 <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login Account</p>
                                    <form className="mx-1 mx-md-4" method='post' action='#'>

                                       <div className="d-flex flex-row align-items-center mb-4">
                                          <i className="fa fa-envelope fa-lg mb-4 mr-2 fa-fw" />
                                          <div className="form-outline flex-fill mb-0">
                                             {/* ################################################ */}
                                             <input type="email" name='email' value={formvalue.email} onChange={onChangeHandle} id="form3Example3c" className="form-control" />
                                             <label className="form-label" htmlFor="form3Example3c">Email</label>
                                          </div>
                                       </div>
                                       <div className="d-flex flex-row align-items-center mb-4">
                                          <i className="fa fa-lock fa-lg mb-4 mr-2  mt-0 fa-fw" />
                                          <div className="form-outline flex-fill mb-0">
                                             {/* ################################################ */}
                                             <input type="password" name='password' value={formvalue.password} onChange={onChangeHandle} id="form3Example4c" className="form-control" />
                                             <label className="form-label" htmlFor="form3Example4c">Password</label>
                                          </div>
                                       </div>

                                       <div className="form-check d-flex justify-content-center mb-5">
                                          {/* <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3c" /> */}
                                          <label className="form-check-label" htmlFor="form2Example3">
                                             Dont have account? <NavLink to="/signup">Sign up</NavLink>
                                          </label>
                                       </div>
                                       <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                          {/* <button type="button" className="btn btn-primary btn-lg">Login</button> */}
                                          <button type="button" className="btn btn-primary btn-lg" onClick={onsubmit} >Login</button>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>



      </div>
   );
}

export default Login;