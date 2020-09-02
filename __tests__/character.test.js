import Character from './../src/js/character.js';

describe('Character', () => {

  test('should create character object', () => {
    let character = new Character();
    expect(character.characterClass).toEqual(null);
    expect(character.resillience).toEqual(0);
    expect(character.strength).toEqual(0);
    expect(character.accuracy).toEqual(0);
    expect(character.endurance).toEqual(0);
  });

  // test('Should correctly create a character object using a class', () => {
  //   let character = new Character();

  // });




});