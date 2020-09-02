import Enemy from './../src/js/enemies.js';

describe('Enemy', () => {

  test('should create enemy object', () => {
    let drunk = new Enemy();
    drunk.Drunk();
    expect(drunk.resillience).toEqual(50);
    expect(drunk.strength).toEqual(10);
    expect(drunk.accuracy).toEqual(30);
    expect(drunk.endurance).toEqual(30);
  });

});