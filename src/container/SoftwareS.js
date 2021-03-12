import React from "react";
import Footer from "../component/footer";
import ss from "../assets/img/ss.svg"
function SoftwareS(){
    return(
    <div className="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div className="pb-5 container">
<div className=" row">
<div className="col-lg-6">
<img id="optionalstuff" className="w3-animate-left img-fluid col-sm-0" src={ss} style={{height:"400px",paddingTop:"",paddingLeft:""}} />
</div>
<div className="col-lg-6 pt-5">
    <h1 style={{fontFamily:"'Rubik', sans-serif",color:"#3F3F3F"}}>Software Services</h1>
    <p style={{color:"#8F8F8F"}}>We are a leading software development company that offers top-rated Software Development Services due
to our vast experience, team of skilled professionals, key business insights, and a dedicated working process.

Our diverse software
development services
Software consulting
Our software experts will evaluate, analyze, explore, and provide you with wide range of solutions.
Custom software development
Our strong technical team is strongly focused on developing customer oriented software solutions.
Enterprise software solution
We provide you with enterprise software solutions that meet all your business needs.
Offshore development center
Collaborate with us for top-notch and innovative software solutions at the most economical rates.
Software integration
We provide you with data integration, reliable API, and micro services to improve your software.
Maintenance &amp; support
We provide 24*7 maintenance &amp; support service for all our clients to resolve all the issues in real-time.
</p>

</div>
</div>
</div>
{/* <Footer/> */}
</div>
    );
}
export default SoftwareS;