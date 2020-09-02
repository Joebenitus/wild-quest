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

  function updateHP(){
    $(".player-health").text(playerChar.characterClass + ": " + playerChar.hp);
    $(".enemy-health").text(enemyChar.characterClass + ": " + enemyChar.hp);
  }

  function startGame(){
    $(".btn-dark").hide();
    $("#character-title").text("You chose " + playerChar.characterClass);
    $("#first-opponent").text("Your first opponent: The Drunk!");
    enemyChar.Drunk();
    updateHP();
    $(".btn-danger").show();
    $('#button-attack').click(function(event){
      event.preventDefault(); 
      enemyChar.hp = battle1.healthAfterDamage(enemyChar.hp, playerChar.strength);
      if (enemyChar.hp <= 0){
        enemyChar.hp = 0;
        alert("drunk has died");
      }
      updateHP();
    })
  }

  $('#button-gunslinger').click(function(event){
    event.preventDefault();
    playerChar.Gunslinger();
    startGame();
    });

    $('#button-sheriff').click(function(event){
      event.preventDefault();
      playerChar.Sheriff();
      startGame();
      });

    $('#button-cowboy').click(function(event){
      event.preventDefault();
      playerChar.Cowboy();
      startGame();
      });

    $('#button-gambler').click(function(event){
      event.preventDefault();
      playerChar.Gambler();
      startGame();
    });
});