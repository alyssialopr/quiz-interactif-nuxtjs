<script setup>
import { useRoute } from "vue-router";
import useQuiz from "@/composables/useQuiz";
const route = useRoute();
const slug = route.params.quiz;
const data = await queryContent(slug).findOne();
const { quiz, currentQuestionIndex, nextQuestion, prevQuestion, score } =
  useQuiz(data);

const submitAnswer = (answer) => {
  console.log("Answer submitted:", answer);
  // Increment score if the answer is correct (assuming you have a way to check correctness)
  if (
    answer === quiz.value.questions[currentQuestionIndex.value].correctAnswer
  ) {
    score.value++;
  }
  nextQuestion();
};

console.log(quiz);
</script>

<template>
  <div v-if="quiz">
    <h1>{{ quiz.title }}</h1>
    <div v-if="currentQuestionIndex < quiz.questions.length">
      <h2 class="text-2xl font-bold">
        {{ quiz.questions[currentQuestionIndex].question }}
      </h2>
      <p>{{ currentQuestionIndex + 1 }} / {{ quiz.questions.length }}</p>
      <ul>
        <li
          v-for="answer in quiz.questions[currentQuestionIndex].answers"
          :key="answer"
        >
          <button @click="submitAnswer(answer)">{{ answer }}</button>
        </li>
      </ul>
      <button
        class="bg-teal-300"
        @click="prevQuestion"
        :disabled="currentQuestionIndex === 0"
      >
        Précédent
      </button>
    </div>
    <div v-else class="bg-white p-4">
      <h2 class="text-2xl font-bold">Quiz terminé !</h2>
      <p>Votre score : {{ score }} / {{ quiz.questions.length }}</p>
    </div>
  </div>
</template>
