// export default Footer;
import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Business from "../container/business";
import "../CSS/Footer.css";
// import Logo from "./Logo_holder.png";

function Footer() {
    return (
        <div style={{ backgroundColor: "#f5f5f5" }} className="Footer  pt-5">
            <Router>
                <div className="row justify-content-center">
                    <h2 style={{ fontFamily: "'Lexend Giga', sans-serif", fontWeight: "550" }}>NLINK</h2>
                </div>

                <div>
                    <p style={{ color: "grey" }} className="text-center">Gali No. 34, Karol Bagh</p>
                    <p style={{ color: "grey" }} className="text-center">New Delhi, Delhi-110005 India</p>
                </div>


                <div className="row pt-5">
                    <div className="col-lg-2">

                        <ul style={{ color: "#4D67AE", fontSize: "15px", fontWeight: "500" }}>Quick Links
                            <Link path="/business"> <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Products</li></Link>
                            <Link to="/business"> <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Services</li></Link>
                            <Link to="/"><li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>About Us</li></Link>
                            <Link to="/"> <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Blog</li></Link>
                            <Link to="/"> <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Our Team</li> </Link>
                        </ul>

                    </div>

                    <div className="col-lg-3 pt-2">

                        <ul style={{ color: "#4D67AE", fontSize: "15px", fontWeight: "500" }}>Support
                            <Link to="/"> <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Privacy Policy</li></Link>
                            <Link to="/network"> <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>FAQs</li></Link>
                            <Link to="/ourteam"><li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Terms & Conditions</li></Link>
                            <Link to="/"> <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Sitemap</li></Link>
                            <Link to="/contact"> <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Contact</li> </Link>
                        </ul>

                    </div>
                    <div className="col-lg-3">

                    </div>
                    <div className=" pt-2 col-lg-2">

                        <ul style={{ color: "#4D67AE", fontSize: "15px", fontWeight: "500" }}> Contact & Social
                            <Link to="/"> <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Contact Us</li> </Link>
                            <Link to="/"> <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Email</li> </Link>
                            <Link to="/">  <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Facebook</li> </Link>
                            <Link to="/">   <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Instagram</li></Link>
                            <Link to="/">   <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Twitter</li></Link>
                        </ul>

                    </div>
                    <div className="col-lg-2">

                        <ul style={{ color: "#4D67AE", fontSize: "15px", fontWeight: "500" }}>Services
                            <Link to="/"><li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Service 1</li></Link>
                            <Link to="/"> <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Service 2</li></Link>
                            <Link to="/">  <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Service 3</li></Link>
                            <Link to="/"><li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Service 4</li></Link>
                            <Link to="/"> <li className="pt-3" style={{ listStyle: "none", color: "#868c98", fontWeight: "300" }}>Service 5</li></Link>
                        </ul>

                    </div>

                </div>
                <p style={{ color: "grey", fontWeight: "100" }} className="pt-5 text-center">Designed and developed by <a style={{ color: "black" }} href="https://www.jugadu.in/">Jugadu.in</a></p>
            </Router>
        </div>
    )
}
export default Footer;