// cssfn:
import { 
// compositions:
composition, imports, 
// layouts:
layout, } from '@cssfn/cssfn'; // cssfn core
/**
 * A dummy text content, for making parent's height as tall as current text line-height.
 * The dummy is also used for calibrating the flex's vertical position.
 */
export const fillTextLineHeightLayout = () => composition([
    layout({
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
/**
 * A dummy text content, for making parent's width as wide as current text line-height.
 * The dummy is also used for calibrating the flex's vertical position.
 */
export const fillTextLineWidthLayout = () => composition([
    imports([
        fillTextLineHeightLayout(),
    ]),
    layout({
        // layouts:
        writingMode: 'vertical-lr',
        // appearances:
        overflow: 'unset', // fix Firefox bug
    }),
]);
