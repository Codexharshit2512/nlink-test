import React ,{useEffect}from "react";
import HeroSlider, { Slide, MenuNav, OverlayContainer } from "hero-slider";
import Wrapper from "./UI/Wrapper/Wrapper";
import Title from "./UI/Title/Title";
import Picture1 from "../assets/img/Slide1.jpg"
import Picture2 from "../assets/img/Slide2.jpg"
import Picture3 from "../assets/img/Slide3.jpg"
import Picture4 from "../assets/img/Slide4.jpg"
import Subtitle from "./UI/Subtitle/Subtitle";
import classes from "../CSS/getStarted.module.css";
import Aos from "aos";

const furniture= "https://karmainteriors.in/wp-content/uploads/2018/01/banner.jpg";
const Corporate = "https://karmainteriors.in/wp-content/uploads/2018/01/banner1.jpg";
const Residential = "https://karmainteriors.in/wp-content/uploads/2018/01/banner3.jpg";
const Showrooms = "https://karmainteriors.in/wp-content/uploads/2018/01/banner4.jpg";

const GetStarted = () => {
  useEffect(()=>{
    Aos.init({duration:3000});
},[]);
  return (
  <>
     <div className={classes.GetStarted} id="getStarted"  >
    <HeroSlider
      slidingAnimation="top_to_bottom"
      orientation="vertical"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "#000"
      }}
      settings={{
        slidingDuration: 200,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 1500,
        height: "100vh"
      }}
    >
      
      <OverlayContainer>
        <Wrapper>
          <Title>NLink </Title>
          <Subtitle>The Details are not details.They make the Design.</Subtitle>
        </Wrapper>
      </OverlayContainer>

      <Slide
        shouldRenderMask
        navDescription="Furniture and Architecture"
        background={{
          backgroundColor: "#6D9B98",
          backgroundImage: Picture4
        }}
      />

      <Slide
        shouldRenderMask 
        navDescription="Corporate"
        background={{
          backgroundColor: "#8A8A8A",
          backgroundImage: Picture2
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Residential"
        background={{
          backgroundColor: "#EA2329",
          backgroundImage: Picture3
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Showrooms"
        background={{
          backgroundColor: "#2D7791",
          backgroundImage: Picture1
        }}
      />

      <MenuNav />
    </HeroSlider>
    </div>
    
    </>
  );
};

export default GetStarted;
