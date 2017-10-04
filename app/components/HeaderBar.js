import React from "react";
import { EditorHeaderButton } from "./EditorHeaderButton";
import { MarkupCheatsheetButton } from "../containers/MarkupCheatsheetButton";
import { PreviewHeaderButton } from "../components/PreviewHeaderButton";

let sharedStyles = {
  display: "flex",
  textAlign: "center",
  marginTop: -15,
  fontFamily: "Caveat",
  fontSize: "1.3em",
  zIndex: "1"
};

let editorBarStyles = {
  flex: 1,
  backgroundColor: "#18181B",
  display: "flex"
};

let previewBarStyles = {
  flex: 1,
  borderWidth: 2,
  borderColor: "gray",
  borderStyle: "solid",
  borderBottomWidth: 0,
  display: "flex"
};

let editorTitleStyles = {
  color: "#777069",
  flex: 1
};

let previewTitleStyles = {
  color: "#696977",
  flex: 1
};

export class HeaderBar extends React.Component {
  render() {
    return (
      <div id="header-bar" style={sharedStyles}>
        <div id="editor-bar" style={editorBarStyles}>
          <h3 id="editor-title" style={editorTitleStyles}>
            Editor
          </h3>
          <MarkupCheatsheetButton />
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
