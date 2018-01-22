const arrowreduce = require('./arrow_part1');
test('Should return the result',function(){
    expect(arrowreduce(["Hello","world","bye"])).toBe(`[Hello,world,bye] becomes "Hwb"`);
})