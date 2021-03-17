import { Fragment, useState, useEffect } from "react";
import Header from "./Header";
import Sidenav from "../component/Nav";


const General = (props) => {
  return (
    <Fragment>
      <Header></Header>
      <div className="container">
        <Sidenav page={props.page}></Sidenav>
        <div>
          <main>{props.children}</main>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </Fragment>
  );
};

export default General;
