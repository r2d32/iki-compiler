var Type = require('./type')

function UnaryExpression(op, operand) {
  this.op = op;
  this.operand = operand;
}

UnaryExpression.prototype.analyze = function (context) {
  this.operand.analyze(context)
  if (this.op.lexeme === 'not') {
    this.operand.type.assertBoolean('The not operator requires a boolean operand', this.op)
    this.type = Type.BOOL
  } else {
    // this.op.lexeme === '-'
    this.operand.type.assertInteger('The negation operator requires an integer operand', this.op)
    this.type = Type.INT
  }
};

UnaryExpression.prototype.toString = function () {
  return '(' + this.op.lexeme + ' ' + this.operand + ')'
}

module.exports = UnaryExpression