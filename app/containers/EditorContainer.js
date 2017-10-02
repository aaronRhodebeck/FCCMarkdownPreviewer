import React from "react";
import { Editor } from "../components/Editor";

// Textarea with updating state.text of the current contents and default text of a markdown cheatsheet
export class EditorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.markdownCheatsheet };
    this.textHasChanged = this.textHasChanged.bind(this);
    this.clearDefaultText = this.clearDefaultText.bind(this);
  }

  // Checks the contents of the editor and clears it if the default text is present
  clearDefaultText(e) {
    if (this.state.text === this.props.markdownCheatsheet) {
      e.target.value = "";
      this.textHasChanged(e);
    }
  }

  // Updates current state.text with the current value of the editor and notifies parent
  textHasChanged(e) {
    this.setState({ text: e.target.value });
    this.props.textHasChanged(e.target.value);
  }

  // Notifies parent that text has changed
  componentWillMount() {
    this.props.textHasChanged(this.state.text);
  }

  render() {
    return (
      <Editor
        startingText={this.state.text}
        onChange={this.textHasChanged}
        onFocus={this.clearDefaultText}
      />
    );
  }
}
