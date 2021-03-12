import React from "react";
import Footer from "../component/footer";
import ai from "../assets/img/abtt.png";
function AutoAI(){
    return(
    <div className="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div className="pb-5 container">
<div className=" row">
<div className="col-lg-6">
<img id="optionalstuff" className="w3-animate-left img-fluid col-sm-0" src={ai} style={{height:"400px",paddingTop:"",paddingLeft:""}} />
</div>
<div className="col-lg-6 pt-5">
    <h1 style={{fontFamily:"'Rubik', sans-serif",color:"#3F3F3F"}}>Automation and AI</h1>
    <p style={{color:"#8F8F8F"}}>Leveraging the advantages of AI, we offer a variety of services that help us deliver innovative, unique, and
effective solutions, which further guarantee superior customer service. Our team of expert analysts,
consultants and engineers perform predictive analytics, data visualization and promote deep learning, which
helps our clients in decision making process.
The Nlink team has a deep understanding in three core areas of AI services – Machine Learning &amp; Pattern
Recognition, Natural Language Processing and Computer Vision &amp; Image Processing.
We apply these capabilities to develop effective solutions for strategic business challenges and opportunities. Our
work leverages years of academic and industrial research experience and our on-demand R&amp;D model (Nlink Labs)
can be used to augment your current capacity, or help you expand quickly into an entirely new field</p>

</div>
</div>
</div>
{/* <Footer/> */}
</div>
    );
}
export default AutoAI;