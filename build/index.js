const rollup = require("rollup");
const path = require("path");
const util = require("util");
const fs = require("fs");
const configFactory = require('./rollup.config');
const { promisify } = util;
const promisifyReadDir = promisify(fs.readdir);
const formatName = n => n.replace(/\.js/, '').replace('-', '_');
async function build(options){
    const bundle = await rollup.rollup(options.input);
    await bundle.write(options.output);
}
(async () => {
    try{
        const entrances = await promisifyReadDir(path.join(__dirname, '../src'));
        entrances.forEach((item) => {
            build(configFactory({
                input: `./src/${item}`,
                fileName: `./dist/${item}`,
                name: `${formatName(item)}`
            }));
        });
        console.log('build end');
    }catch(e){
        console.log(e);
    }
})();