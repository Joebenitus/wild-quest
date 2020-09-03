export default class Character {
  constructor(){
    this.characterClass = null;
    this.resillience = 0;
    this.strength = 0;
    this.accuracy = 0;
    this.endurance = 0;
    this.hp = 0;
  }

  Gunslinger(){
    this.characterClass = "Gunslinger";
    this.resillience = 50;
    this.strength = 60;
    this.accuracy = 75;
    this.endurance = 50;
    this.hp = this.resillience * 5;
  }
  Sheriff(){
    this.characterClass = "Sheriff";
    this.resillience = 75;
    this.strength = 60;
    this.accuracy = 75;
    this.endurance = 30;
    this.hp = this.resillience * 5;
  }
  Cowboy(){
    this.characterClass = "Cowboy";
    this.resillience = 40;
    this.strength = 100;
    this.accuracy = 70;
    this.endurance = 75;
    this.hp = this.resillience * 5;
  }
  Gambler(){
    this.characterClass = "Gambler";
    this.resillience = 60;
    this.strength = 90;
    this.accuracy = 50;
    this.endurance = 40;
    this.hp = this.resillience * 5;
  }
  

}
