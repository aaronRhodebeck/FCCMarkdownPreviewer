import React from "react";
import ReactDOM from "react-dom";
import { EditorContainer } from "./EditorContainer";
import { PreviewPane } from "../components/PreviewPane";
import * as Cheatsheet from "../markdownCheatsheet.js";
import marked from "marked";
import highlight from "highlightjs";

// Create a custom renderer for markdown
var renderer = new marked.Renderer();

// Change behavior of link to open in new window and add http if missing
renderer.link = function(href, title, text) {
  href = addHttpIfMissing(href);
  return `<a href="${href}" target="_blank" title="${title}">${text}</a>`;

  function addHttpIfMissing(href) {
    let webPrefix = new RegExp("^(http|https)://");
    if (!href.match(webPrefix)) {
      href = "http://" + href;
    }
    return href;
  }
};

// Setup options for the marked markdown renderer
// Info at https://www.npmjs.com/package/marked
marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: function(code) {
    return highlight.highlightAuto(code).value;
  }
});

// Styling for the div containing both components of the app
var styles = {
  display: "flex",
  height: "100vh"
};

// Renders the Editor and Previewer
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { htmlToDisplay: { __html: `<h1>Preview</h1>` } };
    this.editorTextChanged = this.editorTextChanged.bind(this);
  }

  editorTextChanged(textInEditor) {
    this.setState({ htmlToDisplay: this.convertToHTML(textInEditor) });
  }

  convertToHTML(markdown) {
    // Runs the text passed in through the marked renderer and returns html
    return { __html: marked(markdown) };
  }

  render() {
    return (
      <div style={styles}>
        {/* Passes the markdownCheatsheet to the Editor for default text */}
        <EditorContainer
          markdownCheatsheet={Cheatsheet.getFormattedCheatsheet()}
          textHasChanged={this.editorTextChanged}
        />
        <PreviewPane html={this.state.htmlToDisplay} />
      </div>
    );
  }
}
