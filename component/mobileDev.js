import { Fragment, useState, useEffect } from "react";
import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Carousel from "react-material-ui-carousel";

import { Paper } from "@material-ui/core";
const Mobile = (props) => {
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
  useEffect(() => {}, []);
  function Example(props) {
    var item;
    if (popup == 1) {
      item = [
        {
          image: "./images/project/mobileDev/1.png",
        },
        {
          image: "./images/project/mobileDev/2.png",
        },
        {
          image: "./images/project/mobileDev/3.png",
        },
        {
          image: "./images/project/mobileDev/4.png",
        },
        {
          image: "./images/project/mobileDev/5.png",
        },
        {
          image: "./images/project/mobileDev/6.png",
        },
        {
          image: "./images/project/mobileDev/7.png",
        },
        {
          image: "./images/project/mobileDev/8.png",
        },
        {
          image: "./images/project/mobileDev/9.png",
        },
        {
          image: "./images/project/mobileDev/10.png",
        },
        {
          image: "./images/project/mobileDev/11.png",
        },
        {
          image: "./images/project/mobileDev/12.png",
        },
        {
          image: "./images/project/mobileDev/13.png",
        },
        {
          image: "./images/project/mobileDev/14.png",
        },
        {
          image: "./images/project/mobileDev/15.png",
        },
        {
          image: "./images/project/mobileDev/16.png",
        },
      ];
    } else if (popup == 0) {
      item = [
        {
          image: "./images/project/mobileDev/17.png",
        },
        {
          image: "./images/project/mobileDev/18.png",
        },
        {
          image: "./images/project/mobileDev/19.png",
        },
        {
          image: "./images/project/mobileDev/20.png",
        },
        {
          image: "./images/project/mobileDev/21.png",
        },
        {
          image: "./images/project/mobileDev/22.png",
        }, {
          image: "./images/project/mobileDev/23.png",
        }, {
          image: "./images/project/mobileDev/24.png",
        }, {
          image: "./images/project/mobileDev/25.png",
        }, {
          image: "./images/project/mobileDev/26.png",
        }, 
        
      ];
    }

    return (
      <Carousel>
        {item.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    );
  }
  function Item(props) {
    return (
      <Paper
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <img
          src={`${props.item.image}`}
          style={{ width: "30%", boxShadow: " 3px 3px 5px 3px #ccc" }}
        >
          {}
        </img>
      </Paper>
    );
  }
  const skills = [
    {
      icons: [
        {
          intro: "DekCare Project",
          content:
            " An online application taht provide community, consultation doctors and analysis poop health​ ",
          title: "DekCare",
          year: "2021",
          img: "./images/project/mobileDev/dekcare.png",
          front: "Flutter",
          width: "235px",
          back: "Express",
          socket: "",
          db: "MySql",
          link: "",
          css: "",
          site: "",
        },
        {
          intro: "Memby Management System",
          content:
            " An online membership system application for SMEs and online shop owner​ ",
          title: "Memby",
          year: "2021",
          img: "./images/project/mobileDev/memby.png",
          front: "Flutter",
          width: "300px",
          back: "Firebase",
          socket: "",
          db: "Firestore",
          link: "",
          css: "",
          site: "",
        },
        
      ],
    },
  ];
  return (
    <Fragment>
      <div className="container1">
        <div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <h3> {skills[0].icons[popup].title}</h3>
            </DialogTitle>
            <DialogContent>
              {Example()}

              <br />
              <DialogContentText id="alert-dialog-description">
                {skills[0].icons[popup].content == "" ? (
                  <div>{}</div>
                ) : (
                  <p>
                    <storng style={{ fontSize: "20px" }}>Detail: </storng>
                    {skills[0].icons[popup].content}
                  </p>
                )}
                {skills[0].icons[popup].front == "" ? (
                  <div>{}</div>
                ) : (
                  <p>
                    <storng style={{ fontSize: "20px" }}>Framework: </storng>
                    {skills[0].icons[popup].front}
                  </p>
                )}
                {skills[0].icons[popup].back == "" ? (
                  <div>{}</div>
                ) : (
                  <p>
                    <storng style={{ fontSize: "20px" }}>
                      Backend Framework:{" "}
                    </storng>
                    {skills[0].icons[popup].back}
                  </p>
                )}
                {skills[0].icons[popup].db == "" ? (
                  <div>{}</div>
                ) : (
                  <p>
                    <storng style={{ fontSize: "20px" }}>Database: </storng>
                    {skills[0].icons[popup].db}
                  </p>
                )}
                {skills[0].icons[popup].socket == "" ? (
                  <div>{}</div>
                ) : (
                  <p>
                    <storng style={{ fontSize: "20px" }}>Real-time </storng>
                    {skills[0].icons[popup].socket}
                  </p>
                )}

                {skills[0].icons[popup].link == "" ? (
                  <div>{}</div>
                ) : (
                  <p>
                    <storng style={{ fontSize: "20px" }}>Link: </storng>
                    {skills[0].icons[popup].link}
                  </p>
                )}
                {skills[0].icons[popup].site == "" ? (
                  <div>{}</div>
                ) : (
                  <p>
                    <storng style={{ fontSize: "20px" }}>Site: </storng>
                    {skills[0].icons[popup].site}
                  </p>
                )}
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
                          style={{ width: `${s.width}`, borderRadius: "32px" }}
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

export default Mobile;
