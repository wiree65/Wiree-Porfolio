import { Fragment, useState, useEffect } from "react";

const Skills = ({ id }) => {
  const skills = [
    {
      icons: [
        { title: "HTML", icon: "html5" },
        { title: "CSS", icon: "css3-alt" },
        { title: "JS", icon: "js-square" },
        { title: "Vue.js", icon: "vuejs" },
        { title: "React", icon: "react" },
        { title: "Next.js", icon: "/images/nextjs-logo.png" },
      ],
    },
  ];
  const dnt = [
    {
      icons: [
        { title: "MSSQL", icon: "fas fa-database" },
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
        { title: "Photoshop", icon: "/images/ps.png" },
        { title: "Illustrator", icon: "/images/Ai.png" },
        { title: "Premire Pro", icon: "/images/Pr.png" },
        { title: "Figma", icon: "/images/figma.png" },
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
                <div className="row">
                  {i.icons.map((s, i) => (
                    <div>
                      <div className="column" key={i}>
                        {s.icon.substring(0, 1) == "/" ? (
                          <img src={`${s.icon}`} className="icon"></img>
                        ) : (
                          <i className={`fab fa-${s.icon}`}></i>
                        )}

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
          i {
            color: #d18585;
            font-size: 35px;
          }
          .icon {
            width: 60px;
          }
          .row {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .column {
            margin: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .font {
            font-size: 13px;
            font-weight: 500;
          }
          @media only screen and (max-width: 768px) {
            i {
              color: #d18585;
              font-size: 25px;
            }
            .font {
              font-size: 10px;
              font-weight: 500;
            }
            .icon {
              width: 42.5px;
            }
            .column {
              margin: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
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
                <div className="row">
                  {i.icons.map((s, i) => (
                    <div>
                      <div className="column" key={i}>
                        <i className={`${s.icon}`}></i>

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
          i {
            color: #d18585;
            font-size: 30px;
          }
          .icon {
            width: 50px;
          }
          .row {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .column {
            margin: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .font {
            font-size: 13px;
            font-weight: 500;
          }
          @media only screen and (max-width: 768px) {
            i {
              color: #d18585;
              font-size: 25px;
            }
            .font {
              font-size: 10px;
              font-weight: 500;
            }
            .icon {
              width: 28px;
            }
            .column {
              margin: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
          }
        `}</style>
      </Fragment>
    );
  }
  if (id == "design") {
    return (
      <Fragment>
        <div className="row">
          <div>
            {design.map((i, index) => (
              <div key={index}>
                <div className="row">
                  {i.icons.map((s, i) => (
                    <div>
                      <div
                        className="column"
                        key={i}
                        style={{ margin: "15px" }}
                      >
                        <img src={`${s.icon}` } className="icon" ></img>

                        <p className="font">
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
          i {
            color: #d18585;
            font-size: 30px;
          }
          .icon {
            width: 40px;
          }
          .row {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .column {
            margin: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .font {
            font-size: 13px;
            font-weight: 500;
          }
          @media only screen and (max-width: 768px) {
            i {
              color: #d18585;
              font-size: 25px;
            }
            .font {
              font-size: 10px;
              font-weight: 500;
            }
            .icon {
              width: 28px;
            }
            .column {
              margin: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
          }
        `}</style>
      </Fragment>
    );
  }

  return <Fragment>test</Fragment>;
};
export default Skills;
