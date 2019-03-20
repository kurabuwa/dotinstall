'use strict';
{
  class Player{
    constructor(name, score){
      this.name = name;
      this.score = score;
    }
    showInfo(){
      console.log(`name:${this.name} score: ${this.score}`);
    }
  }

  class SoccerPlayer extends Player {
    constructor(name, score, number) {
      super(name, score);
      this.number = number;
    }
    kick() {
      console.log('Gooooaaal!');
    }
  }

      const tsubasa = new SoccerPlayer('tsubasa', 99, 10);

    tsubasa.kick();
    console.log(tsubasa.number);
    tsubasa.showInfo();
  
}
