const arrayToObject = require('./destructure');

test('Objects must be equal', () => {
    const inputArray = ['1', 'joe', 'joe@mail.com', 'jon', 'asd'];
    const expectation = { username: 'joe', email: 'joe@mail.com' };
    expect(arrayToObject(inputArray)).toEqual(expectation);
});

test('Objects must handle empty objects', () => {
    const inputArray = ['','','','','' ];
    const expectation = { username: '', email: '' };
    expect(arrayToObject(inputArray)).toEqual(expectation);
});

test('Return type must be object', () => {
    const inputArray = ['1', 'joe', 'joe@mail.com', 'jon', 'asd'];
    const expectation = 'object';
    expect(typeof arrayToObject(inputArray)).toEqual(expectation);
});
