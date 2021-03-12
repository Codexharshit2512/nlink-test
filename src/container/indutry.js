import React,{useState} from "react";
import Cards from "./cards"
import industries from "../api/industries";
function Industries(){
    
     const [industry , setIndustry] =  useState([]); 
     
     industries
     .get('/')
     .then(response=>{
        setIndustry(response.data);
   
})
             
    function handler(Card){
        // return <Cards link={Card.link} img={Card.image} title={Card.title} description={Card.description} />
         return <Cards title={Card.title} img={Card.icon_url}/>
    }
return<> <div className="container pt-5">
        <div className="row d-flex justify-content-center">
                    <div className="col-lg-12 justify-content-center">
                        <div className="section-tittle text-center">
                            <h2 className="Heading" style={{fontFamily:"Lexend Giga",paddingTop:"100px",color: "#2b4b80",fontWeight:"700"}}>INDUSTRIES</h2>
                        <div className="justify-content-center row pt-5 pb-5 business">
                        <div className="row justify-content-center">
                        {industry.map(handler)}
                        </div>
                        </div>
                        
                        </div>
                    </div>
                </div> 
</div>
{/* <Footer/> */}
</>
}

export default Industries;