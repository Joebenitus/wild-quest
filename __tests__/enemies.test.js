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
    expect(bandit.accuracy).toEqual(70);
    expect(bandit.endurance).toEqual(75);
  });

  test('should create enemy rancher object', () => {
    let rancher = new Enemy();
    rancher.Rancher();
    expect(rancher.resillience).toEqual(50);
    expect(rancher.strength).toEqual(80);
    expect(rancher.accuracy).toEqual(65);
    expect(rancher.endurance).toEqual(75);
  });

  test('should create enemy rancher object', () => {
    let outlaw = new Enemy();
    outlaw.Outlaw();
    expect(outlaw.resillience).toEqual(70);
    expect(outlaw.strength).toEqual(80);
    expect(outlaw.accuracy).toEqual(60);
    expect(outlaw.endurance).toEqual(75);
  });

  test('should create enemy rancher object', () => {
    let rick = new Enemy();
    rick.Rick();
    expect(rick.resillience).toEqual(100);
    expect(rick.strength).toEqual(100);
    expect(rick.accuracy).toEqual(60);
    expect(rick.endurance).toEqual(50);
  });
  

});