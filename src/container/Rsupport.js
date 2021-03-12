import React from "react";
import Footer from "../component/footer";
import support from "../assets/img/remote.jpg";
function Rsupport(){
    return(
    <div className="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div className="pb-5 container">
<div className=" row">
<div className="col-lg-6">
<img id="optionalstuff" className="w3-animate-left img-fluid col-sm-0" src={support} style={{height:"400px",paddingTop:"80px",paddingLeft:""}} />
</div>
<div className="col-lg-6 pt-5">
    <h1 style={{fontFamily:"'Rubik', sans-serif",color:"#3F3F3F"}}>Remote Support</h1>
    <p style={{color:"#8F8F8F"}}>Remote IT Support Services We Offer
Nlink can give you services of a remote helpdesk, which will function as an efficient virtual IT support team. You
can hire our remote technical support services for your internal IT needs or as a third-party IT support service for
your clients. Here is a list of our offshore remote support services -
<br></br>
1. Incident-based Support
<li> Microsoft Windows Server</li>
<li>Microsoft Small Business Server</li>
<li> Microsoft Exchange Server</li>
2. Managed Monitoring Support Services
<li>Network Monitoring</li>
<li>Boot Up Issues</li>
<li>Server Monitoring</li>
<li>Event Log Monitoring</li>
<li>Website Monitoring</li>
<li>Online Connectivity Issues</li>
<li>Browser Connection issues</li>
<li> Data Retrieval</li>
<li> Adware/Spyware/Malware Removal </li>
<li>Virus Removal</li>
<li> Slow System Issues</li>
<li> System Formatting Issues</li>
<li> Performance Tuning Issues</li>
3. Setup and Installations
<li> Desktop and Laptop</li>
<li> Microsoft Windows/Exchange Server, AD Domain Environment, SBS</li>
<li>Desktop Application Software</li>
<li>Microsoft DHS/DHCP Server and Configuration</li>
<li>Printers and Peripherals</li>
<li> Group Policy Configuration and Server Migration</li>
4. Managed Services Support
<li> Help Desk Services</li>
<li> Break Fix Support</li>
<li> Proactive Management</li>
<li>Consulting</li>
<li>Server Support</li>
<li>Server Deployment</li> </p>

</div>
</div>
</div>
{/* <Footer/> */}
</div>
    );
}
export default Rsupport;