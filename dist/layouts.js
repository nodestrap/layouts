"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillTextLineWidthLayout = exports.fillTextLineHeightLayout = void 0;
// cssfn:
const cssfn_1 = require("@cssfn/cssfn"); // cssfn core
/**
 * A dummy text content, for making parent's height as tall as current text line-height.
 * The dummy is also used for calibrating the flex's vertical position.
 */
const fillTextLineHeightLayout = () => (0, cssfn_1.composition)([
    (0, cssfn_1.layout)({
        // layouts:
        content: '"\xa0"',
        display: 'inline-block',
        // appearances:
        overflow: 'hidden',
        visibility: 'hidden',
        // sizes:
        inlineSize: 0, // kill the width, we just need the height
    }),
]);
exports.fillTextLineHeightLayout = fillTextLineHeightLayout;
/**
 * A dummy text content, for making parent's width as wide as current text line-height.
 * The dummy is also used for calibrating the flex's vertical position.
 */
const fillTextLineWidthLayout = () => (0, cssfn_1.composition)([
    (0, cssfn_1.imports)([
        (0, exports.fillTextLineHeightLayout)(),
    ]),
    (0, cssfn_1.layout)({
        // layouts:
        writingMode: 'vertical-lr',
        // appearances:
        overflow: 'unset', // fix Firefox bug
    }),
]);
exports.fillTextLineWidthLayout = fillTextLineWidthLayout;
