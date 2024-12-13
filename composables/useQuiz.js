import { ref } from 'vue'

export default function(quiz) {
    const quiz = {}

    const currentQuestionIndex = ref(0)
    
    const score = ref(0)

    return { 
        quiz, 
        currentQuestionIndex, 
        score }
}