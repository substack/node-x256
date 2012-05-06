var test = require('tap').test;
var x256 = require('../');

function fudge (x) {
    return Math.max(0, Math.min(255, Math.round(
        x + Math.random() * 4 - 2
    )));
}

test(function (t) {
    //t.plan(256 * 2 + 1);
    
    t.equal(x256.colors.length, 256);
    x256.colors.forEach(function (color, ix) {
        t.equal(x256(color), ix);
        /*
        t.equal(x256([
            fudge(color[0]),
            fudge(color[1]),
            fudge(color[2])
        ]), ix);
        */
    });
    t.end();
});
