<template>
  <div>
    <div v-for="category in categories" :key="category">
      <h2>{{ category }}</h2>
      <div v-for="points in [100, 200, 300, 400, 500]" :key="points">
        <v-btn
          :class="{ 'greyed-out': isOpened(category, points) }"  
          @click="$emit('ask-question', { category, points })"
        >
          {{ points }} POINTS
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array,
    openedQuestions: Array  // Receive openedQuestions from parent
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
  pointer-events: none;  /* Disable clicking on greyed-out questions */
}
</style>