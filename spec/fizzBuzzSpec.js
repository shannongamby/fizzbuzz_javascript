describe("fizzBuzz", function() {

  it("returns 'fizz' when given 3", function() {
    expect(fizzBuzz(3)).toEqual('fizz')
  });

  it("returns 'buzz' when given 3", function() {
    expect(fizzBuzz(5)).toEqual('buzz')
    });

  it("returns 'fizz' when given 6", function() {
    expect(fizzBuzz(6)).toEqual('fizz')
  });

  it("returns 'fizzbuzz' when given 15", function() {
    expect(fizzBuzz(15)).toEqual('fizzbuzz')
  });

  it("returns 1 when given 1", function() {
    expect(fizzBuzz(1)).toEqual(1)
  });

});
