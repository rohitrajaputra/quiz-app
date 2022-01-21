import React from "react";

const Results = ({ score }) => {
  return (
    <div className="ui placeholder segment" style={{ marginTop: "100px" }}>
      <div className="ui icon header">
        <div className="content">
          <h1>Score Card</h1>
        </div>
      </div>
      <div className="ui horizontal statistics" style={{ margin: "auto" }}>
        <div className="statistic">
          <div className="content"></div>
          <div
            className={`ui ${score <= 5 ? "red" : "green"} horizontal label`}
          >
            {score <= 5 ? "Fail" : "Pass"}
          </div>
        </div>
      </div>
      <div className="ui middle aligned segment divided list">
        <div className="item" style={{ padding: "10px" }}>
          <div className="right floated content">
            <h4>{score}</h4>
          </div>
          <div className="content">
            <h4>No of Correct Answers : </h4>
          </div>
        </div>
        <div className="item" style={{ padding: "10px" }}>
          <div className="right floated content">
            <h4>{10 - score}</h4>
          </div>
          <div className="content">
            <h4>No of Wrong Answers : </h4>
          </div>
        </div>
      </div>
      <div className="inline">
        <div
          className="ui primary button"
          onClick={() => {
            window.location.reload();
          }}
        >
          Re-take Test
        </div>
      </div>
    </div>
  );
};

export default Results;
