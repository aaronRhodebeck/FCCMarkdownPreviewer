import React from 'react';

var styles = {
    flex: 1,
    background: 'powderblue'
}

export class Editor extends React.Component {
    render() {
        return (
                <textarea style={styles} id='editor'></textarea>
        )
    }
}

