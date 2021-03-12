import React from "react";
import Footer from "../component/footer";
import surv from "../assets/img/surv.jpg";
function Survellance(){
    return(
    <div className="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div className="pb-5 container">
<div className=" row">
<div className="col-lg-6">
<img id="optionalstuff" className="w3-animate-left img-fluid col-sm-0" src={surv} style={{height:"400px",paddingTop:"90px",paddingLeft:""}} />
</div>
<div className="col-lg-6 pt-5">
    <h1 style={{fontFamily:"'Rubik', sans-serif",color:"#3F3F3F"}}>Surveillance Solutions</h1>
    <p style={{color:"#8F8F8F"}}>24×7 security monitoring with video surveillance solutions
 IP-based (digital) security system is a powerful monitoring tool for security personnel. With our digital cabling,
switching and data storage systems, we offer significant cost and manageability advantages over traditional
analogue CCTV systems. We deploy IP camera based video solutions for a real-time security of your assets,
employees, and information.
Video Surveillance solutions aim to provide world-class surveillance solutions that can address the security
concerns of small, medium and large enterprises. Being an established solution provider catering to a wide range
of customers, we understand the unique needs of different industries. Distinct from offering generic solutions,
Nlink emphasizes on providing industry-specific solutions to its customers. Whether you manage 100+ locations or
one, our effective Centralized IP Video Surveillance system can capture and document security events from endless
locations.
Nlink brings you centralized security with IP Video Surveillance solutions that can manage multiple devices located
at multiple locations. Moreover, these solutions can be integrated with Intelligent Video Analytics, Access Control,
and Fire and Intrusion alarm functionalities as well. This facilitates our customers to gain greater control over their
systems, thus enhancing output by manifolds.
Centralized IP based video surveillance system such as Nlink not only integrates all functions of Video Surveillance
but also enhances the effectiveness of these functions, ensuring better security, safety, visibility and control.
All in all, Nlink Video Surveillance is a combination of best in class IP Cameras, Network Video Recorders and Video
Management Software designed specifically for all kinds of Modern organizations.</p>

</div>
</div>
</div>
{/* <Footer/> */}
</div>
    );
}
export default Survellance;