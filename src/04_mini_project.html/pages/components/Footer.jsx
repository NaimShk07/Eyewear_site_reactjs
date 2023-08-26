import React from 'react';

function Footer() {
   return (
      <div>
         <footer>
            <div className="container">
               <div className="row">
                  <div className="col-lg-3">
                     <div className="first-item">
                        <div className="logo">
                           <img src="assets/images/white-logo.png" alt="hexashop ecommerce templatemo" />
                        </div>
                        <ul>
                           <li><a href="#">16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</a></li>
                           <li><a href="#">hexashop@company.com</a></li>
                           <li><a href="#">010-020-0340</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <h4>Shopping &amp; Categories</h4>
                     <ul>
                        <li><a href="#">Men’s Shopping</a></li>
                        <li><a href="#">Women’s Shopping</a></li>
                        <li><a href="#">Kid's Shopping</a></li>
                     </ul>
                  </div>
                  <div className="col-lg-3">
                     <h4>Useful Links</h4>
                     <ul>
                        <li><a href="#">Homepage</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Contact Us</a></li>
                     </ul>
                  </div>
                  <div className="col-lg-3">
                     <h4>Help &amp; Information</h4>
                     <ul>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">FAQ's</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Tracking ID</a></li>
                     </ul>
                  </div>
                  <div className="col-lg-12">
                     <div className="under-footer">
                        <p>Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.
                           <br />Design: <a href="https://templatemo.com" target="_parent" title="free css templates">TemplateMo</a></p>
                        <ul>
                           <li><a href="#"><i className="fa fa-facebook" /></a></li>
                           <li><a href="#"><i className="fa fa-twitter" /></a></li>
                           <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                           <li><a href="#"><i className="fa fa-behance" /></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </footer>

      </div>
   );
}

export default Footer;