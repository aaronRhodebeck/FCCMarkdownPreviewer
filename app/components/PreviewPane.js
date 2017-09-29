import React from 'react';

var styles = {
    flex: 1,
    height: '100vh',
    overflow: 'auto',
}

// Presentation class to display passed in HTML requiring text
export class PreviewPane extends React.Component {
    render() {
        return (
            <div
                style={styles} 
                id='preview' 
                dangerouslySetInnerHTML={this.props.html}>
            </div>
        )
    }
}