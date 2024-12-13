<script setup>
const { params } = useRoute();
console.log(params);
const data = await queryContent(`/quizs/${params.quiz}`).findOne();
console.log(data);
const { quiz, currentQuestionIndex, nextQuestion, prevQuestion, score } =
  useQuiz(data);

const submitAnswer = (answer) => {
  console.log("Answer submitted:", answer);
  // Increment score if the answer is correct (assuming you have a way to check correctness)
  if (
    answer === quiz.value.questions[currentQuestionIndex.value].response
  ) {
    score.value++;
  }
  nextQuestion();
};

console.log(quiz);
</script>

<template>
  <div>
    
    <h1>{{ quiz.title }}</h1>
    <NuxtLink to="/" class="text-blue-500 hover:underline">Back</NuxtLink>
    <div v-if="currentQuestionIndex < quiz.questions.length">
      <h2 class="text-2xl font-bold">
        {{ quiz.questions[currentQuestionIndex].question }}
      </h2>
      <p>{{ currentQuestionIndex + 1 }} / {{ quiz.questions.length }}</p>
      <ul>
        <li class="my-4"
          v-for="answer in quiz.questions[currentQuestionIndex].answers"
          :key="answer"
        >
          <button @click="submitAnswer(answer)">{{ answer }}</button>
        </li>
      </ul>
      <button
        class="bg-green-100 p-2 my-4 rounded"
        @click="prevQuestion"
        :disabled="currentQuestionIndex === 0"
      >
        Précédent
      </button>
    </div>
    <div v-else class="bg-white p-4">
      <h2 class="text-2xl font-bold">Quiz terminé !</h2>
      <p>Votre score : {{ score }} / {{ quiz.questions.length }}</p>
      <NuxtLink to="/" class="text-blue-500 hover:underline">Retour à la liste des quizs</NuxtLink>
    
    </div>
  </div>
</template>
