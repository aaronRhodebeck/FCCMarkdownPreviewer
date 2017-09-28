import React from 'react';

var styles = {
    flex: 1,
    height: '100vh',
    overflow: 'auto',
}

export class PreviewPane extends React.Component {
    render() {
        return (
            <div style={styles} id='preview'>
                <h1>Preview</h1>
            </div>
        )
    }
}