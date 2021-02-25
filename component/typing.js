import { Fragment } from "react";

const Tying = ({}) => {
  return (
    <Fragment>
      <p className="line anim-typewriter">Wirawat Jaiarree</p>

      <style jsx>{`
        .line {
          color: "#D18585";
          width: 2em;
          margin: 0px;
          border-right: 2px solid rgba(255, 255, 255, 0.75);
          // font-size: 180%;
          font-weight: 500;
          // text-align: center;
          white-space: nowrap;
          overflow: hidden;
          // transform: translateY(-50%);
        }

        .anim-typewriter {
          animation: typewriter 2s steps(40) 1s 1 normal both,
            blinkTextCursor 300ms steps(40) infinite normal;
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 7.8em;
          }
        }

        @keyframes blinkTextCursor {
          from {
            border-right-color: black;
          }
          to {
            border-right-color: transparent;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Tying;
