"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tag = (function () {
    function Tag() {
    }
    return Tag;
}());
Tag.NUMBER = 'NUMBER';
Tag.WORD = 'WORD';
// SYMBOLS
Tag.L_BRACE = 'L_BRACE';
Tag.R_BRACE = 'R_BRACE';
Tag.L_PARENTHESIS = 'L_PARENTHESIS';
Tag.R_PARENTHESIS = 'R_PARENTHESIS';
Tag.PLUS = 'PLUS';
Tag.MINUS = 'MINUS';
Tag.MORE = 'MORE';
Tag.LESS = 'LESS';
Tag.EQUAL = 'EQUAL';
Tag.MORE_EQUAL = 'MORE_EQUAL';
Tag.LESS_EQUAL = 'LESS_EQUAL';
// KEYWORDS
Tag.IF = 'IF';
Tag.ELSE = 'ELSE';
Tag.DO = 'DO';
Tag.WHILE = 'WHILE';
//
Tag.EOF = 'EOF';
exports.default = Tag;
