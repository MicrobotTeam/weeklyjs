module.exports = (options) => {
    const {input , fileName, name} = options;
    return {
        input: {
            input
        },
        output: {
            file: fileName,
            format: 'umd',
            name: name || 'weeklyjs'
        }
    };
};