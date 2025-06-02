import { getExercises } from '$lib/api';

export async function load() {
  try {
    const exercises = await getExercises();
    console.log('API Response:', exercises);
    return {
      exercises
    };
  } catch (error) {}
}