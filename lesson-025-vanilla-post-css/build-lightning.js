import {transform} from 'lightningcss';

const css = `
.button {
    border-radius: 4px;
}
`

const result = transform({
    filename: 'bababa.module.css',
    code: Buffer.from(css),
    cssModules: {
        pattern: '[name]_[local]_[hash]',
    }
})

console.log(result.code.toString())