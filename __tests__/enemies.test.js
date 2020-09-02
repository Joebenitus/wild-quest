import Enemy from './../src/js/enemies.js';

describe('Enemy', () => {

  test('should create enemy drunk object', () => {
    let drunk = new Enemy();
    drunk.Drunk();
    expect(drunk.resillience).toEqual(50);
    expect(drunk.strength).toEqual(10);
    expect(drunk.accuracy).toEqual(30);
    expect(drunk.endurance).toEqual(30);
  });
  test('should create enemy bandit object', () => {
    let bandit = new Enemy();
    bandit.Bandit();
    expect(bandit.resillience).toEqual(30);
    expect(bandit.strength).toEqual(70);
    expect(bandit.accuracy).toEqual(80);
    expect(bandit.endurance).toEqual(75);
  });

});