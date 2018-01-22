const arrowreduce = require('./arrow_part1');
test('Should return the result for different strings',function(){
    expect(arrowreduce(["Hello","world","bye"])).toBe(`[Hello,world,bye] becomes "Hwb"`);
});

test('Should return the result as Hundefinedb',function(){
    expect(arrowreduce(["Hello","","bye"])).toBe(`[Hello,,bye] becomes "Hundefinedb"`);
});


test('Should return the result as 123',function(){
    expect(arrowreduce(['10','24','35'])).toBe(`[10,24,35] becomes "123"`);
});