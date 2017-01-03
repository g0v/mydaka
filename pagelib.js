'use strict';
var Ajv = require('ajv')
var v1Schema = require('./contexts/v1-schema')

function PageLib() {
    this.ajv =  Ajv({v5:true,
        allErrors: true
    })
}

PageLib.prototype.foo = function() {
    return 'hello'
}

PageLib.V1Schema = v1Schema

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
