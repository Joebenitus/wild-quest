export default class Enemy{
  constructor(){
    this.characterClass = null;
    this.resillience = 0;
    this.strength = 0;
    this.accuracy = 0;
    this.endurance = 0;
    this.hp = 0;
  }

  Drunk(){
    this.characterClass = "Drunk";
    this.resillience = 50;
    this.strength = 10;
    this.accuracy = 30;
    this.endurance = 30;
    this.hp = this.resillience * 5;
  }

  Bandit(){
    this.characterClass = "Bandit";
    this.resillience = 30;
    this.strength = 70;
    this.accuracy = 80;
    this.endurance = 75;
    this.hp = this.resillience * 5;
  }
  // Rancher(){
  //   this.resillience = 50;
  //   this.strength = 80;
  //   this.accuracy = 80;
  //   this.endurance = 75;
  // }
  // BillyTheKid(){
  //   this.resillience = 40;
  //   this.strength = 100;
  //   this.accuracy = 90;
  //   this.endurance = 50;
  // }
}



