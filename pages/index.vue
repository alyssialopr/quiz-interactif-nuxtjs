<script setup>
import { ref, onMounted } from 'vue';

const quizs = await queryContent('quizs').find();
console.log(quizs)
// const quizs = ref([]);

// onMounted(async () => {
//   const context = import.meta.glob('@/content/quizs/quiz-*.json');
//   const modules = await Promise.all(Object.values(context).map((m) => m()));
//   quizs.value = modules.map((mod) => mod.default);
// });

</script>

<template>
  <NuxtLayout name="header">
    <h1>QUIZZOSS</h1>
    <h1>Liste des quizs</h1>
    <ul >
      <li class="border-gray-300 border rounded-md m-10 p-6 shadow-2xl"  v-for="quiz in quizs" :key="quiz.slug">
        <h2 class="font-semibold text-3xl">{{ quiz.title }}</h2>
        <p>{{ quiz.questions.length }} questions</p>
        <button class="bg-lime-200 p-2 my-4 rounded">
            <NuxtLink :to="`/quizs/${quiz.slug}`">Commencer le quiz</NuxtLink>
        </button>
      </li>
    </ul>
  </NuxtLayout>
</template>