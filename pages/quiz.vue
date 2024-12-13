<script setup>
    const data = reactive({
        question: 1
    });

    const quiz = useQuizs(data);

    provide("quiz", quiz);
    // const nextQuestion = () => {
    //     data.question++; 
    // }

</script>

<template>
    <div>
        <button @click="data.question++">Next Question</button>
        <p>Current Question: {{ data.question }}</p>
    </div>
</template>