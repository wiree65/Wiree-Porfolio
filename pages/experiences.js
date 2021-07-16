import { Fragment, useState, useEffect } from "react";
import Web from "../component/web";
import Graphic from "../component/graphic";
import MobileDev from "../component/mobileDev";

import Layout from "../component/Layout";
import Footer from "../component/Footer";

const General = (props) => {
  const [current, setCurrent] = useState(1);
  const renderPage = () => {
    switch (current) {
      case 1:
        return <Web />;
      case 2:
        return <MobileDev />;
        case 3:
          return <Graphic />;
    }
  };
  const items = [
    { label: "Web Development", page: 1 },
    { label: "Mobile Development", page: 2 },
    { label: "Graphic design", page: 3 },

  ];
  return (
    <Fragment>
      <Layout page="experiences">
        <div className="container">
          <h1>Showcase</h1>
          <p style={{ fontWeight: "500", color: "#4F4F4F" }}>-Minimal & simple are a passion of mine-</p>
          <p style={{ fontWeight: "500", color: "#4F4F4F" }}> I will try my best to create good quality and work</p>
          <p style={{ fontWeight: "500", color: "#4F4F4F" }}>The showcase composes of Web Development, Mobile development, and Graphic design</p>
          <div className="row">
            {items.map((item) => {
              return (
                <div key={item.label}>
                  <br />
                  <button
                    className={`item ${
                      item.page === current ? "active" : "nonactive"
                    }`}
                    onClick={() => {
                      setCurrent(item.page);
                    }}
                  >
                    {item.label}
                  </button>
                </div>
              );
            })}
          </div>
          <br />
          <div className="card">{renderPage()}</div>
        </div>
        <Footer />
      </Layout>
      <style jsx>{`
        .nonactive {
          margin: 10px;
          font-weight: 700;
        }
        .nonactive:hover {
          border-bottom: 3px solid #d18585;
          transition: 0.1s;
          opacity: 0.8;
        }
        .active {
          margin: 10px;
          font-weight: 700;
          color: #d18585;
          border-bottom: 3px solid #d18585;
        }
        button {
          border: none;
          background-color: white;
          outline: none;
        }
        .row {
          display: flex;
          flex-direction: row;
        }
        h1 {
          color: #d18585;
          font-size: 4rem;
        }
        p {
          padding-left: 10px;
          padding-right: 10px;
        }
        .container {
          text-align: center;

          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </Fragment>
  );
};

export default General;
