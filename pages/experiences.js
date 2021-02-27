import { Fragment, useState, useEffect } from "react";
import Web from "../component/web";
import Graphic from "../component/graphic";

import Layout from "../component/Layout";

const General = (props) => {
  const [current, setCurrent] = useState(2);
  const renderPage = () => {
    switch (current) {
      case 1:
        return <Web/>;
      case 2:
        return <Graphic/>;
    }
  };
  const items = [
    { label: "Web Development", page: 1 },
    { label: "Graphic design", page: 2 },
  ];
  return (
    <Fragment>
      <Layout page="experiences">
        <div className="container">
          <h1>Showcase</h1>
          <p>-Minimal & simple are a passion of mine-</p>
          <p> I will try my best to create good work and quality</p>
          <p>The showcase compose of Web Development and Graphic design</p>
          <div className="row">
            {items.map((item) => {
              return (
                <div
                  // className={`item ${item.page === page ? "active" : ""}`}
                  key={item.label}
                >
                  <button
                    onClick={() => {
                      setCurrent(item.page)
                    }}
                  >
                    {item.label}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="card">{renderPage()}</div>
        </div>
      </Layout>
      <style jsx>{`
        button {
          border: none;
          background-color: white;
          outline:none;
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
          height: 90vh;
          text-align: center;

          width: 100vw;
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
