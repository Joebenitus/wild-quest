export default class Battle{
  constructor(character, enemy){
    this.character = character;
    this.enemy = enemy;
}
  healthAfterDamage(hp, damage){
    return hp - damage;
  }
  heal(){
    

  }
  isAlive(){

  }
}

