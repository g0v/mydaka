'use strict';

var assert = require('chai').assert;
var PageLib = require('../pagelib');
var fooSchema = require('./foo-schema');
var productSchema = require('./product-schema');

var failCases = [{
    "workingHours": [{
        "dayOfWeek": ["Monday", "Monday"],
        "validFrom": "2017-01-01",
        "validThrough": "2017-07-31"
    }]
}]

var okCases = [{
    "workingHours": [{
        "dayOfWeek": ["Monday", "Sunday"],
        "validFrom": "2017-01-01",
        "validThrough": "2017-07-31"
    }]
}]

describe('#PageLib', function() {
    it('validateFoo', function() {
        var pg = new PageLib()
        var x1 = pg.validateData({
            "foo": "abc",
            "bar": 2
        }, fooSchema)
        assert.isOk(x1.result)
        console.log(x1)
        var x2 = pg.validateData({
            "foo": 2,
            "bar": 4
        }, fooSchema)
        assert.isNotOk(x2.result)
        console.log(x2)
    });
    it('validateV1', function() {
        var pg = new PageLib()
        failCases.forEach(function(e, i, a) {
            var r = pg.validateData(e, PageLib.V1Schema)
            console.log(r)
            assert.isNotOk(r.result)
        })

        okCases.forEach(function(e, i, a) {
            var r = pg.validateData(e, PageLib.V1Schema)
            console.log(r)
            assert.isOk(r.result)
        })

    });
});
