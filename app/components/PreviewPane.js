import React from "react";

var styles = {
  flex: 1,
  overflow: "auto",
  padding: 13,
  boxSizing: "border-box",
  borderWidth: 2,
  borderColor: "gray",
  borderStyle: "solid",
  borderTopWidth: 0,
  marginTop: -20,
  marginBottom: 0
};

// Presentation class to display passed in HTML requiring text
export class PreviewPane extends React.Component {
  render() {
    return (
      <div
        style={styles}
        id="preview"
        dangerouslySetInnerHTML={this.props.html}
      />
    );
  }
}
