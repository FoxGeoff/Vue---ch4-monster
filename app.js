function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = Math.floor(Math.random() * (12 - 5) + 5);
      this.monsterHealth = this.monsterHealth - attackValue;
    },
    attackPlayer() {
      const attackValue = Math.floor(Math.random() * (12 - 8) + 8);
      this.playerHealth = this.playerHealth - attackValue;
    },
  },
});

app.mount("#game");
