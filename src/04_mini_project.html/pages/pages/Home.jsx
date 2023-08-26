import React from 'react';
import { NavLink } from 'react-router-dom';


function Home() {
   return (
      <div>
         <div className="main-banner" id="top">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="left-content">
                        <div className="thumb">
                           <div className="inner-content">
                              <h4>We Are Hexashop</h4>
                              <span>Awesome, clean &amp; creative design Eyewears</span>

                              <div className="main-border-button">
                                 <a href="#">Purchase Now!</a>
                              </div>
                           </div>
                           <img src="assets/images/left-banner-image.jpg" alt />
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="right-content">
                        <div className="row">
                           <div className="col-lg-6">
                              <div className="right-first-image">
                                 <div className="thumb">
                                    <div className="inner-content">
                                       <h4>Women</h4>
                                       <span>Best Eyewears For Women</span>
                                    </div>
                                    <div className="hover-content">
                                       <div className="inner">
                                          <h4>Women</h4>
                                          <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                          <div className="main-border-button">
                                          <NavLink to="/women">Discover More</NavLink>

                                          </div>
                                       </div>
                                    </div>
                                    <img src="assets/images/baner-right-image-01.jpg" />
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="right-first-image">
                                 <div className="thumb">
                                    <div className="inner-content">
                                       <h4>Men</h4>
                                       <span>Best Eyewears For Men</span>
                                    </div>
                                    <div className="hover-content">
                                       <div className="inner">
                                          <h4>Men</h4>
                                          <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                          <div className="main-border-button">
                                          <NavLink to="/men">Discover More</NavLink>

                                          </div>
                                       </div>
                                    </div>
                                    <img src="assets/images/baner-right-image-02.jpg" />
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="right-first-image">
                                 <div className="thumb">
                                    <div className="inner-content">
                                       <h4>Kids</h4>
                                       <span>Best Eyewears For Kids</span>
                                    </div>
                                    <div className="hover-content">
                                       <div className="inner">
                                          <h4>Kids</h4>
                                          <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                          <div className="main-border-button">
                                             <NavLink to="/kid">Discover More</NavLink>
                                          </div>
                                       </div>
                                    </div>
                                    <img src="assets/images/baner-right-image-03.jpg" />
                                    {/* <img src="assets/images/baner-right-image-03.jpg" /> */}
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="right-first-image">
                                 <div className="thumb">
                                    <div className="inner-content">
                                       <h4>Accessories</h4>
                                       <span>Best Eyewear Accessories</span>
                                    </div>
                                    <div className="hover-content">
                                       <div className="inner">
                                          <h4>Accessories</h4>
                                          <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                          <div className="main-border-button">
                                             <a href="#">Discover More</a>
                                          </div>
                                       </div>
                                    </div>
                                    <img src="assets/images/baner-right-image-04.jpg" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <section className="section" id="explore">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="left-content">
                        <h2>Explore Our Products</h2>
                        <span>You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish.</span>
                        <div className="quote">
                           <i className="fa fa-quote-left" /><p>You are not allowed to redistribute this template ZIP file on any other website.</p>
                        </div>
                        <p>There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.</p>
                        <p>If this template is beneficial for your website or business, please kindly <a rel="nofollow" href="https://paypal.me/templatemo" target="_blank">support us</a> a little via PayPal. Please also tell your friends about our great website. Thank you.</p>
                        <div className="main-border-button">
                           <a href="products.html">Discover More</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="right-content">
                        <div className="row">
                           <div className="col-lg-6">
                              <div className="leather">
                                 <h4>Leather Bags</h4>
                                 <span>Latest Collection</span>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="first-image">
                                 <img src="assets/images/explore-image-01.jpg" alt />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="second-image">
                                 <img src="assets/images/explore-image-02.jpg" alt />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="types">
                                 <h4>Different Types</h4>
                                 <span>Over 304 Products</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* ***** Explore Area Ends ***** */}
         {/* ***** Social Area Starts ***** */}
         <section className="section" id="social">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="section-heading">
                        <h2>Social Media</h2>
                        <span>Details to details is what makes Hexashop different from the other themes.</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="row images">
                  <div className="col-2">
                     <div className="thumb">
                        <div className="icon">
                           <a href="http://instagram.com">
                              <h6>Fashion</h6>
                              <i className="fa fa-instagram" />
                           </a>
                        </div>
                        <img src="assets/images/instagram-01.jpg" alt />
                     </div>
                  </div>
                  <div className="col-2">
                     <div className="thumb">
                        <div className="icon">
                           <a href="http://instagram.com">
                              <h6>New</h6>
                              <i className="fa fa-instagram" />
                           </a>
                        </div>
                        <img src="assets/images/instagram-02.jpg" alt />
                     </div>
                  </div>
                  <div className="col-2">
                     <div className="thumb">
                        <div className="icon">
                           <a href="http://instagram.com">
                              <h6>Brand</h6>
                              <i className="fa fa-instagram" />
                           </a>
                        </div>
                        <img src="assets/images/instagram-03.jpg" alt />
                     </div>
                  </div>
                  <div className="col-2">
                     <div className="thumb">
                        <div className="icon">
                           <a href="http://instagram.com">
                              <h6>Makeup</h6>
                              <i className="fa fa-instagram" />
                           </a>
                        </div>
                        <img src="assets/images/instagram-04.jpg" alt />
                     </div>
                  </div>
                  <div className="col-2">
                     <div className="thumb">
                        <div className="icon">
                           <a href="http://instagram.com">
                              <h6>Leather</h6>
                              <i className="fa fa-instagram" />
                           </a>
                        </div>
                        <img src="assets/images/instagram-05.jpg" alt />
                     </div>
                  </div>
                  <div className="col-2">
                     <div className="thumb">
                        <div className="icon">
                           <a href="http://instagram.com">
                              <h6>Bag</h6>
                              <i className="fa fa-instagram" />
                           </a>
                        </div>
                        <img src="assets/images/instagram-06.jpg" alt />
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* ***** Social Area Ends ***** */}
         {/* ***** Subscribe Area Starts ***** */}
         <div className="subscribe">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="section-heading">
                        <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                        <span>Details to details is what makes Hexashop different from the other themes.</span>
                     </div>
                     <form id="subscribe" action method="get">
                        <div className="row">
                           <div className="col-lg-5">
                              <fieldset>
                                 <input name="name" type="text" id="name" placeholder="Your Name" required />
                              </fieldset>
                           </div>
                           <div className="col-lg-5">
                              <fieldset>
                                 <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required />
                              </fieldset>
                           </div>
                           <div className="col-lg-2">
                              <fieldset>
                                 <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane" /></button>
                              </fieldset>
                           </div>
                        </div>
                     </form>
                  </div>
                  <div className="col-lg-4">
                     <div className="row">
                        <div className="col-6">
                           <ul>
                              <li>Store Location:<br /><span>Sunny Isles Beach, FL 33160, United States</span></li>
                              <li>Phone:<br /><span>010-020-0340</span></li>
                              <li>Office Location:<br /><span>North Miami Beach</span></li>
                           </ul>
                        </div>
                        <div className="col-6">
                           <ul>
                              <li>Work Hours:<br /><span>07:30 AM - 9:30 PM Daily</span></li>
                              <li>Email:<br /><span>info@company.com</span></li>
                              <li>Social Media:<br /><span><a href="#">Facebook</a>, <a href="#">Instagram</a>, <a href="#">Behance</a>, <a href="#">Linkedin</a></span></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   );
}

export default Home;