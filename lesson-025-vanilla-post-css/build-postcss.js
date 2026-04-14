import postcss from 'postcss';
import postcssModules from 'postcss-modules';
console.log('hello')

const css = `
.button {
    border-radius: 4px;
}
`

const modulePlugin = postcssModules({
    generateScopedName: '[name]__[local]__[hash:base64:5]',
    getJSON(cssFilename, json, outputFilename) {
        console.log(json);
    }
})

postcss([
    modulePlugin
]).process(css, {from: 'bababa.module.css'}).then((result) => {
    console.log(result.css);
})