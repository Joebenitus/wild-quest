import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from './js/character.js';
import Enemy from './js/enemies.js';
import Battle from './js/battle';

$(document).ready(function() {
  let playerChar = new Character();
  let enemyChar = new Enemy();
  let battle1 = new Battle(playerChar, enemyChar);
  let battle2 = new Battle(playerChar, enemyChar);
  let battle3 = new Battle(playerChar, enemyChar);
  let battle4 = new Battle(playerChar, enemyChar);
  let battle5 = new Battle(playerChar, enemyChar);

  function updateHP(){
    $(".player-health").text(playerChar.characterClass + ": " + playerChar.hp);
    $(".enemy-health").text(enemyChar.characterClass + ": " + enemyChar.hp);
  }

  function startGame(battle){
    $(".battle-screen").show();
    $(".btn-success").hide();
    $("#character-title").text("You chose " + playerChar.characterClass);
    $("#first-opponent").text("Your opponent: " + enemyChar.characterClass);
    updateHP();
    $(".btn-danger").show();
    $('#button-attack').click(function(event){
      event.preventDefault(); 
      if(battle.rollHit(playerChar.accuracy) === true){
        enemyChar.hp = battle.healthAfterDamage(enemyChar.hp, playerChar.strength);
      }
      else{
        $("#playerMiss").show();
        //$("#playerMiss").text("Player missed!");
        $("#playerMiss").fadeOut(2000);
      }
      if(battle.rollHit(enemyChar.accuracy) === true){
      playerChar.hp = battle.healthAfterDamage(playerChar.hp, enemyChar.strength);
      }
      else{
        $("#enemyMiss").show();
        //$("#enemyMiss").text("Enemy Missed!");
        $("#enemyMiss").fadeOut(2000);
      }
      if (enemyChar.hp <= 0){
        $("#enemyMiss").hide();
        $("#playerMiss").hide();
        enemyChar.hp = 0;
        updateHP();
        $(".battle-screen").hide();
        $("#end-text").text("You win!");
        $(".end-screen").fadeIn(3000);
      } else {
        updateHP();
      }
      if (playerChar.hp <= 0){
        $("#enemyMiss").hide();
        $("#playerMiss").hide();
        playerChar.hp = 0;
        updateHP();
        $(".battle-screen").hide();
        $("#end-text").text("You died! :( ");
        $(".end-screen").fadeIn(3000);
      } else {
        updateHP();
      }
    });
  }

  $('#button-gunslinger').click(function(event){
    event.preventDefault();
    playerChar.Gunslinger();
    $(".btn-dark").hide();
    $(".btn-success").show();
  });

  $('#button-sheriff').click(function(event){
    event.preventDefault();
    playerChar.Sheriff();
    $(".btn-dark").hide();
    $(".btn-success").show();
    });

  $('#button-cowboy').click(function(event){
    event.preventDefault();
    playerChar.Cowboy();
    $(".btn-dark").hide();
    $(".btn-success").show();
    });

  $('#button-gambler').click(function(event){
    event.preventDefault();
    playerChar.Gambler();
    $(".btn-dark").hide();
    $(".btn-success").show();
  });

  $('#button-drunk').click(function(event){
    event.preventDefault();
    enemyChar.Drunk()
    startGame(battle1);
  });

  $('#button-bandit').click(function(event){
    event.preventDefault();
    enemyChar.Bandit()
    startGame(battle2);
  });

  $('#button-rancher').click(function(event){
    event.preventDefault();
    enemyChar.Rancher()
    startGame(battle3);
  });

  $('#button-outlaw').click(function(event){
    event.preventDefault();
    enemyChar.Outlaw()
    startGame(battle4);
  });

  $('#button-rick').click(function(event){
    event.preventDefault();
    enemyChar.Rick()
    startGame(battle5);
  });

  $('#button-new-opponent').click(function(){
    location.reload();
  });
});

