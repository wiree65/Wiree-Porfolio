import { Fragment, useState, useEffect } from "react";
const Web = (props) => {
  const skills = [
    {
      icons: [
        { title: "Burger Joker" },
        { title: "Yum Yod Chai" },
        { title: "CS@SIT Open House" },
        { title: "GEN351 Poster" },
        { title: "Animation 2D" },
      ],
    },
  ];
  return (
    <Fragment>
      <div className="container1">
        <div>
          {skills.map((i, index) => (
            <div key={index}>
              <div className="row">
                {i.icons.map((s, i) => (
                  <div key={i}>
                    <div className="row">
                      <div className="container">
                        <img
                          src="./images/project/eduroom/1.png"
                          style={{ width: "100%", borderRadius: "32px" }}
                        ></img>
                        <h3 className="font">{s.title}</h3>
                  <p>2020</p>
                        <div className="hoverdiv">
                          <h1 className="font">{s.title}</h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 320px;
          box-shadow: 3px 3px 5px 3px #ccc;
          height: 320px;
          margin: 20px;
          border-radius: 32px;
          transform: scale(1);

          transition: all 0.3s ease-in-out;
        }

        .hoverdiv {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 24px;
          background: white;
          color: black;
          opacity: 0;
          border-radius: 32px;
          transition: all 0.15s ease-in-out;
          transition-delay: 0.15s;
          box-sizing: border-box;
        }
        .container:hover .hoverdiv,
        .container:active .hoverdiv {
          opacity: 1;
        }

        .container:hover {
          transform: scale(1.03);
        }

        .row {
          flex-wrap: wrap;
          display: flex;
          justify-content: center;
          flex-direction: row;
        }

        .container1 {
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

export default Web;
