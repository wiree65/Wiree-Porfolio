import { Fragment, useState, useEffect } from "react";
import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

// import Dialog from "../component/dialog1";
const Web = (props) => {
  const [popup, setPopup] = React.useState(0);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const setRenderPopup = (number) => {
    setPopup(number);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function Example(props) {
    var items = [
      {
        image: "./images/project/eduroom/imageE/1.png",
      },
      {
        image: "./images/project/eduroom/imageE/2.png",
      },
      {
        image: "./images/project/eduroom/imageE/3.png",
      },
      {
        image: "./images/project/eduroom/imageE/4.png",
      },
      {
        image: "./images/project/eduroom/imageE/5.png",
      },
      {
        image: "./images/project/eduroom/imageE/6.png",
      },
      {
        image: "./images/project/eduroom/imageE/7.png",
      },
    ];

    return (
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    );
  }
  function Item(props) {
    return (
      <Paper>
        <img src={`${props.item.image}`} style={{ width: "100%" }}>
          {}
        </img>
      </Paper>
    );
  }
  const skills = [
    {
      icons: [
        {
          intro: "Eduroom is a project in Integrated Project",
          content:
            " It is an online learning platform that consists of many different systems such as Course, Forum, Learning Path, Message, etc ",
          title: "EDUROOM",
          year: "2020",
          img: "./images/project/eduroom/1.png",
          front: "Front End Framework : NextJS",
          back: "Back End Framework : NodeJS",
          socket: "Real Time: SocketIO",
          db: "PostgreSQL",
          link: " Link : github.com/cs20-sit/eduroom",
          css: "CSS Framework : MaterialUI",
          site: " site : https://eduroom.cscms.me",
        },
        {
          title: "CSB",
          year: "2019",

          img: "./images/project/eduroom/2.png",
          front: "Front End Framework : VueJS",
          back: "Back End Framework : Java Servlet",
          socket: "",
          db: "Database : Microsoft SQL",
          link: " Link : github.com/wiree65/staff",
          css: "CSS Framework : Vuetify",
          site: "",
        },
        
      ],
    },
  ];
  return (
    <Fragment>
      <div className="container1">
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {skills[0].icons[popup].title}
            </DialogTitle>
            <DialogContent>
              {Example()}

              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </div>
        <div>
          {skills.map((i, index) => (
            <div key={index}>
              <div className="row">
                {i.icons.map((s, i) => (
                  <div key={i}>
                    <div className="row">
                      <div className="container">
                        <img
                          src={`${s.img}`}
                          style={{ width: "100%", borderRadius: "32px" }}
                        ></img>

                        <h3 className="font">{s.title}</h3>
                        <p>{s.year}</p>

                        <br />
                        <div className="hoverdiv">
                          <div className="content">
                            <h1>{s.title}</h1>

                            <h5> {s.intro}</h5>
                            <p>{s.content}</p>
                          </div>

                          <button
                            className="button"
                            onClick={() => {
                              handleClickOpen();
                              setRenderPopup(i);
                            }}
                          >
                            <span
                              style={{
                                fontSize: "14px",
                                backgroundColor: "transparent",
                              }}
                            >
                              see more information
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        h1 {
          color: #333333;
        }
        h5 {
          color: #6d6d6d;
        }
        .p {
        }
        .button {
          postion: absolute;
          background-color: #d18585;
          width: 200px;
          height: 40px;
          border-radius: 30px;
          color: white;
          // margin: 10px;
          border: none;
          outline: none;
        }
        .button:hover {
          transition: 0.5s;
          color: #d18585;
          border: solid;
          background-color: white;
          opacity: 1;
          right: 1;
        }
        p {
          color: #6d6d6d;

          padding: 0;
          margin: 10px;
        }
        .content {
          margin: 0;
          padding: 5px;
        }
        .link {
          color: #d18585;
        }
        .container {
          width: 320px;
          box-shadow: 3px 3px 5px 3px #ccc;
          margin: 20px;
          border-radius: 32px;
          transform: scale(1);
          transition: all 0.3s ease-in-out;
        }

        .hoverdiv {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          color: black;
          opacity: 0;
          border-radius: 32px;
          transition: all 0.15s ease-in-out;
          transition-delay: 0.15s;
          box-sizing: border-box;
        }
        .container:hover .hoverdiv,
        .container:active .hoverdiv {
          opacity: 1;
        }

        .container:hover {
          transform: scale(1.03);
        }

        .row {
          flex-wrap: wrap;
          display: flex;
          justify-content: center;
          flex-direction: row;
        }

        .container1 {
          // width: 100vw;
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
