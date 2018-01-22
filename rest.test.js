const getMin= require('./rest');

test('Should give average',() => {
    expect(getMin(1,2,3,4,5)).toBe(3);
});

/*test('Find minimum in one value',() => {
    expect(getMin(10)).toBe(10);
});

test('Find minimum in negative values',() => {
    expect(getMin(10,20,-2,4,5)).toBe(-2);
});*/