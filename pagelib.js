'use strict';
var Ajv = require('ajv');
function PageLib() {
    this.ajv =  Ajv({
        allErrors: true
    })
}

PageLib.prototype.foo = function() {
    return 'hello'
}

PageLib.Foo = function() {
    return 'HELLO'
}

PageLib.prototype.validateData = function(data,schema){
    var validate = this.ajv.compile(schema)
    var valid = validate(data);
    return {
        result : valid,
        errors : this.ajv.errorsText(validate.errors)
    }
}

module.exports = PageLib
