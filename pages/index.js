import { Fragment, useState, useEffect } from "react";
import Layout from "../component/Layout";
import Typing from "../component/typing";
import Footer from "../component/Footer";
const Home = () => {
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
        <Layout page="home">
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
                    <h1 className="text">Hello, </h1>
                    <div className="row-con">
                      <h1 className="text">I’m </h1>
                      <h1
                        className="text"
                        style={{ paddingLeft: "10px", color: "#D18585" }}
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
                ></div>
                <div className="typing">
                  <Typing
                    bio="Lerom Ipsum is simply dummy text of the printing and typesetting industry."
                    speed={40}
                  ></Typing>
                </div>
                <button className="button">
                  <span
                    style={{
                      padding: "0 0 0 10px",
                      fontSize: "14px",
                      backgroundColor: "transparent",
                    }}
                  >
                    More infomation about me{" "}
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div></div>
              <Footer></Footer>
            </div>
          </div>
        </Layout>
      </div>
      <style jsx>{`
        .motion {
          position: relative;
          animation: mymove 1s;
        }
        @keyframes mymove {
          from {
            top: -100px;
          }
          to {
            top: 0px;
          }
        }

        .button {
          background-color: #d18585;

          width: 15vw;
          height: 5vh;
          border-radius: 30px;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          outline: none;
        }
        .button span {
          cursor: pointer;
          display: inline-block;
          position: relative;
          transition: 0.5s;
        }
        .button span:after {
          content: "";
          position: absolute;
          opacity: 0;
          top: 0;
          // right: -25px;
          transition: 0.5s;
        }
        .button:hover span {
          padding-right: 25px;
        }
        .button:hover {
          // transition: 0.5s;
          color: #d18585;
          border: solid;
          background-color: white;
          opacity: 1;
          right: 1;
        }
        .button:hover span:after {
          opacity: 1;
          right: 1;
        }

        . container-md {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
        }
        .container {
          min-height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
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
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
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
          font-size: 3vw;
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
          .button{
            width:29vw;
       
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

export default Home;
