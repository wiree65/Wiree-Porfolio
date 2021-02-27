import { Fragment, useState, useEffect } from "react";
const Graphic = (props) => {
  const skills = [
    {
      icons: [{ title: "Burger Joker" }, { title: "Yum yod chai" },{ title: "Burger Joker" }, { title: "Yum yod chai" }
    ,{ title: "Burger Joker" }, { title: "Yum yod chai" },{ title: "Burger Joker" }, { title: "Yum yod chai" }],
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
          flex-wrap: wrap;
          display: flex;
          justify-content: center;
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
        }
        .container {
          height: 90vh;
          width: 100vw;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
        }
      }
      `}</style>
    </Fragment>
  );
};

export default Graphic;
