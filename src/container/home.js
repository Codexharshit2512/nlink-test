import React , { useEffect,useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import GetStarted from "./getStarted";
import AboutUs from "./abt";
import ContactUs from "./contact";
import Header from "./Header";
import Mit from "./mit";
import It from "./it";
import Network from "./network";
import Appd from "./appd";
import Webd from "./webd";
import Chm from "./chm";
import Wptp from "./Wptp";
import SoftwareS from "./SoftwareS";
import Survellance from "./Survellance";
import Rsupport from "./Rsupport";
import Cyber from "./cyber";
import AutoAI from "./AutoAI";
import Login from "./login";
import LoginComponent from "./login2";
import Business from "./business";
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Footer from '../component/footer'
import Industries from './indutry';
import services from '../api/services';
import Template from './Template';
// import { Footer } from "react-bootstrap/lib/Modal";

const Home = () => {

  services
    .get('/')
    .then(response=>{
       setId(response.data.id);
  
})
  const [id, setId] = useState([])

    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);

     
  

    return(
        <>
           {/* {id.map(id=>{return(
             <Switch>
               <Route path={"/"+id} component={Template}/>
             </Switch>
           )})} */}
           
           
           
           <BrowserRouter>
      <Header />
      
        <Switch>
          <Route exact path="/">
            <GetStarted />
          </Route>
          <Route path="/abt">
            <AboutUs />
            </Route>
            <Route path="/services" component={Business}>
            {/* <Business /> */}
          </Route>
          <Route path="/mit">
            <Mit />
          </Route>
          <Route path="/it">
            <It />
          </Route>
          <Route path="/network">
            <Network />
          </Route>
          <Route path="/appd">
            <Appd />
          </Route>
          <Route path="/webd">
            <Webd />
          </Route>
          <Route path="/chm">
            <Chm />
          </Route>
          <Route path="/SoftwareS">
            <SoftwareS />
          </Route>
          <Route path="/Survellance">
            <Survellance />
          </Route>
          <Route path="/Wptp">
            <Wptp />
          </Route>
          <Route path="/AutoAI">
            <AutoAI />
          </Route>
          <Route path="/Rsupport">
            <Rsupport />
          </Route>
          <Route path="/cyber">
            <Cyber />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/login">
            <LoginComponent />
          </Route>
          <Route exact path="/login" component={Login}/>
          <Route path="/industries" component={Industries}/>
           
          
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Home;
