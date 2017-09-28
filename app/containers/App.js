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
    convertMarkdown() {

    }

    render() {
        return (
            <div style={styles}>
                <EditorContainer markdownCheatsheet={Cheatsheet.getFormattedCheatsheet()} />
                <PreviewPane />
            </div>
        );
    }
}