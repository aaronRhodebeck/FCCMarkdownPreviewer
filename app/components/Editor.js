import React from "react";

var styles = {
  flex: 1,
  background: "#18181B",
  color: "#777069",
  padding: 10,
  borderWidth: 3,
  borderColor: "#1F212C",
  borderStyle: "solid",
  resize: "none",
  overflowY: "auto",
  margin: 0
};

// Presentation class of a text editor expecting onChange and onFocus
export class Editor extends React.Component {
  render() {
    return (
      <textarea
        style={styles}
        id="editor"
        defaultValue={this.props.startingText}
        onChange={this.props.onChange}
        onFocus={this.props.onFocus}
      />
    );
  }
}
