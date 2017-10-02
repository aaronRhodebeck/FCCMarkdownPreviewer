import React from "react";
import { EditorHeaderButton } from "../components/EditorHeaderButton";
import { MarkupCheatsheetDisplay } from "../components/MarkupCheatsheetDisplay";

export class MarkupCheatsheetButton extends React.Component {
  onClick() {}
  render() {
    return (
      <div style={{ float: "right" }}>
        <EditorHeaderButton onClick={this.onClick} />
        <MarkupCheatsheetDisplay />
      </div>
    );
  }
}
