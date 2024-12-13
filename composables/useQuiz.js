import { ref } from 'vue';

export default function useQuiz(quizData) {
    const quiz = ref(quizData || {});
    const currentQuestionIndex = ref(0);
    const score = ref(0);

    const nextQuestion = () => {
        if (currentQuestionIndex.value < quiz.value.questions.length - 1) {
            currentQuestionIndex.value++;
        }
    };

    const prevQuestion = () => {
        if (currentQuestionIndex.value > 0) {
            currentQuestionIndex.value--;
        }
    };

    return { 
        quiz, 
        currentQuestionIndex, 
        score,
        nextQuestion,
        prevQuestion
    };
}