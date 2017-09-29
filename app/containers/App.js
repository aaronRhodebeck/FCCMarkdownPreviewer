import React from 'react';
import ReactDOM from 'react-dom';
import { EditorContainer } from './EditorContainer';
import { PreviewPane } from '../components/PreviewPane';
import * as Cheatsheet from '../markdownCheatsheet.js';
import marked from 'marked';
import highlight from 'highlightjs';

// Create a custom renderer for markdown
var renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a href="${href}" target="_blank" title="${title}">${text}</a>`
}
marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
        return highlight.highlightAuto(code).value;
    }
})

// Styling for the div containing both components of the app
var styles = {
    display: 'flex',
}

// Renders the Editor and Previewer
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorText: "", htmlToDisplay: {__html: `<h1>Preview</h1>`}};
        this.editorTextChanged = this.editorTextChanged.bind(this);
    }
    
    editorTextChanged(textInEditor) {
        this.setState({editorText: textInEditor});
        this.setState({htmlToDisplay: this.convertToHTML(textInEditor)});
    }

    convertToHTML(markdown) {
        return {__html: marked(markdown)};
    }

    render() {
        return (
            <div style={styles}>
                <EditorContainer
                    markdownCheatsheet={Cheatsheet.getFormattedCheatsheet()}
                    textHasChanged={this.editorTextChanged} />
                <PreviewPane text={this.state.htmlToDisplay}/>
            </div>
        );
    }
}