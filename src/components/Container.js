import React from "react";

const Container = props =>
  <center>
    <div className={`container${props.fluid ? "-fluid" : ""}`}>
      <row>
        <h2>Click on an Image to earn point, But be careful not to click the same character twice... or they might not be back...</h2>
      </row>
      {props.children}
    </div>
  </center>
export default Container;
