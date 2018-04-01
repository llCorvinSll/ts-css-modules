const path = require("path");
const MODULES_FOLDER_PATH = /vision\/src\/modules\/\w+/;
const MODULES_INDEX = /\/modules\/\w+(\/index)?$/;

export class TestPlugin {
    apply(compiler) {

        compiler.hooks.compilation.tap("TestPlugin", (compilation) => {
            compilation.hooks.afterOptimizeModules.tap("TestPlugin", (modules) => {
                modules.forEach(function (module) {
                    const module_path = module.userRequest;
                    const dependencies = module.dependencies;

                    if (!/node_modules/.test(module_path)) {
                        console.log("afterOptimizeModules", module_path);
                    }


                });
            });

            compilation.hooks.buildModule.tap("TestPlugin", (module) => {
                const module_path = module.userRequest;
                const dependencies = module.dependencies;

                if (!/node_modules/.test(module_path)) {
                    console.log("buildModule", module_path, dependencies.length);
                }
            });

            compilation.hooks.optimizeTree.tap("TestPlugin", (chunks, modules) => {

                console.log(chunks.length);
                console.log(modules.length);

            })
        })
    }
}

module.exports = TestPlugin;