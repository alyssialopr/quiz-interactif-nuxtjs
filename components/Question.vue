<script setup>
const form = UseQuizs();
provide("form", form);

const question = ref(1);
</script>

<template>
    <div>
        <QuizQuestion1 v-if="question === 1" />
        <QuizQuestion1 v-if="question === 2" />
        <QuizQuestion1 v-if="question === 3" />
        <QuizQuestion1 v-if="question === 4" />
    </div>
</template>