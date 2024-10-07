<template>
  <v-app>
    <v-main>
      <v-container>
        <v-btn color="primary">Vuetify Button</v-btn>

        <!-- GameBoard Component -->
        <GameBoard
          :categories="categories"
          :openedQuestions="openedQuestions"
          @ask-question="handleQuestion"
        />
        <!-- Ensure correct camelCase naming -->

        <!-- Player Scores Section -->
        <div>
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
              <!-- Conditionally show the answer if the button has been clicked -->
              <p v-if="showAnswer">Answer: {{ currentQuestion.answer }}</p>
            </v-card-text>

            <v-card-actions>
              <!-- Show Answer Button -->
              <v-btn color="blue darken-1" text @click="revealAnswer">Show Answer</v-btn>

              <!-- Correct/Incorrect buttons after answer is revealed -->
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
import Papa from 'papaparse'; // Import PapaParse
import GameBoard from './components/GameBoard.vue';

export default {
  name: 'App',
  components: {
    GameBoard,
  },
  data() {
    return {
      categories: [],  // Categories will be populated from the CSV
      questions: {},  // Questions will be populated from the CSV
      showModal: false,
      currentQuestion: {},  // Holds the currently selected question
      scores: [0, 0],  // Player scores
      currentPlayer: 0,  // The current player (alternates between players)
      showAnswer: false,  // Flag to control when to show the answer
      openedQuestions: [],  // Track opened questions
    };
  },
  methods: {
    // Load questions from CSV file using PapaParse
    loadQuestions() {
      Papa.parse('/questions.csv', {
        header: true,
        download: true,
        complete: (result) => {
          const data = result.data;
          this.processQuestions(data);
        }
      });
    },
    processQuestions(data) {
      const categories = new Set();
      const questions = {};

      data.forEach((row) => {
        const { Category, Question, Answer, Marks } = row;
        categories.add(Category);

        if (!questions[Category]) {
          questions[Category] = [];
        }

        questions[Category].push({
          question: Question,
          answer: Answer,
          points: parseInt(Marks),
        });
      });

      this.categories = Array.from(categories);
      this.questions = questions;
    },
    handleQuestion({ category, points }) {
      // Check if the question is already opened
      if (!this.openedQuestions.some(q => q.category === category && q.points === points)) {
        const selectedQuestion = this.questions[category].find(q => q.points === points);
        if (selectedQuestion) {
          this.currentQuestion = selectedQuestion;
          this.showModal = true;  // Open the modal
          this.showAnswer = false;  // Reset the showAnswer flag

          // Mark this question as opened
          this.openedQuestions.push({ category, points });
        }
      }
    },
    revealAnswer() {
      this.showAnswer = true;  // Set flag to true to show the answer
    },
    submitAnswer(isCorrect) {
      if (isCorrect) {
        this.scores[this.currentPlayer] += this.currentQuestion.points;  // Add points for correct answer
      } else {
        this.scores[this.currentPlayer] -= this.currentQuestion.points;  // Subtract points for incorrect answer
      }
      this.showModal = false;  // Close the modal
      this.currentPlayer = (this.currentPlayer + 1) % this.scores.length;  // Switch player
    }
  },
  mounted() {
    this.loadQuestions();  // Load questions from CSV when the component is mounted
  }
};
</script>