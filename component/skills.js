import { Fragment, useState, useEffect } from "react";

const Skills = (props) => {
  const skills = [
    {
      icons: [
        { title: "HTML", icon: "html5" },
        { title: "CSS", icon: "css3-alt" },
        { title: "JS", icon: "js-square" },
        { title: "Vue.js", icon: "vuejs" },
        { title: "React", icon: "react" },
      ],
    },
  ];
  return (
    <Fragment>
      <div className="row">
        <div>
          {skills.map((i, index) => (
            <div key={index}>
              <div className="row" style={{ marginLeft: "20px" }}>
                {i.icons.map((s, i) => (
                  <div>
                    <div className="column" key={i} style={{ margin: "20px" }}>
                      <i
                        className={`fab fa-${s.icon}`}
                        style={{ color: "#d18585", fontSize: "30px" }}
                      ></i>

                      <p className="font">{s.title}</p>
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
          justify-content: flex-start;
          align-items: center;
        }
        .column {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .font {
          font-size: 15px;
          font-weight: 500;
        }
      `}</style>
    </Fragment>
  );
};

export default Skills;
