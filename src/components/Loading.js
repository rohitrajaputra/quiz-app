import React from "react";

const Loading = () => {
  return (
    <div
      className="ui center aligned basic segment"
      style={{ marginTop: "100px" }}
    >
      <div className="ui icon message">
        <i className="notched circle loading icon"></i>
        <div className="content">
          <div className="header">Loading ...</div>
          <p>fetching data.</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
