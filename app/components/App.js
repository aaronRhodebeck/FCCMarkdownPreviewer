import React from 'react';
import ReactDOM from 'react-dom';
import { Editor } from './Editor';
import { PreviewPane } from './PreviewPane';

var styles = {
    display: 'flex',
}

export class App extends React.Component {
    render() {
        return (
            <div style={styles}>
                <Editor />
                <PreviewPane />
            </div>
        );
    }
}