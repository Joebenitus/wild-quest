export default class Battle{
  constructor(character, enemy){
    this.character = character;
    this.enemy = enemy;
}
  healthAfterDamage(hp, damage){
    let totalHP = hp-damage;
    return totalHP;
  }
  heal(hp){
    let totalHP = hp + 30;
    return totalHP;
  }
  isAlive(hp){
    if (hp <=0){
      return false;
    }
    else{
      return true;
    }
  }
  rollHit(accuracy){
    let random = Math.floor(Math.random() * 100) + 1;
    if (random <= accuracy){
        return true;
    }
    else{
      return false;
    }
  }

}

