export default class Battle{
  constructor(character, enemy){
    this.character = character;
    this.enemy = enemy;
}
  healthAfterDamage(hp, damage){
    let totalHP = hp-damage;
    
    // if (hp <=0){
    //   return alert("Drunk has died");
    // }
    return totalHP;
  }
  heal(){
    

  }
  isAlive(hp){
    if (hp <=0){
      return false;
    }
    else{
      return true;
    }
  }

}

