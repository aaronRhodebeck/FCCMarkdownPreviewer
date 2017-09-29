import React from 'react';
import { Editor } from '../components/Editor';

export class EditorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: this.props.markdownCheatsheet}
        this.textHasChanged = this.textHasChanged.bind(this);
    }

    textHasChanged(e) {
        this.setState({text: e.target.value});
        this.props.textHasChanged(e.target.value);
    }

    componentWillMount() {
        this.props.textHasChanged(this.state.text);
    }

    render() {
        return <Editor 
                    startingText={this.state.text}
                    onChange={this.textHasChanged} />;
    }
}