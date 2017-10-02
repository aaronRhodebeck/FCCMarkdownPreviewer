import React from "react";
import { EditorHeaderButton } from "../components/EditorHeaderButton";
import { MarkupCheatsheetDisplay } from "../components/MarkupCheatsheetDisplay";

export class MarkupCheatsheetButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cheatsheetIsHidden: true };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({ cheatsheetIsHidden: !this.state.cheatsheetIsHidden });
  }

  render() {
    return (
      <div style={{ float: "right" }}>
        <EditorHeaderButton onClick={this.onClick} />
        <MarkupCheatsheetDisplay hidden={this.state.cheatsheetIsHidden} />
      </div>
    );
  }
}
