import { Fragment, useState, useEffect } from "react";
const Web = (props) => {
  return (
    <Fragment>
      <div className="container">web</div>

      <style jsx>{`
        .container {
          height: 90vh;
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
