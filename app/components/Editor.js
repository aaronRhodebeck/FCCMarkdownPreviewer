import React from 'react';
import * as Cheatsheet from '../markdownCheatsheet.js';

var styles = {
    flex: 1,
    background: '#18181B',
    color: '#726564'
}

export class Editor extends React.Component {
    render() {
        return (
                <textarea 
                    style={styles}
                    id='editor'
                    defaultValue={Cheatsheet.getFormattedCheatsheet()}>                    
                </textarea>
        )
    }
}
