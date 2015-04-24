#!/usr/bin/env node --harmony
'use strict';
var array = ["uno", "dos", "tres"];

function* makeGenerator(array) {
    for(var i = 0; i < array.length; i++)
        yield array[i];
}
var gen = makeGenerator(array);

var step1 = gen.next();
console.dir(step1);
var step2 = gen.next();
console.dir(step2);
var end = gen.next();
console.dir(end);