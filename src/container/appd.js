import React from "react";
import appd from "../assets/img/appdev.jpg"
import Footer from "../component/footer";
function Appd(){


    
    return(
    <div className="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div className="pb-5 container">
<div className=" row">
<div className="col-lg-6">
<img id="optionalstuff" className="w3-animate-left img-fluid col-sm-0" src={appd} style={{height:"400px",paddingTop:"",paddingLeft:""}} />
</div>
<div className="col-lg-6 pt-5">
    <h1 style={{fontFamily:"'Rubik', sans-serif",color:"#3F3F3F"}}>APP Development</h1>
    <p style={{color:"#8F8F8F"}}>We provide full-cycle mobile app development services. This includes expert business analysis, design and
development of your mobile application from idea to launch, integrating the new product into your
infrastructure and providing further optimization and scale-up on demand.
We have a long history of providing mobile software development services to large enterprises, startups,
organizations and other technology companies.</p>

</div>
</div>
</div>
{/* <Footer/> */}
</div>
    );
}
export default Appd;