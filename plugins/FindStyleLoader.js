// const excluded_directories = require('../../gulp_tasks/excluded_directories');
import * as path from "path";
//import { getTypeScriptInstance, getEmitOutput } from "ts-loader/dist/instances";


module.exports = function(content, map, meta) {
    let res = content;

    console.log(this);
    const rawFilePath = path.normalize(this.resourcePath);

    console.log("test loader", rawFilePath);

    return res;
};