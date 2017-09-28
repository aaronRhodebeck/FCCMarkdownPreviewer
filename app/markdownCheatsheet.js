export var markdownCheatsheet = {
    h1: '# This is an <h1> tag',
    h2: '## This is an <h2> tag',
    link: '[This is a link](www.freecodecamp.com)',
    image: '![Image Title](https://s3.amazonaws.com/freecodecamp/landingIcons_nonprofits.svg)',
    italic: '*This text is italic*, _So is this text_',
    bold: '**This text is bold**, __So is this text__',
    uolist: `
* This is an
* unordered list item
    * This is a sub item`,
    orlist: `
1. This is an
2. ordered list item
    * This is a sub item`,
    quote:`
> This is a block quote
> that continues for two lines`,
    code: `
\`\`\`javascript
function codeBlock(param) {
    console.log('This is a code block w/ syntax highlighting')
}
\`\`\``,
}

export function getFormattedCheatsheet() {
    let arr = [];
    for (let key in markdownCheatsheet) {
        arr.push(markdownCheatsheet[key]);
    }
    return arr.join('\n');
}
