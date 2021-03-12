import React from "react";
import Footer from "../component/footer";
import cyb from "../assets/img/cyb.jpg";
function Cyber(){
    return(
    <div className="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div className="pb-5 container">
<div className=" row">
<div className="col-lg-6">
<img id="optionalstuff" className="w3-animate-left img-fluid col-sm-0" src={cyb} style={{height:"400px",paddingTop:"",paddingLeft:""}} />
</div>
<div className="col-lg-6 pt-5">
    <h1 style={{fontFamily:"'Rubik', sans-serif",color:"#3F3F3F"}}>Cyber Secuity Services</h1>
    <p style={{color:"#8F8F8F"}}>Nlink is a cyber-security services provider offering a range of solutions related to the protection of
computer systems within an organization. We cover computer security, and IT security. Cyber
Security is a constantly evolving industry created in response to hacking, viruses, and other threats
to personal and business data. Nlink cyber security services will provide your business with
expertise along the three stages of business cyber security protection services: assessment,
security program implementation, and governance. We implement external and internal cyber
security solutions with advance IT security software and hardware solutions. Nlink as a number of
cyber security tools to ensure end to end cyber security protection. We also provide IT
outsourcing services that can address your company’s information technology needs.</p>

</div>
</div>
</div>
{/* <Footer/> */}
</div>
    );
}
export default Cyber;