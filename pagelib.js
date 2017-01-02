'use strict';
function PageLib() {}

PageLib.prototype.foo = function() {
    return 'hello'
}

PageLib.Foo = function() {
    return 'HELLO'
}

module.exports = PageLib
