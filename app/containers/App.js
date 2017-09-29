import React from 'react';
import ReactDOM from 'react-dom';
import { EditorContainer } from './EditorContainer';
import { PreviewPane } from '../components/PreviewPane';
import * as Cheatsheet from '../markdownCheatsheet.js';
import marked from 'marked';

var styles = {
    display: 'flex',
}

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