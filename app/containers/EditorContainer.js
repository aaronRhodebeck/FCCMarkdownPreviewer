import React from 'react';
import { Editor } from '../components/Editor';

export class EditorContainer extends React.Component {
    constructor() {
        super();
        this.state = {value: ""}
        this.textHasChanged = this.textHasChanged.bind(this);
    }
    textHasChanged(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return <Editor 
                    startingText={this.props.markdownCheatsheet}
                    onChange={this.textHasChanged} />;
    }
}