import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


function Womens() {
  const redirect = useNavigate();

  useEffect(() => {
    fetchData();

  }, []);

  const [data, setdata] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:3000/product/?prod_cat=${"Womens eyewear"}`);
    setdata(data);
  };
  return (
    <div>
      {/* ***** Main Banner Area Start ***** */}
      <div className="page-heading ph-women" id="top" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>Check Women's Products</h2>
                <span>Awesome &amp; Stylish eyewears by Hexashop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Main Banner Area End ***** */}
      {/* ***** Products Area Starts ***** */}
      <section className="section" id="products">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our Latest Products</h2>
                <span>Check out all of our products.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {
              data.map((value, index) => (
                <div key={index} className="col-lg-4" >
                  <div className="item" onClick={(e) => redirect(`/view_prod/${value.id}`)} >
                    <div className="thumb" style={{ overflow: 'hidden' }}>
                      <div className="hover-content">
                        <ul>
                          <li><a href="javascript:void(0)"><i className="fa fa-eye" /></a></li>
                          <li><a href="javascript:void(0)"><i className="fa fa-star" /></a></li>
                          <li><a href="javascript:void(0)"><i className="fa fa-shopping-cart" /></a></li>
                        </ul>
                      </div>
                      <img src={value.img_link} alt />
                    </div>
                    <div className="down-content">
                      <h4>{value.name}</h4>
                      <span>{value.price}</span>
                      <ul className="stars">
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                      </ul>
                    </div>
                  </div>
                </div>

              ))
            }
          </div>
        </div>
      </section>
    </div>

  );
}

export default Womens;