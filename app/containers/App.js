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
        this.state = {editorText: "", htmlToDisplay: ""};
        this.editorTextChanged = this.editorTextChanged.bind(this);
    }

    editorTextChanged(textInEditor) {
        this.setState({editorText: textInEditor});
        this.setState({htmlToDisplay: this.convertToHTML(this.state.editorText)});
    }

    convertToHTML(markdown) {
        return {__html: `<p>Test</p>`}
    }

    render() {
        return (
            <div style={styles}>
                <EditorContainer
                    markdownCheatsheet={Cheatsheet.getFormattedCheatsheet()}
                    textHasChanged={this.editorTextChanged} />
                <PreviewPane text={this.convertToHTML('')}/>
            </div>
        );
    }
}