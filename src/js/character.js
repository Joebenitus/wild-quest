export default class Character {
  constructor(){
    this.characterClass = null;
    this.resillience = 0;
    this.strength = 0;
    this.accuracy = 0;
    this.endurance = 0;
    this.hp = this.resillience * 5;
  }

  Gunslinger(){
    this.characterClass = "Gunslinger";
    this.resillience = 50;
    this.strength = 60;
    this.accuracy = 75;
    this.endurance = 50;
  }
  Sheriff(){
    this.characterClass = "Sheriff";
    this.resillience = 75;
    this.strength = 60;
    this.accuracy = 75;
    this.endurance = 30;
  }
  Cowboy(){
    this.characterClass = "Cowboy";
    this.resillience = 30;
    this.strength = 80;
    this.accuracy = 70;
    this.endurance = 75;
  }
  Gambler(){
    this.characterClass = "Gambler";
    this.resillience = 50;
    this.strength = 90;
    this.accuracy = 50;
    this.endurance = 40;
  }
  

}
