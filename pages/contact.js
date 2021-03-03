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
            <p style={{color:"#7b7b7b"}}>
             Please feel free to contact me
            </p>
          </div>
          <div className="row">
            <div className="card">
              <div style={{ display: "flex", flexDirection: "row",alignItems:'center', }}>
              <i
                  className="fab fa-facebook-square"
                  style={{
                    display: "flex",
                    color: "#D18585",
                    fontSize: "2rem",
                    marginRight: "1rem",
                  }}
                ></i>
                <p> Facebook:</p>
               
              </div>
              <p>กาต๊าก กะตัก</p>
            </div>
            <div className="card">
              <div style={{ display: "flex", flexDirection: "row",alignItems:'center', }}>
              <i
                  className="fas fa-phone-square-alt"
                  style={{
                    display: "flex",
                    color: "#D18585",
                    fontSize: "2rem",
                    marginRight: "1rem",
                  }}
                ></i>
                <p> Tel:</p>
               
              </div>
              <p>091-495-1456</p>
            </div>
            <div className="card">
              <div style={{ display: "flex", flexDirection: "row",alignItems:'center', }}>
              <i
                  className="fas fa-envelope"
                  style={{
                    display: "flex",
                    color: "#D18585",
                    fontSize: "2rem",
                    marginRight: "1rem",
                  }}
                ></i>
                <p> Email Adress:</p>
               
              </div>
              <p>Katak6565@gmail.com</p>
            </div>
            <div className="card">
              <div style={{ display: "flex", flexDirection: "row",alignItems:'center', }}>
              <i
                  className="fab fa-github-square"
                  style={{
                    display: "flex",
                    color: "#D18585",
                    fontSize: "2rem",
                    marginRight: "1rem",
                  }}
                ></i>
                <p> Github:</p>
               
              </div>
              <p>github.com/wiree65</p>
            </div>
          </div>
        </div>
        <br/>
        <Footer></Footer>
      </Layout>
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
          height: 25%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
        }
        .margin {
          margin-left: 8%;
          width: 30vw;
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
          height: 82vh;
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
            height: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
          }
          .container {
            height: 90vh;
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
