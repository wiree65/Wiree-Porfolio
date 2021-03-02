import { Fragment, useState, useEffect } from "react";
import Layout from "../component/Layout";
import Skills from "../component/skills";
import Footer from "../component/Footer";
import style from "../styles/about";

const About = () => {
  return (
    <Fragment>
      <div>
        <Layout page="about">
          <div className="motion">
            <div className="container">
              <img className="profilePic" src="./images/1.jpg" style={{width:'350px',height:'350px'}}></img>
              <div className="column-con">
                <div>
                  <div>
                    <h1 className="text" style={{ margin: "20px 0px 0px 0px" }}>
                      Hello,{"   "}
                    </h1>
                    <div className="row-con">
                      <h1
                        className="text"
                        style={{ margin: "20px 0px 0px 0px" }}
                      >
                        I’m{" "}
                      </h1>
                      <h1
                        className="text"
                        style={{
                          paddingLeft: "10px",

                          color: "#D18585",
                          margin: "20px 0px 0px 0px",
                        }}
                      >
                        {" "}
                        Wirawat Jaiarree
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="line" style={{ margin: "5px" }}></div>

                <div className="typing">
                  <p style={{ color: "#7B7B7B" }}>
                    - I’ m a sophomore student in Computer Science at King
                    Mongkut's University of Technology Thonburi (KMUTT)
                  </p>
                </div>
                <div className="typing">
                  <p style={{ color: "#7B7B7B" }}>
                    - Minimal and simple are a passion of mine and I always
                    enjoy and excited when I learn new things.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container1">
              <div className="info">
                <div className="container-card">
                  <div
                    className="row"
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <h1 style={{ color: "#D18585" }}>Education</h1>
                    <i
                      className="fas fa-school"
                      style={{
                        color: "#D18585",
                        fontSize: "2rem",
                        marginLeft: "1rem",
                      }}
                    ></i>
                  </div>
                  <div className="card">
                    <p>Prommanusorn School 2016 - 2018</p>
                    <p>Math-Computer GPAX : 3.81</p>
                  </div>

                  <div className="card" style={{ marginTop: "2rem" }}>
                    <p>King Mongkut's University of Technology Thonburi</p>

                    <p>(2019 - Present)</p>
                    <p>I'm currently studying bachelor's second year of</p>
                    <p>Computer Science at School of Information Technology</p>
                    <p>Current GPAX : 3.65</p>
                  </div>
                </div>
                <div className="container-card">
                  <div
                    className="row"
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <h1 style={{ color: "#D18585" }}>Technology Skills</h1>
                    <i
                      className="fas fa-laptop-code"
                      style={{
                        color: "#D18585",
                        fontSize: "2rem",
                        marginLeft: "1rem",
                      }}
                    ></i>
                  </div>
                  <div className="card1">
                    <div className="row" style={{ paddingLeft: "20px" }}>
                      <h3 style={{ color: "#D18585", margin: "0px" }}>
                        Frontend
                      </h3>
                      <h3
                        style={{
                          marginLeft: "5px",
                          margin: "0px  0px 0px 5px",
                        }}
                      >
                        Development
                      </h3>
                    </div>
                    <Skills id={"font"}></Skills>
                  </div>
                  <br />
                  <div className="card1">
                    <div className="row" style={{ paddingLeft: "20px" }}>
                      <h3 style={{ color: "#D18585", margin: "0px" }}>
                        Backend and Tools
                      </h3>
                      <h3
                        style={{
                          marginLeft: "5px",
                          margin: "0px  0px 0px 5px",
                        }}
                      >
                        Development
                      </h3>
                    </div>
                    <Skills id={"back"} />
                  </div>
                  <br />
                  <div className="card1">
                    <div className="row" style={{ paddingLeft: "20px" }}>
                      <h3 style={{ color: "#D18585", margin: "0px" }}>
                        Graphic
                      </h3>
                      <h3
                        style={{
                          marginLeft: "5px",
                          margin: "0px  0px 0px 5px",
                        }}
                      >
                        Skills
                      </h3>
                    </div>
                    <Skills id={"design"} />
                  </div>
                </div>
              </div>
            </div>
            <Footer></Footer>
          </div>
        </Layout>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default About;
