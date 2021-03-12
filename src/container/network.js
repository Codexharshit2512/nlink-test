import React from "react";
import Footer from "../component/footer";
import network from "../assets/img/network.png"
function Network(){
    return(
    <div className="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div className="pb-5 container">
<div className=" row">
<div className="col-lg-6">
<img id="optionalstuff" className="w3-animate-left img-fluid col-sm-0" src={network} style={{height:"400px",paddingTop:"",paddingLeft:""}} />
</div>
<div className="col-lg-6 pt-5">
    <h1 style={{fontFamily:"'Rubik', sans-serif",color:"#3F3F3F"}}>Network</h1>
    <p style={{color:"#8F8F8F"}}>We utilize a systematic approach to ensure proper installation and performance, saving your company time and
money. As part of our network support services we provide 24x7x365 network monitoring, which often reveals
threats before they attack, allowing our expertly trained technicians to resolve the issue before it ever affects
your end users.
NLINK provides a complete suite of network support options to ensure that your investment is constantly
protected, optimized, and improved</p>

</div>
</div>
</div>
{/* <Footer/> */}
</div>
   );   
}
export default Network;