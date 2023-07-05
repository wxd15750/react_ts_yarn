const CracoAlias = require('craco-alias');
module.exports = {
    plugins: [
        /* https://github.com/risenforces/craco-alias */
        {
            plugin: CracoAlias,
            options: {
            source: "tsconfig",
            tsConfigPath: "./tsconfig.extend.json",
            },
        },
    ]
}