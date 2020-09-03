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
    this.characterClass = "The Drunk";
    this.resillience = 50;
    this.strength = 10;
    this.accuracy = 30;
    this.endurance = 30;
    this.hp = this.resillience * 5;
  }

  Bandit(){
    this.characterClass = "The Bandit";
    this.resillience = 30;
    this.strength = 70;
    this.accuracy = 70;
    this.endurance = 75;
    this.hp = this.resillience * 5;
  }
  Rancher(){
    this.characterClass = "The Rancher";
    this.resillience = 50;
    this.strength = 80;
    this.accuracy = 65;
    this.endurance = 75;
    this.hp = this.resillience * 5;
  }
  Outlaw(){
    this.characterClass = "The Outlaw";
    this.resillience = 70;
    this.strength = 80;
    this.accuracy = 60;
    this.endurance = 75;
    this.hp = this.resillience * 5;
  }
  Rick(){
    this.characterClass = "Rick";
    this.resillience = 100;
    this.strength = 100;
    this.accuracy = 60;
    this.endurance = 50;
    this.hp = this.resillience * 5;
  }
}



