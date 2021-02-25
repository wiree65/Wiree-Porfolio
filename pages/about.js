import { Fragment, useState, useEffect } from "react";
import Layout from "../component/Layout";
import Typing from "../component/typing";
import Footer from "../component/Footer";
const About = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  const isMobile = windowSize.width < 768;

  return (
    <Fragment>
      <div style={{ marginTop: "20px" }}>
        <Layout page="about">
          <div className="motion">
            <div className={` ${isMobile ? "container-mobile" : "container"}`}>
              <img
                src="/images/profile.png"
                width="400px"
                height="auto"
                className="profilePic"
                alt="profile picture"
              ></img>
              <div className="column-con">
                <div>
                  <div className={` ${isMobile ? "row-con" : ""}`}>
                    <h1 className="text" style={{ margin: "0px" }}>
                      Hello,{" "}
                    </h1>
                    <div className="row-con">
                      <h1
                        className="text"
                        style={{ margin: "15px 0px 0px 10px" }}
                      >
                        I’m{" "}
                      </h1>
                      <h1
                        className="text"
                        style={{
                          paddingLeft: "10px",
                          color: "#D18585",
                          margin: "15px 0px 0px 10px",
                        }}
                      >
                        {" "}
                        WIRAWAT JAIARREE
                      </h1>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#D18585",
                    width: "35vw",
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
                  <h1 style={{ color: "#D18585" }}>Education</h1>
                  <div className="card">
                    <p>Prommanusorn School 2012 - 2018</p>
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
                  <h1 style={{ color: "#D18585" }}>Technology Skills</h1>
                  <div className="card">
                    test
                  </div>
                </div>
              </div>
            </div>
            <Footer></Footer>
          </div>
        </Layout>
      </div>

      <style jsx>{`
        .info {
          display: flex;
          flex-direction: row;
        }

        .card {
          display: flex;
          justify-content: center;
          background: white;
          transition: 0.3s;
          width: 30vw;
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

        . container-md {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
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
        .container-mobile {
          min-height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .column-con {
          margin-top: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .row-con {
          display: flex;
          justify-content: center;
          align-items: center;
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
          font-size: 1vw;
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
        @media only screen and (max-width: 720px) {
          .column-con {
            display: flex;
            width: 50vw;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .column-con-md {
            min-height: 20vh;
            width: 50vw;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .text {
            font-size: 3vw;
          }
        }
        @media only screen and (max-width: 1080px) {
          .column-con {
            display: flex;
            width: 60vw;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .column-con-md {
            min-height: 20vh;
            width: 50vw;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .text {
            font-size: 4vw;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default About;
