const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Testing 123!',
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master vue and build amazin apps!',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount('#user-goal');
