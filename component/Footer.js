import { Fragment } from "react";
const Footer = () => {
  return (
    <Fragment>
      <div className="box">
        <div className="content">
          All right reserved © by "Wirawat Jaiarree"
        </div>
      </div>
      
      <style jsx>{`
        .box {
          height: 10vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .content {
          font-weight: 400;
          font-size: 18px;
          letter-spacing: 2px;
          text-align: center;
        }
        @media only screen and (max-width: 720px) {
          .content {
            font-weight: 400;
            font-size: 12px;
            letter-spacing: 2px;
            text-align: center;
          }
      `}</style>
    </Fragment>
  );
};

export default Footer;
