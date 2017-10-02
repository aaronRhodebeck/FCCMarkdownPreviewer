import React from "react";
import * as Cheatsheet from "../markdownCheatsheet.js";

let styles = {
  width: 300,
  backgroundColor: "#18181B",
  color: "#777069",
  position: "absolute",
  left: "51vw",
  top: 20,
  borderRadius: 5,
  opacity: ".9"
};

export class MarkupCheatsheetDisplay extends React.Component {
  render() {
    return (
      <div style={styles}>
        <p />
      </div>
    );
  }
}
