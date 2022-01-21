import React from "react";

const Questions = (props) => {
  return (
    <div className="ui message">
      <div className="content">
        <p className="ui red ribbon label">{`Question : ${props.count}/10`}</p>
        <div
          className="header"
          style={{ marginTop: "10px" }}
          dangerouslySetInnerHTML={{ __html: props.question }}
        />
        <div className="ui basic right aligned segment">
          <p className="ui horizontal label">{props.difficulty}</p>
          <p className="ui horizontal label">{props.category}</p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
