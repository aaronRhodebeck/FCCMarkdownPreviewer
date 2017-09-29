import React from 'react';

var styles = {
    flex: 1,
    background: '#18181B',
    color: '#726564',
    padding: 10,
    borderWidth: 3,
    borderColor: '#1F212C',
}

// Presentation class of a text editor expecting onChange and onFocus
export class Editor extends React.Component {
    render() {
        return (
                <textarea 
                    style={styles}
                    id='editor'
                    defaultValue={this.props.startingText}
                    onChange={this.props.onChange} 
                    onFocus={this.props.onFocus}>                    
                </textarea>
        )
    }
}
