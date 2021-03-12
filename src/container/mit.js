import React from "react";
import Footer from "../component/footer";
import mit from "../assets/img/mit.png";
function Mit(){
    return(
    <div className="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div className="pb-5 container">
<div className=" row">
<div className="col-lg-6">
<img id="optionalstuff" className="w3-animate-left img-fluid col-sm-0" src={mit} style={{height:"400px",paddingTop:"",paddingLeft:""}} />
</div>
<div className="col-lg-6 pt-5">
    <h1 style={{fontFamily:"'Rubik', sans-serif",color:"#3F3F3F"}}>Managed IT Services</h1>
    <p style={{color:"#8F8F8F"}}>Managed IT services allow businesses to delegate their IT operations to an expert third-party organization that
specializes in handling these responsibilities. The remote monitoring and management of servers, desktops and
mobile devices is a common type of managed IT service. Remote monitoring and management is often a basic,
foundational service for a managed services provider.
We provide technical services for analyzing and assessment of Web Development, Networking, Hardware
Requirement etc. to all aspiring corporate sector.
Our IT Assessment Services provide you with the information you need to understand your environment, make
informed decisions, and set strategies.</p>

</div>
</div>
</div>
{/* <Footer/> */}
</div>
   );   
}
export default Mit;