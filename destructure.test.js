const arrayToObject = require('./destructure');

test('Objects must be equal', () => {
    const inputArray = ['1', 'joe', 'joe@mail.com', 'jon', 'asd'];
    const expectation = { username: 'joe', email: 'joe@mail.com' };
    expect(arrayToObject(inputArray)).toEqual(expectation);
});