import { Fragment, useState, useEffect } from "react";
const Web = (props) => {
  const skills = [
    {
      icons: [{ title: "EDUROOM" }, { title: "CSB" },{ title: "EDUROOM" }, { title: "CSB" }],
    },
  ];
  return (
    <Fragment>
      <div className="container">
        <div>
          {skills.map((i, index) => (
            <div key={index}>
              <div className="row">
                {i.icons.map((s, i) => (
                  <div className="row">
                    <div className="card">
                      <div className="column" key={i}>
                        <p className="font">{s.title}</p>
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
     
        .row {
          display: flex;
          flex-direction: row;
        }
        .card {
          display: flex;
          justify-content: center;
          background: white;
          transition: 0.3s;
          width: 200px;
          margin:20px;  
          border-radius: 2vh;
          border: none;
          box-shadow: 3px 3px 5px 3px #ccc;
          flex-direction: column;
          animation: mymove 1s;
        }
        .container {
          height: 90vh;
          width: 100vw;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
        }
        @keyframes mymove {
            from {
             width: 100px;
            }
            to {
                width: 200px;

            }
          }
      `}</style>
    </Fragment>
  );
};

export default Web;
