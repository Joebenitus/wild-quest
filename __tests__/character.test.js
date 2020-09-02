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

  test('Should correctly create a gunslinger object using a class', () => {
    let character = new Character();
    character.Gunslinger();
    expect(character.characterClass).toEqual("Gunslinger");
    expect(character.resillience).toEqual(50);
    expect(character.strength).toEqual(60);
    expect(character.accuracy).toEqual(75);
    expect(character.endurance).toEqual(50);
  });

  test('Should correctly create a sheriff object using a class', () => {
    let character = new Character();
    character.Sheriff();
    expect(character.characterClass).toEqual("Sheriff");
    expect(character.resillience).toEqual(75);
    expect(character.strength).toEqual(60);
    expect(character.accuracy).toEqual(75);
    expect(character.endurance).toEqual(30);
  });
  test('Should correctly create a Cowboy object using a class', () => {
    let character = new Character();
    character.Cowboy();
    expect(character.characterClass).toEqual("Cowboy");
    expect(character.resillience).toEqual(30);
    expect(character.strength).toEqual(80);
    expect(character.accuracy).toEqual(70);
    expect(character.endurance).toEqual(75);
  });
  test('Should correctly create a sheriff object using a class', () => {
    let character = new Character();
    character.Gambler();
    expect(character.characterClass).toEqual("Gambler");
    expect(character.resillience).toEqual(50);
    expect(character.strength).toEqual(90);
    expect(character.accuracy).toEqual(50);
    expect(character.endurance).toEqual(40);
  });


});