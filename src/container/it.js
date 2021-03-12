import React from "react";
import Footer from "../component/footer";
import it from "../assets/img/it.jpg";
function It() {
  return (
    <div className="">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className="pb-5 container">
        <div className=" row">
          <div className="col-lg-6">
            <img
              id="optionalstuff"
              className="w3-animate-left img-fluid col-sm-0"
              src={it}
              style={{ height: "400px", paddingTop: "", paddingLeft: "" }}
            />
          </div>
          <div className="col-lg-6 pt-5">
            <h1 style={{ fontFamily: "'Rubik', sans-serif", color: "#3F3F3F" }}>
              IT Assessment
            </h1>
            <p style={{ color: "#8F8F8F" }}>
              Our IT assessments provide a clear picture of your current IT
              infrastructure and operations. Along with providing a snapshot of
              the risk level for each assessment area. Our IT Assessment
              Services provide you with the information you need to understand
              your environment, make informed decisions, and set strategies.
              NLINK Services Organization has the experience and expertise to
              help your business meet your goals and objectives faster, with
              less risk.
            </p>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
export default It;
