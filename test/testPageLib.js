'use strict';

var assert = require('chai').assert;
var PageLib = require('../pagelib');
var fooSchema = require('./foo-schema');
var productSchema = require('./product-schema');

describe('#PageLib', function() {
    it('validate', function() {
        var pg = new PageLib()
        var x1 = pg.validateData({
            "foo": "abc",
            "bar": 2
        }, fooSchema)
        assert.isOk(x1.result)
        console.log("x1 result ", x1)
        var x2 = pg.validateData({
            "foo": 2,
            "bar": 4
        }, fooSchema)
        assert.isNotOk(x2.result)
        console.log(x2)
    });
});
