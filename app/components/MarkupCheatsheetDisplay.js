import React from "react";
import * as Cheatsheet from "../markdownCheatsheet.js";

export class MarkupCheatsheetDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: this.props.hidden };
  }

  // Styles must be set in class because visibility needs to be set based on state
  setVisibilty() {
    let styles = {
      backgroundColor: "#18181B",
      color: "#777069",
      position: "absolute",
      left: "51vw",
      top: 20,
      padding: 15,
      borderRadius: 5,
      textAlign: "left",
      fontSize: ".9em",
      opacity: 0.9
    };
    styles.visibility = this.state.hidden ? "hidden" : "visible";
    return styles;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ hidden: nextProps.hidden });
  }

  render() {
    return (
      <div style={this.setVisibilty()}>
        <pre>{Cheatsheet.getFormattedCheatsheet()}</pre>
      </div>
    );
  }
}
