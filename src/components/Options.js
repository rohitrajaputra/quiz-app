import React from "react";

const Options = (props) => {
  return (
    <div
      className={`ui message ${props.selected === props.content ? "blue" : ""}`}
      onClick={() => {
        props.onClickHandler(props.content);
      }}
      style={{ cursor: "pointer" }}
    >
      <div className="content">
        <p className="ui blue ribbon label">{`Option ${props.option}`}</p>
        <div
          className="header"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};

export default Options;
