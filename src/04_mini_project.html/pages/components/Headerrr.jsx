// import { Logout } from '@mui/icons-material';
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// localStorage.getItem('user') ? code1 : code2

function Headerrr() {
	const redirect = useNavigate();

	const logout = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("userid");
		toast.success("logout success");
		return redirect("/");
	};
	return (
		<div>
			<header className="header-area header-sticky">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<nav className="main-nav">
								{/* ***** Logo Start ***** */}
								<a href="index.html" className="logo">
									<img src="assets/images/logo.png" />
								</a>
								{/* ***** Logo End ***** */}
								{/* ***** Menu Start ***** */}
								<ul className="nav">
									<li className=" ">
										<NavLink to="/">Home</NavLink>
									</li>
									{/* <li className=" ">
										<NavLink to="/men">Men's</NavLink>
									</li>
									<li className=" ">
										<NavLink to="/women">Women's</NavLink>
									</li>
									<li className=" ">
										<NavLink to="/kid">Kid's</NavLink>
									</li> */}
									<li className="submenu">
										<a href="javascript:;">Products</a>
										<ul>
											<li className=" ">
												<NavLink to="/men">Men</NavLink>
											</li>
											<li className=" ">
												<NavLink to="/women">Women</NavLink>
											</li>
											<li className=" ">
												<NavLink to="/kid">Kid</NavLink>
											</li>
											<li className=" ">
												<NavLink to="/allprod">All product</NavLink>
											</li>
										</ul>
									</li>
									<li className="submenu">
										<a href="javascript:;">Pages</a>
										<ul>
											<li className=" ">
												<NavLink to="/contact">Contact Us</NavLink>
											</li>
											<li className=" ">
												<NavLink to="/about">About Us</NavLink>
											</li>
											<li className=" ">
												<NavLink to="/blog">Blog</NavLink>
											</li>
										</ul>
									</li>

									{(() => {
										if (localStorage.getItem("user")) {
											return (
												<li className="submenu ">
													<a href="javascript:;">
														{localStorage.getItem("user")}{" "}
														<i
															class="fa fa-user"
															style={{ fontSize: "20px" }}
														></i>
													</a>
													<ul style={{ right: "0px" }}>
														<li style={{ cursor: "pointer" }}>
															<NavLink to="/profile">Profile</NavLink>
														</li>
														<li style={{ cursor: "pointer" }} onClick={logout}>
															<NavLink>Log out</NavLink>
														</li>
													</ul>
												</li>
											);
										} else {
											return (
												<li className="submenu ">
													<a href="javascript:;">
														<i
															class="fa fa-user"
															style={{ fontSize: "20px" }}
														></i>
													</a>
													<ul style={{ right: 0 }}>
														<li className=" ">
															<NavLink to="/login">Login </NavLink>
														</li>
														<li className=" ">
															<NavLink to="/signup">Sign up </NavLink>
														</li>
													</ul>
												</li>
											);
										}
									})()}
								</ul>
								<a className="menu-trigger">
									<span>Menu</span>
								</a>
								{/* ***** Menu End ***** */}
							</nav>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Headerrr;
