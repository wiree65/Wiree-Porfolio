import { Fragment, useState, useEffect } from "react";
import Layout from "../../component/Layout";
import Typing from "../../component/typing";
import Footer from "../../component/Footer";
import Link from "next/link";
import style from "../../styles/indexMobile";

const Home = () => {
  return (
    <Fragment>
      <div>
        <Layout page="home">
          <div className="motion">
            <div className="container">
              <img
                src="/images/profile.png"
                width="300px"
                height="auto"
                className="profilePic"
                alt="profile picture"
              ></img>
              <h1 className="text" style={{ margin: "20px 0px 0px 0px" }}>
                Hello,{"   "}
              </h1>
              <div className="column-con">
                <div>
                  <div>
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
                        <Typing></Typing>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="line">
                  <div className="typing">
                    <p style={{ fontWeight: "500", color: "#4F4F4F" }}>
                      Welcome to my online portfolio website
                    </p>
                  </div>
                  <div className="typing">
                    <p style={{ margin: "0px", color: "#6D6D6D" }}>
                      I’m freelance graphic, interactive design, and a simple
                      student
                    </p>
                  </div>
                  <div className="typing">
                    <p style={{ color: "#6D6D6D" }}>
                      Just a friendly note, you can call me
                    </p>
                    <p
                      style={{
                        fontWeight: "600",
                        color: "#6D6D6D",
                      }}
                    >
                      “Katak”
                    </p>
                  </div>

                  <div className="containerButon">
                    <Link href="/about">
                      <button className="button">
                        <span
                          style={{
                            fontSize: "14px",
                            backgroundColor: "transparent",
                          }}
                        >
                          More infomation about me{" "}
                        </span>
                      </button>
                    </Link>
                  </div>
                  <Footer></Footer>
                </div>
              </div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </Layout>
      </div>

      <br />
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default Home;
