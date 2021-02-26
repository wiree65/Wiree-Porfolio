import { Fragment, useState, useEffect } from "react";
import Layout from "../component/Layout";
import Skills from "../component/skills";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faCode,
  faHospitalSymbol,
} from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <Fragment>
      <div style={{ marginTop: "20px" }}>
        <Layout page="about">
          <div className="motion">
            <div className="container">
              <img
                src="/images/profile.png"
                width="400px"
                height="auto"
                className="profilePic"
                alt="profile picture"
              ></img>
              <div className="column-con">
                <div>
                  <div>
                    <h1 className="text" style={{ margin: "0px" }}>
                      Hello,{" "}
                    </h1>
                    <div className="row-con">
                      <h1
                        className="text"
                        style={{ margin: "15px 0px 0px 0px" }}
                      >
                        I’m{" "}
                      </h1>
                      <h1
                        className="text"
                        style={{
                          paddingLeft: "10px",
                          color: "#D18585",
                          margin: "15px 0px 0px 0px",
                        }}
                      >
                        {" "}
                        Wirawat Jaiarree
                      </h1>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#D18585",
                    width: "460px",
                    height: "3px",
                  }}
                >
                  <div>
                    <p style={{ color: "#7B7B7B" }}>
                      - I’ m sophomore student in Computer Science at King
                      Mongkut's University of Technology Thonburi (KMUTT)
                    </p>
                  </div>
                  <div>
                    <p style={{ color: "#7B7B7B" }}>
                      - Minimal and simple are a passion of mine and I always
                      enjoy and exited when I learn new thing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="info">
                <div className="container-card">
                  <div className="row">
                    <h1 style={{ color: "#D18585" }}>Education</h1>
                    <FontAwesomeIcon
                      icon={faSchool}
                      style={{
                        color: "#D18585",
                        width: "40px",
                        marginLeft: "15px",
                      }}
                    />
                  </div>
                  <div className="card">
                    <p>Prommanusorn School 2016 - 2018</p>
                    <p>Math-Computer GPAX : 3.81</p>
                  </div>

                  <div className="card" style={{ marginTop: "2rem" }}>
                    <p>King Mongkut's University of Technology Thonburi</p>
                    <p>2019 - Present</p>
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
                  <div
                    className="card"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      height: "160px",
                      padding: "0px",
                    }}
                  >
                    <div className="row" style={{ paddingLeft: "20px" }}>
                      <h3 style={{ color: "#D18585", marginTop: "10px" }}>
                        Frontend
                      </h3>
                      <h3 style={{ marginLeft: "5px", marginTop: "10px" }}>
                        Development
                      </h3>
                    </div>
                    <Skills id={'font'}></Skills>
                    <br />
                  </div>
                  <br />
                  <div
                    className="card"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      height: "160px",
                      padding: "0px",
                    }}
                  >
                    <div className="row" style={{ paddingLeft: "20px" }}>
                      <h3 style={{ color: "#D18585", marginTop: "10px" }}>
                      Backend and Tools
                      </h3>
                      <h3 style={{ marginLeft: "5px", marginTop: "10px" }}>
                        Development
                      </h3>
                    </div>
                    <Skills id={'back'}/>
                  </div>
                </div>
              </div>
            </div>
            <Footer></Footer>
          </div>
        </Layout>
      </div>
      <style jsx>{`
        .row {
          display: flex;
          flex-direction: row;
        }
        .info {
          display: flex;
          flex-direction: row;
        }

        .card {
          height: 100%;
          display: flex;
          justify-content: center;
          background: white;
          transition: 0.3s;
          width: 500px;
          padding: 50px;
          border-radius: 2vh;
          border: none;
          box-shadow: 3px 3px 5px 3px #ccc;
          padding: 0 10px 5px 30px;
          flex-direction: column;
        }
        .motion {
          position: relative;
          animation: mymove 1s;
        }
        @keyframes mymove {
          from {
            top: 100px;
          }
          to {
            top: 0px;
          }
        }

        .container-card {
          min-height: 60vh;
          display: flex;
          margin-left: 100px;
          align-items: flex-start;
          flex-direction: column;
        }
        .container {
          min-height: 50vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: row;
        }

        .column-con {
          margin-top: 60px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
        }
        .row-con {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: row;
        }
        .typing {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          animation-name: example;
          animation-duration: 4s;
        }
        .text {
          font-size: 3rem;
        }

        @keyframes example {
          0% {
            opacity: 0%;
          }
          25% {
            opacity: 40%;
          }
          50% {
            opacity: 60%;
          }
          75% {
            opacity: 80%;
          }
          100% {
            opacity: 100%;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default About;
