import { getExercises } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
  const query = url.searchParams.get('q')?.toLowerCase() ?? '';

  let allExercises = await getExercises();

  const filteredExercises = allExercises.filter(exercise => 
    exercise.name.toLowerCase().includes(query) ||
    exercise.bodyPart.toLowerCase().includes(query) ||
    exercise.target.toLowerCase().includes(query)
  );

  return {
    exercises: filteredExercises,
    query
  };
}
