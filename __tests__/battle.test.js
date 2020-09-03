import Battle from './../src/js/battle.js';
import Character from '../src/js/character.js';
import Enemy from '../src/js/enemies.js';

describe('Battle', () => {
  test('should create enemy drunk object', () => {
    //let character = {"name: ": "coolName", "qualities:": "stuff"};
    let playerChar = new Character();
    playerChar.Gunslinger();
    let enemyChar = new Enemy();
    enemyChar.Drunk();
    let battle1 = new Battle(playerChar, enemyChar);
    expect(battle1.character.hp).toEqual(250);
    expect(battle1.enemy.hp).toEqual(250);
  });
  test('should reduce given hp by given strength value', () => {
    let playerChar = new Character();
    playerChar.Gunslinger();
    let enemyChar = new Enemy();
    enemyChar.Drunk();
    let battle1 = new Battle(playerChar, enemyChar);
    expect(battle1.healthAfterDamage(playerChar.hp, enemyChar.strength)).toEqual(240);
  })
  test('should return false if hp is <=0', () => {
    let playerChar = new Character();
    let enemyChar = new Enemy();
    let battle = new Battle(playerChar, enemyChar);
    expect(battle.isAlive(playerChar.hp)).toEqual(false);
  })
  test('should increase hp by 30 once only', () => {
    let playerChar = new Character();
    let enemyChar = new Enemy();
    let battle1 = new Battle(playerChar, enemyChar);
    expect(battle1.heal(playerChar.hp)).toEqual(30);
  })
  test('should return true if accuracy > random number', () => {
    let playerChar = new Character();
    let battle = new Battle(playerChar);
    expect(battle.rollHit(100)).toEqual(true);
  })
});

