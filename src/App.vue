<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Category Selection Dropdown -->
        <v-select
          v-model="selectedCategories"
          :items="categories"
          label="Select Categories"
          multiple
        ></v-select>

        <v-btn @click="handleStartGame">Start Game</v-btn>

        <!-- GameBoard only shows when categories are selected -->
        <GameBoard
          v-if="gameStarted"
          :categories="selectedCategories"
          :openedQuestions="openedQuestions"
          :displayedQuestions="displayedQuestions" 
          @ask-question="handleQuestion"
        ></GameBoard> <!-- Correctly close the GameBoard component -->

        <!-- Player Scores Section -->
        <div v-if="gameStarted">
          <h3>Player Scores</h3>
          <p>Player 1: {{ scores[0] }} points</p>
          <p>Player 2: {{ scores[1] }} points</p>
        </div>

        <!-- Question Modal -->
        <v-dialog v-model="showModal" persistent max-width="600px">
          <v-card>
            <v-card-title>{{ currentQuestion.question }}</v-card-title>
            <v-card-text>
              <p>Points: {{ currentQuestion.points }}</p>
              <p v-if="showAnswer">Answer: {{ currentQuestion.answer }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="blue darken-1" text @click="revealAnswer">Show Answer</v-btn>
              <v-btn color="green darken-1" text v-if="showAnswer" @click="submitAnswer(true)">Correct</v-btn>
              <v-btn color="red darken-1" text v-if="showAnswer" @click="submitAnswer(false)">Incorrect</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Papa from 'papaparse';
import GameBoard from './components/GameBoard.vue';

export default {
  name: 'App',
  components: {
    GameBoard,
  },
  data() {
    return {
      categories: [],
      selectedCategories: [],
      questions: {},
      showModal: false,
      currentQuestion: {},
      scores: [0, 0],
      currentPlayer: 0,
      showAnswer: false,
      openedQuestions: [],
      gameStarted: false,
      displayedQuestions: {},  // Hold random questions
    };
  },
  methods: {
    loadQuestions() {
      Papa.parse('/questions.csv', {
        header: true,
        download: true,
        complete: (result) => {
          console.log('CSV loaded:', result.data);
          this.processQuestions(result.data);
        }
      });
    },
    processQuestions(data) {
      const categories = new Set();
      const questions = {};

      data.forEach((row) => {
        const { Category, Question, Answer, Marks } = row;

        if (Category && Question && Answer && Marks) {
          categories.add(Category);

          if (!questions[Category]) {
            questions[Category] = [];
          }

          questions[Category].push({
            question: Question,
            answer: Answer,
            points: parseInt(Marks, 10),
          });
        }
      });

      this.categories = Array.from(categories);
      this.questions = questions;
      console.log('Categories:', this.categories);
      console.log('Questions:', this.questions);
    },
    shuffle(array) {
      let currentIndex = array.length, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }
      return array;
    },

    handleStartGame() {
      const selectedQuestions = {};

      // Iterate through the selected categories
      this.selectedCategories.forEach((category) => {
        const allQuestions = this.shuffle([...this.questions[category]]);  // Shuffle the questions in the category

        // Prepare the selected questions bucket for the category
        selectedQuestions[category] = [];

        // Points we are interested in (from 100 to 500)
        const pointValues = [100, 200, 300, 400, 500];

        // Iterate over point values
        pointValues.forEach((pointValue) => {
          // Find all questions for this point value
          const questionsForThisPoint = allQuestions.filter(q => q.points === pointValue);
          const requiredQuestions = 2; // We want 2 questions per point value

          if (questionsForThisPoint.length >= requiredQuestions) {
            // If enough questions are available for this point value, take 2
            selectedQuestions[category].push(...questionsForThisPoint.slice(0, requiredQuestions));
          } else {
            // If not enough questions are available, take whatever we have
            selectedQuestions[category].push(...questionsForThisPoint);

            // Calculate how many more questions we need
            const remainingQuestions = requiredQuestions - questionsForThisPoint.length;

            // Try to fill the gap with questions from the next available point values
            const remainingPoints = allQuestions.filter(q => q.points > pointValue).slice(0, remainingQuestions);
            selectedQuestions[category].push(...remainingPoints);
          }
        });

        // Sort selected questions by point value for display consistency
        selectedQuestions[category].sort((a, b) => a.points - b.points);
      });

      this.displayedQuestions = selectedQuestions;
      this.gameStarted = true;
    },
    handleQuestion({ category, points }) {
      if (!this.openedQuestions.some(q => q.category === category && q.points === points)) {
        const selectedQuestion = this.questions[category].find(q => q.points === points);
        if (selectedQuestion) {
          this.currentQuestion = selectedQuestion;
          this.showModal = true;
          this.showAnswer = false;
          this.openedQuestions.push({ category, points });
        }
      }
    },
    revealAnswer() {
      this.showAnswer = true;
    },
    submitAnswer(isCorrect) {
      if (isCorrect) {
        this.scores[this.currentPlayer] += this.currentQuestion.points;
      } else {
        this.scores[this.currentPlayer] -= this.currentQuestion.points;
      }
      this.showModal = false;
      this.currentPlayer = (this.currentPlayer + 1) % this.scores.length;
    }
  },
  mounted() {
    this.loadQuestions();
  }
};
</script>
