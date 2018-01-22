const add = require('./index');
 test('Should add two numbers',function(){
     expect(add(3,5)).toBe(8);
 })