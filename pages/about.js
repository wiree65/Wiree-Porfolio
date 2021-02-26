import { Fragment, useState, useEffect } from "react";
import Layout from "../component/Layout";
import Skills from "../component/skills";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <Fragment>
      <div style={{ marginTop: "20px" }}>
        <Layout page="about">
          <div className="motion">
            <div className="container">
              <img src="/images/profile.png" className="profilePic"></img>
              <div className="column-con">
                <div>
                  <div>
                    <h1 className="text">Hello</h1>
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
                <div className="line">
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
            <div className="container1">
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
                        DB, Backend and Tools
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
      <style jsx>{`
        .line {
          background-color: #d18585;
          width: 460px;
          height: 3px;
        }
        .profilePic {
          width: 400px;
        }

        .row {
          display: flex;
          flex-direction: row;
        }
        .info {
          display: flex;
          flex-direction: row;
        }

        .card {
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
        .card1 {
          height: 140px;
          display: flex;

          background: white;
          transition: 0.3s;
          width: 500px;
          padding: 10px;
          border-radius: 2vh;
          border: none;
          box-shadow: 3px 3px 5px 3px #ccc;
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
        .container1 {
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
          margin: 0px;
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
        @media only screen and (max-width: 768px) {
          .info {
            display: flex;
            flex-direction: column;
          }
          .profilePic {
            width: 300px;
          }
          .text {
            text-align: center;
            font-size: 2.3rem;
          }
          .container {
            height: 90vh;
            width: 100vw;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
          }
          .container1 {
            height: 135vh;
            width: 100vw;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
          }
          .column-con {
            margin-top: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .line {
            background-color: #d18585;
            width: 350px;
            height: 3px;
          }

          .container-card {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 0;
          }
          .card {
            display: flex;
            padding: 5px;
            justify-content: center;
            background: white;
            transition: 0.3s;
            width: 350px;
            border-radius: 2vh;
            border: none;
            box-shadow: 3px 3px 5px 3px #ccc;

            flex-direction: column;
          }
          p {
            padding: 0px;
            margin: 5px;
            text-align: center;
          }
          .card1 {
            height: 110px;
            width: 350px;
            display: flex;
            justify-content: flex-start;
            background: white;
            transition: 0.3s;

            padding: 50px;
            border-radius: 2vh;
            border: none;
            box-shadow: 3px 3px 5px 3px #ccc;
            padding: 0 10px 5px 30px;
            flex-direction: column;
            padding: 0px;
          }
          .row {
            display: flex;
            margin-top: 10px;
            flex-direction: row;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default About;
