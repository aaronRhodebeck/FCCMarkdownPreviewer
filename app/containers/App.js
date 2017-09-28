import React from 'react';
import ReactDOM from 'react-dom';
import { Editor } from '../components/Editor';
import { PreviewPane } from '../components/PreviewPane';
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
                <Editor />
                <PreviewPane />
            </div>
        );
    }
}