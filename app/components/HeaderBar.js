import React from "react";

let sharedStyles = {
  display: "flex",
  textAlign: "center",
  marginTop: -15,
  marginBottom: -30,
  fontFamily: "Caveat",
  fontSize: "1.3em"
};

let editorBarStyles = {
  flex: 1,
  backgroundColor: "#18181B"
};

let previewBarStyles = {
  flex: 1,
  borderWidth: 2,
  borderColor: "gray",
  borderStyle: "solid",
  borderBottomWidth: 0
};

let editorTitleStyles = {
  color: "#777069"
};

let previewTitleStyles = {
  color: "#696977"
};

export class HeaderBar extends React.Component {
  render() {
    return (
      <div id="header-bar" style={sharedStyles}>
        <div id="editor-bar" style={editorBarStyles}>
          <h3 id="editor-title" style={editorTitleStyles}>
            Editor
          </h3>
        </div>
        <div id="preview-bar" style={previewBarStyles}>
          <h3 id="preview-title" style={previewTitleStyles}>
            Preview
          </h3>
        </div>
      </div>
    );
  }
}
