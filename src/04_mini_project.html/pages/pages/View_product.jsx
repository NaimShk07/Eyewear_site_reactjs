import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const View_product = () => {
   const { id } = useParams();
   useEffect(() => {
      fetchdata();
   }, []);

   const [data, setdata] = useState({});

   const fetchdata = async () => {
      const { data } = await axios.get(`http://localhost:3000/product/${id}`);
      // console.log(data);
      setdata(data);
   };


   return (
      <div>
         {/* <div style={{backgroundColor:"rgb(42 42 42 / 97%)"}}> */}
         <div className="container d-flex justify-content-center " style={{ marginTop: "150px" }}>
            <div className="row" style={{ color: "white", minHeight: "70vh", maxWidth: "85%", boxShadow: "0 0 0 10px black" }}>
               <div className='col-lg-6  d-flex align-items-center'  >
                  <img src={data.img_link} width={"100%"} alt="" />
               </div>
               <div className='col-lg-6 p-4' style={{ backgroundColor: "black" }}>

                  <h1 style={{ fontSize: "50px", fontWeight: "800" }}>{data.name}</h1>
                  <h4 style={{ textTransform: "uppercase", fontWeight: "700",color:"gray" }}>{data.prod_cat}</h4>
                  <p style={{ color: "white" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat blanditiis deserunt at. Aspernatur in, eligendi cumque id commodi vero illum, dolore accusamus veritatis eius porro possimus a aut laboriosam atque asperiores consectetur, deserunt magnam pariatur! Quo, ipsam consequatur sunt, placeat exercitationem cum non voluptas alias consectetur facilis laboriosam veniam consequuntur mollitia necessitatibus autem officiis illo. Unde voluptate incidunt porro cum rerum qui? </p>

                  <div className="colors p-5 d-flex align-items-center" style={{ fontSize: "20px" }} >
                     Available Colors : 
                     {/* <div style={{ height: '20px', width: "20px", backgroundColor: "black", marginLeft: "10px", borderRadius: "50%", outline: "2px solid white" }}></div> */}
                     <div style={{ height: '20px', width: "20px", backgroundColor: "orange", marginLeft: "10px", borderRadius: "50%" }}></div>
                     <div style={{ height: '20px', width: "20px", backgroundColor: "white", marginLeft: "10px", borderRadius: "50%" }}></div>
                     <div style={{ height: '20px', width: "20px", backgroundColor: "skyblue", marginLeft: "10px", borderRadius: "50%" }}></div>
                     <div style={{ height: '20px', width: "20px", backgroundColor: "red", marginLeft: "10px", borderRadius: "50%" }}></div>
                  </div>

                  <div className='d-flex align-item-center justify-content-between mt-2 p-2'>
                     <h1 style={{ fontSize: "55px", fontWeight: "800", display: "inline",color:"lightgray" }}>{data.price}</h1>
                     <button className='btn ' style={{ backgroundColor: "white", borderRadius: "50px", fontSize: "25px", fontWeight: "800", padding: "0px 20px", color: "black" }}>BUY NOW</button>

                  </div>

               </div>

            </div>

         </div>
         {/* </div> */}

      </div>
   );
};

export default View_product;