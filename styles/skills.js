import css from "styled-jsx/css";
export default css`
i {
    color: #d18585;
    font-size: 35px;
  }
  .icon1 {
    width: 57px;
  }
  .icon {
    width: 40px;
  }
  .row {
    display: flex;
    justify-content: center;
    text-align:center;
    align-items: center;
  }
  .column {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .font {
    font-size: 13px;
    font-weight: 500;
  }
  @media only screen and (max-width: 768px) {
    i {
      color: #d18585;
      font-size: 25px;
    }
    .font {
      font-size: 10px;
      font-weight: 500;
    }
    .icon {
      width: 42.5px;
    }
    .icon1 {
      width: 42.5px;
    }
    .column {
      margin: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;
