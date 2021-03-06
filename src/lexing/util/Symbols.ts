import Tag from './Tag';


const SYMBOLS = {
	'{': Tag.L_BRACE,
	'}': Tag.R_BRACE,
	'(': Tag.L_PARENTHESIS,
	')': Tag.R_PARENTHESIS,

	'+': Tag.PLUS,
	'-': Tag.MINUS,
	'*': Tag.MULTIPLY,
	'/': Tag.DIVIDE,

	'+=': Tag.PLUS_EQUAL,
	'-=': Tag.MINUS_EQUAL,
	'*=': Tag.MULTIPLY_EQUAL,
	'/=': Tag.DIVIDE_EQUAL,

	'++': Tag.PLUS_PLUS,
	'--': Tag.MINUS_MINUS,

	'>': Tag.MORE,
	'<': Tag.LESS,
	'=': Tag.EQUAL,
	'>=': Tag.MORE_EQUAL,
	'<=': Tag.LESS_EQUAL,
	'==': Tag.EQUALS,

	';': Tag.SEMICOLON
};

export default SYMBOLS;