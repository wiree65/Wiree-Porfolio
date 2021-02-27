import { Fragment, useState, useEffect } from "react";
const Graphic = (props) => {
  return (
    <Fragment>
      <div className="container">Graphic</div>

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

export default Graphic;
