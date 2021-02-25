import { Fragment, useState, useEffect } from "react";

const Skills = (props) => {
  return (
    <Fragment>
      <div className="row">
        <div>
          <i className="fab fa-html5" style={{color:'#d18585',fontSize:'30px'}}></i>
          <p className="font">HTML5</p>
        </div>
      </div>
      <style jsx>{`
      .row{
          display:flex;
          justify-content:center;
      }
        .font {
          font-size: 15px;
         font-weight:400;
        }
      `}</style>
    </Fragment>
  );
};

export default Skills;
