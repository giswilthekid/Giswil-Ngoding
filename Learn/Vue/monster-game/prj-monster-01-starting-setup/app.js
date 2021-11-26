const randomNumber = function (max, min) {
  return Math.floor(Math.random() * (max - min) + min);
};

const App = Vue.createApp({
  data() {
    return {
      startGame: false,
      playerHealth: 100,
      monsterHealth: 100,
      surrender: false,
      playerCharge: 0,
      endGame: false,
      winner: '',
      monsterAutoAtt: null,
      monsterAutoHeal: null,
      monsterAutoUlt: null,
      chargeFill: null,
      logs: [],
    };
  },
  methods: {
    startNewGame() {
      this.startGame = true;
      this.surrender = false;
      this.endGame = false;
    },
    surrenderGame() {
      this.startGame = false;
      this.surrender = true;
    },
    resetGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.surrender = false;
      this.startGame = false;
      this.endGame = false;
      this.playerCharge = 0;
      this.winner = '';
      this.log = [];
    },
    playerAttack(max, min) {
      const attValue = randomNumber(max, min);
      this.monsterHealth -= attValue;
      this.addLog('Player', 'Attack', attValue);
    },
    monsterAttack(max, min) {
      const attValue = randomNumber(max, min);
      this.playerHealth -= randomNumber(max, min);
      this.addLog('Monster', 'Attack', attValue);
    },
    healPlayer() {
      const healValue = randomNumber(10, 8);
      if (this.playerHealth + healValue >= 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += randomNumber(10, 8);
        this.playerCharge -= 2;
      }
      this.addLog('Player', 'Heal', healValue);
    },
    healMonster() {
      const healValue = randomNumber(15, 12);
      if (this.monsterHealth + healValue >= 100) {
        this.monsterHealth = 100;
      } else {
        this.monsterHealth += healValue;
      }
      this.addLog('Monster', 'Heal', healValue);
    },
    playerSpesialAttack() {
      this.playerAttack(25, 22);
      this.playerCharge -= 5;
    },
    monsterSpesialAttack() {
      this.monsterAttack(20, 18);
    },
    addLog(who, what, value) {
      this.logs.unshift({
        actionChar: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
  computed: {
    playerBarStyle() {
      if (this.playerHealth <= 0) {
        return { width: '0%' };
      }
      return { width: this.playerHealth + '%' };
    },
    monsterBarStyle() {
      if (this.monsterHealth <= 0) {
        return { width: '0%' };
      }
      return { width: this.monsterHealth + '%' };
    },
    mayHeal() {
      return !this.startGame || this.playerCharge < 2;
    },
    mayUlt() {
      return !this.startGame || this.playerCharge < 5;
    },
  },
  watch: {
    startGame() {
      if (this.endGame == false && this.startGame == true) {
        console.log('game start');
        this.monsterAutoAtt = setInterval(() => {
          this.monsterAttack(15, 8);
          console.log(this.playerHealth);
        }, 1000);

        this.monsterAutoHeal = setInterval(() => {
          this.healMonster();
        }, 2000);

        this.monsterAutoUlt = setInterval(() => {
          this.monsterSpesialAttack();
        }, 5000);

        this.chargeFill = setInterval(() => {
          this.playerCharge += 2;
        }, 500);
      } else {
        clearInterval(this.monsterAutoAtt);
        clearInterval(this.monsterAutoHeal);
        clearInterval(this.monsterAutoUlt);
        clearInterval(this.chargeFill);
      }
    },
    playerHealth() {
      if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
        this.endGame = 'true';
      } else if (this.playerHealth <= 0) {
        this.winner = 'monster';
        this.endGame = 'true';
      }
    },
    monsterHealth() {
      if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
        this.endGame = 'true';
      } else if (this.monsterHealth <= 0) {
        this.winner = 'player';
        this.endGame = 'true';
      }
    },
    endGame() {
      this.startGame = 'false';
    },
  },
});

App.mount('#game');
