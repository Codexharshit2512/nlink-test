import React from "react";
import Footer from "../component/footer";
import webdev from "../assets/img/webdev.jpg";
function Webd(){
    return(
    <div className="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div className="pb-5 container">
<div className=" row">
<div className="col-lg-6">
<img id="optionalstuff" className="w3-animate-left img-fluid col-sm-0" src={webdev} style={{height:"400px",paddingTop:"",paddingLeft:""}} />
</div>
<div className="col-lg-6 pt-5">
    <h1 style={{fontFamily:"'Rubik', sans-serif",color:"#3F3F3F"}}>Web Development</h1>
    <p style={{color:"#8F8F8F"}}>Our website developers provide expert web application development and web design services to our clients.
Appnovation offers a variety of website design and development services, from creating mobile web
development solutions and responsive website designs, to building custom e-commerce and intranet
experiences using the latest and proven web technologies.
Websites today are much more than more information providers. Your website can be a powerful business
tool, rich in functionalities.
Nlink provide comprehensive custom website development solutions with the more advantages.</p>

</div>
</div>
</div>
{/* <Footer/> */}
</div>
    );
}
export default Webd;