"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.format = (node) => {
    return `${node.name}\n${formatEach(node.children, '')}`;
};
const formatEach = (nodes, prefix) => {
    let result = '';
    nodes.forEach((node, index) => {
        const edge = index === nodes.length - 1;
        const guide = prefix + (edge ? '`--' : '|--');
        const next = prefix + (edge ? '  ' : '|  ');
        result += `${guide} ${displayName(node)}\n`;
        if (node.type === 'directory') {
            result += formatEach(node.children, next);
        }
    });
    return result;
};
const displayName = (node) => {
    switch (node.type) {
        case 'file':
            return node.name;
        case 'directory':
            return chalk_1.default.cyan(node.name);
    }
};
//# sourceMappingURL=format.js.map