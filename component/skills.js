import { Fragment, useState, useEffect } from "react";
import style from "../styles/skills";

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
  const backends = [
    {
      icons: [
        { title: "MSSQL", icon: "fas fa-database" },
        { title: "Servlet", icon: "fab fa-java" },
        { title: "Node JS", icon: "fab fa-node-js" },
        { title: "PostgreSQL", icon: "/images/postgre.png" },
        { title: "Firebase", icon: "/images/firebase.png" },

        
   
      ],
    },
  ];
  const dnt = [
    {
      icons: [
        { title: "Git & Github", icon: "fab fa-github-square" },
        { title: "Git Kraken", icon: "fab fa-gitkraken" },

        { title: "Docker", icon: "fab fa-docker" },
        { title: "Figma", icon: "/images/figma.png" },
        
        
      ],
    },
  ];
  const design = [
    {
      icons: [
        { title: "Photoshop", icon: "/images/ps.png" },
        { title: "Illustrator", icon: "/images/Ai.png" },
        { title: "Premire Pro", icon: "/images/Pr.png" },
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
                          <img src={`${s.icon}`} className="icon1"></img>
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
        <style jsx>{style}</style>
      </Fragment>
    );
  }
  if (id == "tools") {
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
                
                      {s.icon.substring(0, 1) == "/" ? (
                          <img src={`${s.icon}`} className="icon"></img>
                        ) : (
                          <i className={`${s.icon}` }></i>
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
        <style jsx>{style}</style>
      </Fragment>
    );
  }
  if (id == "back") {
    return (
      <Fragment>
        <div className="row">
          <div>
            {backends.map((i, index) => (
              <div key={index}>
                <div className="row">
                  {i.icons.map((s, i) => (
                    <div>
                      <div className="column" key={i}>
                        {s.icon.substring(0, 1) == "/" ? (
                          <img src={`${s.icon}`} className="icon"></img>
                        ) : (
                          <i className={`${s.icon}`}></i>
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
        <style jsx>{style}</style>
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
                        <img src={`${s.icon}`} className="icon"></img>

                        <p className="font">{s.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{style}</style>
      </Fragment>
    );
  }

  return <Fragment>test</Fragment>;
};
export default Skills;
