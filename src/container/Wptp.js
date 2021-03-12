import React from "react";
import Footer from "../component/footer";
import ss from "../assets/img/ss.svg";

function Wptp(){
    return(
    <div className="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div className="pb-5 container">
<div className=" row">
<div className="col-lg-6">
<img id="optionalstuff" className="w3-animate-left img-fluid col-sm-0" src={ss} style={{height:"400px",paddingTop:"",paddingLeft:""}} />
</div>
<div className="col-lg-6 pt-5">
    <h1 style={{fontFamily:"'Rubik', sans-serif",color:"#3F3F3F"}}>Wireless PTP</h1>
    <p style={{color:"#8F8F8F"}}>Backhaul solutions for service provider and enterprises
Smart and Simple Point-to-Point solution
We provide comprehensive line of point-to-point solutions that enable efficient, reliable and secure
communications for high-bandwidth applications. Its long range and high-capacity support makes it to be the
preferred cost-effective solution for building-to-building connectivity and backhaul services, eliminating the
necessity for expensive leased lines over wire line infrastructures. Our product offerings are enhanced with self-
provisioning, self-healing and self-protection capabilities for maximum ease of use and efficiency.</p>

</div>
</div>
</div>
{/* <Footer/> */}
</div>
    );
}
export default Wptp;