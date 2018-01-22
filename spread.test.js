const getMin= require('./spread');

test('Should find minimum and return 5',() => {
    expect(getMin(10,24,31,5,7,9)).toBe(5);
});

test('Find minimum in one value',() => {
    expect(getMin(10)).toBe(10);
});

test('Find minimum in negative values',() => {
    expect(getMin(10,20,-2,4,5)).toBe(-2);
});