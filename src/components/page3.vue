<!-- 
<template>
    <div class="table">
      <div class="row" v-for="(item, index) in items" :key="index">
        <a :href="item.link" class="word" :style="randomPosition()">
          {{ item.word }}
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WhiteTable',
    data() {
      return {
        items: [
          { word: 'Alice Rose Hamberger', link: 'https://www.linkedin.com/in/alice-rose-hamberger2000/' },
          { word: '@alice.rosee', link: 'https://instagram.com/alice.rosee' },
          { word: 'github', link: 'https://github.com/alicehamberger' },
          { word: '', link: '' },
          { word: 'tech cv', link: '' },
          { word: 'creative cv', link: '' },
          { word: 'alicehamberger@gmail.com', link: 'mailto:alicehamberger@gmail.com' },
        ],
      };
    },
    methods: {
      randomPosition() {
        const x = Math.random() * 80; // max 80% to keep within row bounds
        const y = Math.random() * 80; // max 80% to keep within row bounds
        return `position: absolute; top: ${y}%; left: ${x}%;`;
      },
    },
  };
  </script>
  
  <style scoped>
  .table {
    display: flex;
    flex-direction: column; /* Stack children vertically */
    gap: 1rem; /* Space between rows */
    border: 2px solid white; /* White border for the table */
    width: 80%; /* Full width of the container */
    margin: 2rem 0; /* Space above and below the table */
  }
  
  .row {
    border-bottom: 2px solid white; /* White border for rows */
    height: 120px; /* Height for each row */
    position: relative;
    overflow: hidden; /* Prevents content from spilling out */
  }
  
  .word {
    position: absolute;
    color: white; /* White text to be visible on a dark background */
    text-decoration: none; /* Removes underline from links */
    font-size: 1.5rem; /* Text size */
  }
  
  .word:hover {
    transform: scale(1.1); /* Slightly increase the size on hover */
  }
  </style>
  -->

  <template>
    <div>
      <div class="reload-text">reload for fun</div>
      <div class="table">
        <div class="row" v-for="(item, index) in pairedItems" :key="index">
          <a v-for="link in item" :key="link.word" :href="link.link" class="word" :style="randomPosition()">
            {{ link.word }}
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WhiteTable',
    data() {
      return {
        items: [
          { word: 'Alice Rose Hamberger', link: 'https://www.linkedin.com/in/alice-rose-hamberger2000/' },
          { word: '@alice.rosee', link: 'https://instagram.com/alice.rosee' },
          { word: 'github', link: 'https://github.com/alicehamberger' },
          { word: 'tech cv', link: 'https://alicehamberger.github.io/tech-CV/docs/techCV.pdf' },
          { word: 'creative cv', link: 'https://alicehamberger.github.io/creative-CV/docs/creativeCV.pdf' },
          { word: 'alicehamberger@gmail.com', link: 'mailto:alicehamberger@gmail.com' },
        ],
      };
    },
    computed: {
      pairedItems() {
        const alice = this.items.find(item => item.word === 'Alice Rose Hamberger');
        const pairedWords = ['@alice.rosee', 'creative cv', 'github', 'tech cv', 'Alice Rose Hamberger'];
        const paired = [
          [this.items.find(item => item.word === '@alice.rosee'), this.items.find(item => item.word === 'creative cv')],
          [this.items.find(item => item.word === 'github'), this.items.find(item => item.word === 'tech cv')],
        ];
  
        const unpaired = this.items.filter(item => !pairedWords.includes(item.word)).map(item => [item]);
        return [[alice]].concat(paired, unpaired);
      }
    },
    methods: {
      randomPosition() {
        const x = Math.random() * 80;
        const y = Math.random() * 80;
        return `position: absolute; top: ${y}%; left: ${x}%;`;
      },
    },
  };
  </script>
  

<style scoped>
.table {
  display: flex;
  flex-direction: column; /* Stack children vertically */
  gap: 1rem; /* Space between rows */
  border: 2px solid white; /* White border for the table */
  width: 80%; /* % width of the container */
  /*margin: 2rem 0; /* Space above and below the table */
  margin: auto; /* Center the table horizontally */
  /*margin-top: auto; /* Space above the table */
  /*margin-bottom: auto; /* Space below the table */
}

.reload-text {
  text-align: center; /* Center the text horizontally */
  color: white; /* White text color */
  font-size: 0.5rem; /* Small font size */
  font-style: italic; /* Italics style */
  margin-bottom: 0.5rem; /* Space below the text */
  margin-top: 5rem; /* Space above the text */
}
.row {
  border-bottom: 2px solid white; /* White border for rows */
  height: 120px; /* Height for each row */
  position: relative;
  overflow: hidden; /* Prevents content from spilling out */
}

.word {
  position: absolute;
  color: white; /* White text to be visible on a dark background */
  text-decoration: none; /* Removes underline from links */
  font-size: 1.5rem; /* Text size */
}

.word:hover {
  transform: scale(1.1); /* Slightly increase the size on hover */
}
</style>