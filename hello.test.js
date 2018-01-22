const hello = require('./hello');
test('Should print HELLO ES6',function(){
    expect(hello()).toBe('HELLO ES6');
});