import { Fragment, useState, useEffect } from "react";

const Skills = ({ id }) => {
  const skills = [
    {
      icons: [
        { title: "HTML", icon: "html5" },
        { title: "CSS", icon: "css3-alt" },
        { title: "Java Script", icon: "js-square" },
        { title: "Vue.js", icon: "vuejs" },
        { title: "React", icon: "react" },
      ],
    },
  ];
  const dnt = [
    {
      icons: [
        { title: "RDBMS", icon: "fas fa-database" },
        { title: "Servlet", icon: "fab fa-java" },
        { title: "Node JS", icon: "fab fa-node-js" },
        { title: "Git & Github", icon: "fab fa-github-square" },
        { title: "Docker", icon: "fab fa-docker" },
      ],
    },
  ];
  const design = [
    {
      icons: [
        { title: "Photoshop", icon: "fas fa-database" },
        { title: "Illustrator", icon: "fab fa-java" },
        { title: "Figma", icon: "fab fa-node-js" },
        { title: "Git & Github", icon: "fab fa-github-square" },
        { title: "Docker", icon: "fab fa-docker" },
      ],
    },
  ];
  if (id == "font") {
    return (
      <Fragment>
        <div className="row">
          <div>
            {skills.map((i, index) => (
              <div key={index}>
                <div className="row" style={{ marginLeft: "20px" }}>
                  {i.icons.map((s, i) => (
                    <div>
                      <div
                        className="column"
                        key={i}
                        style={{ margin: "20px" }}
                      >
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
            justify-content: center;
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
  }
  if (id == "back") {
    return (
      <Fragment>
        <div className="row">
          <div>
            {dnt.map((i, index) => (
              <div key={index}>
                <div className="row" style={{ marginLeft: "20px" }}>
                  {i.icons.map((s, i) => (
                    <div>
                      <div
                        className="column"
                        key={i}
                        style={{ margin: "20px" }}
                      >
                        <i
                          className={`${s.icon}`}
                          style={{ color: "#d18585", fontSize: "30px" }}
                        ></i>

                        <p className="font" style={{ fontSize: "13px" }}>
                          {s.title}
                        </p>
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
            justify-content: center;
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
  }

  return <Fragment>
    test
  </Fragment>;
};
export default Skills;
