import { Fragment, useState, useEffect } from "react";
import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
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
  useEffect(() => {}, []);
  function Example(props) {
    var item;
    if (popup == 0) {
      item = [
        {
          image: "./images/Graphic/burger/1.png",
        },
        {
          image: "./images/Graphic/burger/2.png",
        },
        {
          image: "./images/Graphic/burger/3.png",
        },
        {
          image: "./images/Graphic/burger/5.png",
        },
        {
          image: "./images/Graphic/burger/6.png",
        },
        {
          image: "./images/Graphic/burger/7.jpg",
        },
      ];
    } else if (popup == 1) {
      item = [
        {
          image: "./images/Graphic/yum/1.png",
        },
        {
          image: "./images/Graphic/yum/2.png",
        },
        {
          image: "./images/Graphic/yum/3.png",
        },
        {
          image: "./images/Graphic/yum/4.png",
        },
        {
          image: "./images/Graphic/yum/5.png",
        },
      ];
    } else if (popup == 2) {
      item = [
        {
          image: "./images/Graphic/gen351/1.jpg",
        },
        {
          image: "./images/Graphic/gen351/2.jpg",
        },
        {
          image: "./images/Graphic/gen351/3.jpg",
        },
        {
          image: "./images/Graphic/gen351/4.jpg",
        },
      ];
    } else if (popup == 3) {
      item = [
        {
          image: "./images/Graphic/kongcha/1.png",
        },
        {
          image: "./images/Graphic/kongcha/2.png",
        },
        {
          image: "./images/Graphic/kongcha/3.png",
        },
      ];
    } else if (popup == 4) {
      item = [
        {
          image: "./images/Graphic/spa/1.png",
        },
        {
          image: "./images/Graphic/spa/2.png",
        },
        {
          image: "./images/Graphic/spa/3.png",
        },
      ];
    } else if (popup == 5) {
      item = [
        {
          image: "./images/Graphic/company/1.jpg",
        },
        {
          image: "./images/Graphic/company/2.jpg",
        },
      ];
    } else if (popup == 6) {
      item = [
        {
          image: "./images/Graphic/company1/1.jpg",
        },
        {
          image: "./images/Graphic/company1/2.jpg",
        },
      ];
    } else if (popup == 7) {
      item = [
        {
          image: "./images/Graphic/gen121/1.png",
        },
        {
          image: "./images/Graphic/gen121/2.png",
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
          intro: "Burger Joker",
          content: "It's restaurant that I design a logo, menu, promotions",
          year: "2020",
          img: "./images/Graphic/burger/2.png",
          picinhover: "./images/Graphic/burger/7.jpg",
          width: "190px",
          widthHov: "150px",
          radius: "32px 32px 0px 0px",
        },
        {
          intro: "Yum Yod Chai",
          content: "Design logo, menu, drawing plan",
          year: "2020",
          img: "./images/Graphic/yum/1.png",
          picinhover: "./images/Graphic/yum/2.png",
          width: "190px",
          widthHov: "210px",
          radius: "0px 0px 0px 0px",
        },
        {
          intro: "Infographic Presentation GEN351",
          content: "Term project GEN351 final Presentation infographic",
          year: "2020",
          img: "./images/Graphic/gen351/1.jpg",
          picinhover: "./images/Graphic/gen351/1.jpg",
          width: "100%",
          widthHov: "170px",
          radius: "32px 32px 0px 0px",
        },

        {
          intro: "Milk Tea Shop Logo",
          content:
            "This is the milk tea shop logo by using Illustrator to create",
          year: "2020",
          img: "./images/Graphic/kongcha/1.png",
          picinhover: "./images/Graphic/kongcha/1.png",
          width: "185px",
          widthHov: "100px",
          radius: "0px 0px 10px 10px",
        },
        {
          intro: "Advertisement Facebook Spa",
          content: "ADs Facebook spa to promote the event of the shop",
          year: "2020",
          img: "./images/Graphic/spa/1.png",
          picinhover: "./images/Graphic/spa/2.png",
          width: "320px",
          widthHov: "130px",
          radius: "32px 32px 0px 0px",
        },
        {
          intro: "Enercon Company Profile",
          content: "Company Profile of Enercon Enginerring Co., Ltd.",
          year: "2020",
          img: "./images/Graphic/company/1.jpg",
          picinhover: "./images/Graphic/company/2.jpg",
          width: "125px",
          widthHov: "70px",
          radius: "32px 32px 0px 0px",
        },
        {
          intro: "OPH Constuction Company Profile",
          content: "OPH Constuction Company Profile",
          year: "2019",
          img: "./images/Graphic/company1/1.jpg",
          picinhover: "./images/Graphic/company1/2.jpg",
          width: "250px",
          widthHov: "160px",
          radius: "0px 0px 0px 0px",
        },
        {
          intro: "Infographic Presentation GEN121",
          content: "Term project GEN121 final Presentation infographic",
          year: "2019",
          img: "./images/Graphic/gen121/1.png",
          picinhover: "./images/Graphic/gen121/1.png",
          width: "130px",
          widthHov: "70px",
          radius: "0px 0px 10px 10px",
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
                          style={{
                            width: `${s.width}`,
                            borderRadius: s.radius,
                          }}
                        ></img>

                        <h3 className="font">{s.intro}</h3>
                        <p>{s.year}</p>

                        <br />
                        <div className="hoverdiv">
                          <div className="content">
                            <h5> {s.intro}</h5>

                            <img
                              src={`${s.picinhover}`}
                              style={{
                                width: `${s.widthHov}`,
                                borderRadius: "10px",
                              }}
                            ></img>
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
          height: 300px;
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
