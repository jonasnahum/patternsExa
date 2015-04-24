'use strict';
function* makeGenerator() {//lleva *
    yield('step 1');//tiene varios return
    yield('step 2');
    return 'step 3';
}
var gen = makeGenerator();
var step1 = gen.next();//gen tiene la funcion next.
console.dir(step1);
var step2 = gen.next();
console.dir(step2);
var end = gen.next();
console.dir(end);