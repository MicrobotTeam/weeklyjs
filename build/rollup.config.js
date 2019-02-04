const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

module.exports = (options) => {
    const {input , fileName, name} = options;
    return {
        input: {
            input,
            plugins: [
                resolve(),
                babel({
                  exclude: 'node_modules/**'
                })
            ]
        },
        output: {
            file: fileName,
            format: 'umd',
            name: name || 'weeklyjs'
        }
    };
};