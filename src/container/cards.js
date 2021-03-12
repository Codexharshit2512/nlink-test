import React from "react";
import next from "../assets/img/next.svg";
import * as ReactBootStrap from "react-bootstrap";
import {Link} from "react-router-dom";
import services from "../api/services";
function Cards(props){

  
  
    return <ReactBootStrap.Card className="pt-5 justify-content-center text-center col-lg-4 boxy" style={{maxWidth:"100%", width: '20rem',height:"400px",border:"0" }} >
  <Link to={"/"+props.link} style={{textDecoration:"none"}}>  <ReactBootStrap.Card.Img className="container" style={{width:"100px",height:"100px"}} variant="top" src={`https://dynamo.jugadu.in${props.img}`} />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title> <h4 style={{color: "#2b4b80"}}>{props.title} </h4></ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text style={{color:"black"}}>
        {props.description}
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <Link to={props.link} href={props.link} className="pt-3" style={{color:"#7b40c0",textDecoration:"none"}}><img src={next} style={{height:"20px",textDecoration:"none"}} /> Learn More</Link>
    </Link>
  </ReactBootStrap.Card>
  
}
export default Cards;