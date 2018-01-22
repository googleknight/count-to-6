const getMin= require('./spread');

test('Should find minimum and return 5',function(){
    expect(getMin(10,24,31,5,7,9)).toBe(5);
});