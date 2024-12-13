<script setup>
import { useQuizs } from '@/composables/useQuizs.js'; 

const quizs = await useQuizs();
</script>

<!-- <template>
    <div>
      <h1>Liste des quiz</h1>
      <ul>
        <li v-for="quiz in quizs" :key="quiz.slug">
          <h2>{{ quiz.title }}</h2>
          <p>{{ quiz.questions.length }} questions</p>
          <NuxtLink :to="`/quiz/${quiz.slug}`">Commencer le quiz</NuxtLink>
        </li>
      </ul> -->
      <!-- <Button @click="nextQuestion">Next</Button> -->
    <!-- </div>
  </template> -->

  <template>
    <div>
      <div v-for="quiz in quizs" :key="quiz.id">
        <h2>{{ quiz.title }}</h2>
        <p>Number of questions: {{ quiz.questions }}</p>
      </div>
    </div>
  </template>
  
  