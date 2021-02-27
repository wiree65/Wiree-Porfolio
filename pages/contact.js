import { Fragment, useState, useEffect } from "react";

import Layout from "../component/Layout";
const General = (props) => {

  return (
    <Fragment>
        <Layout page="contact">
      <div className="container">
       เดี๋ยวมาทำหลังมิดเทอมค้าบ
       
      </div>
      </Layout>
      <style jsx>{`
        .container {
            height:90vh;
            width:100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </Fragment>
  );
};

export default General;
