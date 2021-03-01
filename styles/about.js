import css from "styled-jsx/css";
export default css`
  .profilePic {
    background-image: url(./images/1.jpg);
    background-size: cover;
    border-radius: 50%;
    trainsition: 5s;

    width: 350px;
    height: 350px;
    margin: 30px;
    animation: profile 10s infinite;
  }
  @keyframes profile {
    0% {
      background-image: url(./images/1.jpg);
      border-radius: 50%;
    }
    25% {
      background-image: url(./images/2.jpg);
      border-radius: 50%;
    }
    50% {
      background-image: url(./images/3.jpg);
      border-radius: 50%;
    }
    75% {
      background-image: url(./images/4.jpg);
      border-radius: 50%;
    }
    100% {
      background-image: url(./images/1.jpg);
      border-radius: 50%;
    }
  }
  .line {
    background-color: #d18585;
    width: 100%;
    height: 3px;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
  .info {
    margin-left: -80px;
    display: flex;
    flex-direction: row;
  }

  .card {
    display: flex;
    justify-content: center;
    background: white;
    transition: 0.3s;
    width: 500px;
    padding: 50px;
    border-radius: 2vh;
    border: none;
    box-shadow: 3px 3px 5px 3px #ccc;
    padding: 0 10px 5px 30px;
    flex-direction: column;
  }
  .card1 {
    height: 140px;
    display: flex;

    background: white;
    transition: 0.3s;
    width: 450px;
    padding: 10px;
    border-radius: 2vh;
    border: none;
    box-shadow: 3px 3px 5px 3px #ccc;
    flex-direction: column;
  }
  .motion {
    position: relative;
    animation: mymove 1s;
  }
  @keyframes mymove {
    from {
      top: 100px;
    }
    to {
      top: 0px;
    }
  }

  .container-card {
    display: flex;
    margin-left: 3%;
    align-items: flex-start;
    flex-direction: column;
  }
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
  }
  .container1 {
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
  }

  .column-con {
    margin-top: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
  .row-con {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
  }
  .typing {
    width: 550px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .text {
    font-size: 3.6rem;
    margin: 0px;
    padding: 0px;
  }

  @keyframes example {
    0% {
      opacity: 0%;
    }
    25% {
      opacity: 40%;
    }
    50% {
      opacity: 60%;
    }
    75% {
      opacity: 80%;
    }
    100% {
      opacity: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    .typing {
      width: 300px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .column-con {
      margin: 0px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
    }
    .info {
      margin-left: 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .profilePic {
      width: 250px;
      height: 250px;
    }
    .text {
      text-align: center;
      font-size: 2rem;
    }
    .container {
      height: 100%;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .container1 {
      height: 100%;
      width: 100vw;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
    }

    .line {
      background-color: #d18585;
      width: 100%;
      height: 3px;
    }

    .container-card {
      width: 95%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0px;
    }
    .card {
      display: flex;
      padding: 5px;
      justify-content: center;
      background: white;
      transition: 0.3s;
      width: 100%;
      border-radius: 2vh;
      border: none;
      box-shadow: 3px 3px 5px 3px #ccc;

      flex-direction: column;
    }
    p {
      padding: 0px;
      font-size: 0.8rem;
      margin: 5px;
      text-align: center;
    }
    .card1 {
      height: 90%;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      background: white;
      transition: 0.3s;

      padding: 50px;
      border-radius: 2vh;
      border: none;
      box-shadow: 3px 3px 5px 3px #ccc;
      padding: 0 10px 5px 30px;
      flex-direction: column;
      padding: 0px;
    }
    .row {
      display: flex;
      margin-top: 10px;
      flex-direction: row;
    }
  }
`;
