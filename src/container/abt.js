import React from "react";
import abt from "../assets/img/abtt.png";
import Footer from "../component/footer";
function AboutUs() {
  return (
    <>
      {" "}
      <div style={{ paddingTop: "130px" }} class="container">
        <h1
          data-aos="fade-up"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            fontFamily: "Lexend Giga",
          }}
        >
          DEEP DIVE INTO US
        </h1>
        <div className="row">
          <div className="col-lg-6">
            <img data-aos="fade-right" className="img-fluid" src={abt} />
          </div>
          <div className="col-lg-6 col-md-12">
            <div>
              <p
                data-aos="fade-right"
                style={{ color: "#707B8E", margin: "0px 0px 56px" }}
              >
                Nlink IT solutions (OPC) Pvt. Ltd is an IT Servicing company
                based in Sirsa,India.The firm is founded in 2016,.Founders of
                company have over 10 years Computer hardware and networking
                experience. We are a team of highly skilled, professional,
                dedicated and passionate IT professionals who aspire to
                transform and enhance the world of digital domain and its
                related services with our out of the box, creative, strategic,
                adaptable, transparent, affordable and easy to implement
                business strategies, skill and our expertise. We offers various
                kinds of Website Solutions like web design and development,
                custom website development, eCommerce web development and
                digital marketing etc. A company recognized globally for its
                comprehensive portfolio of services, strong commitment to
                sustainability and good corporate citizenship, Our extensive IT
                experience of leading and contributing in various enterprise
                level initiatives in domains like Retail, Finance, Logistics,
                Hospitality, High Tech, Localization gives us privilege to
                understand the business and technology aspects of disparate
                systems, in deep and that is what we leverage to benefit our
                customers with Simple Solutions of even critical business
                problems.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
export default AboutUs;
