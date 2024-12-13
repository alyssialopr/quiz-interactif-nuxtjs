import { useContent } from '@nuxt/content';

export default async function useQuizs() {
  const { data } = await useContent('quizs').fetch();
  return data;
}