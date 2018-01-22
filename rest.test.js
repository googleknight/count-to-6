const getMin= require('./rest');

test('Should give average',() => {
    expect(getMin(1,2,3,4,5)).toBe(3);
});

test('should return 0 for empty function call',() => {
    expect(getMin()).toBe(0);
});

test('Find average with negative numbers',() => {
    expect(getMin(10,-20,-10,30,0)).toBe(2);
});

test('Type of returned value should be number',() => {
    expect(typeof getMin(10,-20,-10,30,0)).toBe('number');
});