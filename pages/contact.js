import { Fragment, useState, useEffect } from "react";

import Footer from "../component/Footer";
import Layout from "../component/Layout";
const General = (props) => {
  return (
    <Fragment>
      <Layout page="contact">
        <div className="container">
          <div className="margin">
            <h1>GET IN TOUCH</h1>
            <p className="font">
              I’m looking forward to start a project with you!
            </p>
            <p style={{ color: "#7b7b7b" }}>Please feel free to contact me</p>
          </div>
          <div className="row">
            <a href="https://fb.me/katak56">
              <div className="card">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <i
                    className="fab fa-facebook-square"
                    style={{
                      display: "flex",
                      color: "#D18585",
                      fontSize: "2rem",
                      marginRight: "1rem",
                    }}
                  ></i>
                  <p style={{ fontWeight: 700 }}> Facebook:</p>
                </div>
                <p style={{ color: "#333333" }}>fb.me/katak56</p>
              </div>
            </a>
            <div className="card">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <i
                  className="fas fa-phone-square-alt"
                  style={{
                    display: "flex",
                    color: "#D18585",
                    fontSize: "2rem",
                    marginRight: "1rem",
                  }}
                ></i>
                <p style={{ fontWeight: 700 }}> Tel:</p>
              </div>
              <p style={{ color: "#333333" }}>091-495-1456</p>
            </div>
            <div className="card">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <i
                  className="fas fa-envelope"
                  style={{
                    display: "flex",
                    color: "#D18585",
                    fontSize: "2rem",
                    marginRight: "1rem",
                  }}
                ></i>
                <p style={{ fontWeight: 700 }}> Email Adress:</p>
              </div>
              <p style={{ color: "#333333" }}>Katak6565@gmail.com</p>
            </div>
            <a href="https://github.com/wiree65">

            <div className="card">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <i
                  className="fab fa-github-square"
                  style={{
                    display: "flex",
                    color: "#D18585",
                    fontSize: "2rem",
                    marginRight: "1rem",
                  }}
                ></i>
                <p style={{ fontWeight: 700 }}> Github:</p>
              </div>
              <p style={{ color: "#333333" }}>github.com/wiree65</p>
            </div>
            </a>
          </div>
        </div>
      </Layout>
      <Footer></Footer>
      <style jsx>{`
        .card {
          display: flex;
          justify-content: center;
          background: white;
          transition: 0.3s;
          width: 300px;
          margin: 10px;
          padding: 50px;
          border-radius: 2vh;
          border: none;
          box-shadow: 3px 3px 5px 3px #ccc;
          padding: 0 10px 5px 30px;
          flex-direction: column;
        }
        .card:hover {
          display: flex;
          justify-content: center;
          background: white;
          transition: 0.3s;
          width: 300px;
          padding: 50px;
          border-radius: 2vh;
          border: none;
          box-shadow: 3px 5px 15px 3px #ccc;
          padding: 0 10px 5px 30px;
          flex-direction: column;
        }
        .column {
          width: 15vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .row {
          flex-wrap: wrap;
          width: 50vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
        }
        .margin {
          margin-left: 8%;
          width: 30vw;
          text-align: center;
        }
        h1 {
          color: #d18585;
          font-size: 60px;
          margin: 0px;
        }
        .font {
          font-size: 20px;
          color: #7b7b7b;
        }
        .container {
          height: 85vh;

          width: 100vw;
          display: flex;
          align-content: space-evenly;
          justify-content: center;
          align-items: center;
          flex-direction: row;
        }
        @media only screen and (max-width: 768px) {
          .font {
            font-size: 18px;
            color: #7b7b7b;
          }
          h1 {
            color: #d18585;
            font-size: 40px;
            margin-top: 50px;
          }
          .row {
            flex-wrap: wrap;
            width: 80vw;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: row;
          }
          .container {
            height: 100%;
            width: 100vw;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
          }
          .margin {
            text-align: center;
            margin: 0%;
            width: 80%;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default General;
