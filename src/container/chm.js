import React from "react";
import Footer from "../component/footer";
import hardware from "../assets/img/hardware.jpg"
function Chm(){
    return(
    <div className="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div className="pb-5 container">
<div className=" row">
<div className="col-lg-6">
<img id="optionalstuff" className="w3-animate-left img-fluid col-sm-0" src={hardware} style={{height:"400px",paddingTop:"",paddingLeft:""}} />
</div>
<div className="col-lg-6 pt-5">
    <h1 style={{fontFamily:"'Rubik', sans-serif",color:"#3F3F3F"}}>Computer Hardware Maintenance</h1>
    <p style={{color:"#8F8F8F"}}>
<li> On Going Maintenance:</li> Upon request we will structure an ongoing maintenance program for
any hardware installed from different contractors. We further provide emergency services to
minimize hardware downtime with our fast responsive service. All calls are returned within 24
hours and our qualified staff is available on call.
<li> Out-call repair service:</li> We carry out on site repair for both hardware and software problems at
client premises.
<li>Carry-in-repair services:</li> We accept carry in repair items at our workshop representing a cross
section of brand manufacturers.
<li>Equipment Return Shipment:</li> When equipment needs to be returned to the manufacturer for
repair, we can arrange for the shipment whether the equipment is in or out of warranty.
problems you are having with your equipment.</p>

</div>
</div>
</div>
{/* <Footer/> */}
</div>
    );
}
export default Chm;