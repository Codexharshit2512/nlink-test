import React ,{useState} from "react";
import Footer from "../component/footer";
import ss from "../assets/img/ss.svg";
import service from "../api/service"
import {useHistory} from 'react-router-dom'

function Template(){
 
    let location = useHistory();
    console.log(location);
    const [service1 , setService1] = useState([]);
    service
    .get('/9')
    .then(response=>{
        setService1(response.data);
    });
    return(
    <div className="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div className="pb-5 container">
<div className=" row">
<div className="col-lg-6">
<img id="optionalstuff" className="w3-animate-left img-fluid col-sm-0" src={"https://dynamo.jugadu.in"+service1.banner_url} style={{height:"400px",paddingTop:"",paddingLeft:""}} />
</div>
<div className="col-lg-6 pt-5">
    <h1 style={{fontFamily:"'Rubik', sans-serif",color:"#3F3F3F"}}>{service1.title}</h1>
    {/* <p style={{color:"#8F8F8F"}}></p> */} <div style={{color:"#8F8F8F"}}>{service1.description}</div>

</div>
</div>
</div>
{/* <Footer/> */}
</div>
    );
}
export default Template;