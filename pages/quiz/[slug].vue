<script setup>
import { ref } from 'vue';
import { useQuiz } from '@/composables/useQuiz';
import { useRoute } from 'vue-router';

const route = useRoute();
const quiz = await useQuiz(route.params.slug);

const currentQuestionIndex = ref(0);
const currentQuestion = computed(() => quiz.questions[currentQuestionIndex.value]);

function answer(selectedOption) {
  if (selectedOption === currentQuestion.value.reponse) {
    alert('Bonne réponse !');
  } else {
    alert('Mauvaise réponse.');
  }

  if (currentQuestionIndex.value < quiz.questions.length - 1) {
    currentQuestionIndex.value++;
  } else {
    currentQuestionIndex.value = null; // Fin du quiz
  }
}
</script>

<template>
    <div>
      <h1>{{ quiz.title }}</h1>
      <p>Question {{ currentQuestionIndex + 1 }}/{{ quiz.questions.length }}</p>
      <div v-if="currentQuestion">
        <p>{{ currentQuestion.text }}</p>
        <div>
          <button
            v-for="(option, index) in currentQuestion.options"
            :key="index"
            @click="answer(option)"
          >
            {{ option }}
          </button>
        </div>
      </div>
      <p v-else>Quiz terminé !</p>
    </div>
  </template>