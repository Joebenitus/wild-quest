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
})

