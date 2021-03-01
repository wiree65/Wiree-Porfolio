import css from "styled-jsx/css";
export default css`
  .line {
    background-color: #d18585;
    width: 320px;
    height: 3px;
  }
  .containerButon {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .motion {
    position: relative;
    animation: mymove 1s;
  }

  .button {
    background-color: #d18585;
    width: 200px;
    height: 40px;
    border-radius: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
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

  .container {
    min-height: 85vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  .column-con {
    //   margin-top: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .row-con {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .typing {
    margin: 0px;
    padding: 0px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: example;
    animation-duration: 4s;
  }
  .text {
    font-size: 2rem;
  }

  @keyframes example {
    0% {
      opacity: 0%;
    }
    25% {
      opacity: 60%;
    }
    50% {
      opacity: 80%;
    }
    75% {
      opacity: 90%;
    }
    100% {
      opacity: 100%;
    }
  }
`;
