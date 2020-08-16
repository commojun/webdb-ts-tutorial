#!/usr/bin/env node
"use strict";
const { main } = require('./');
const code = main(process.argv.slice(2), console.log, console.error);
process.exit(code);
//# sourceMappingURL=bin.js.map