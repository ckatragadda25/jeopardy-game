<template>
  <v-row>
    <v-col v-for="category in categories" :key="category" cols="6">
      <h2>{{ category }}</h2>
      <div v-for="(question, index) in displayedQuestions[category]" :key="index">
        <v-btn
          :class="{ 'greyed-out': isOpened(category, question.points) }"
          @click="$emit('ask-question', { category, points: question.points })"
        >
          {{ question.points }} POINTS
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    categories: Array,
    displayedQuestions: Object,  // Add displayedQuestions as a prop
    openedQuestions: Array,
  },
  methods: {
    isOpened(category, points) {
      return this.openedQuestions.some(q => q.category === category && q.points === points);
    }
  }
};
</script>

<style>
.greyed-out {
  background-color: lightgrey !important;
  pointer-events: none;
}
</style>