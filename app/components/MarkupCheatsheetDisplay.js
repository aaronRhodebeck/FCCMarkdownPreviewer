import React from "react";
import * as Cheatsheet from "../markdownCheatsheet.js";

let styles = {
  backgroundColor: "#18181B",
  color: "#777069",
  position: "absolute",
  left: "51vw",
  top: 20,
  padding: 15,
  borderRadius: 5,
  opacity: ".9",
  textAlign: "left",
  fontSize: ".9em"
};

export class MarkupCheatsheetDisplay extends React.Component {
  render() {
    return (
      <div style={styles}>
        <pre>{Cheatsheet.getFormattedCheatsheet()}</pre>
      </div>
    );
  }
}
