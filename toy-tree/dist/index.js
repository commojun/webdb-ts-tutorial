"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const meow_1 = __importDefault(require("meow"));
const read_1 = require("./read");
const format_1 = require("./format");
exports.main = (argv, stdout, stderr) => {
    const cli = meow_1.default(`
Usage
  $toy-tree <directory>

Examples
  $ toy-tree
  $ toy-tree path/to/dir
`, {
        flags: {
            level: {
                type: 'number',
                alias: 'L',
                default: Infinity,
            },
        },
        argv,
    });
    const dir = cli.input[0] || '.';
    const options = {
        level: cli.flags.level,
    };
    if (options.level < 1) {
        stderr('Error: Invalid level, must be greater than 0.');
        return 1;
    }
    let root;
    try {
        root = read_1.read(dir, options);
    }
    catch (e) {
        stderr(`Error: ${e.message}`);
        return 1;
    }
    const output = format_1.format(root);
    stdout(output);
    return 0;
};
//# sourceMappingURL=index.js.map