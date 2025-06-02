//hämtad från https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb alltså API för övningarna

import axios from 'axios';

const EXERCISE_API_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const API_KEY = 'dbd0e47acfmsh7fb77b4bda761d0p1d616ejsnea9aa634d3c9';

const exerciseApi = axios.create({
  baseURL: EXERCISE_API_URL,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  , params: {
    limit: '1300',
    offset: '0'
  },
});

export const getExercises = async () => {
  try {
    const response = await exerciseApi.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching exercises:', error);
    return [];
  }
};

export const getExerciseById = async (id) => {
  try {
    const response = await exerciseApi.get(`/exercise/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching exercise ${id}:`, error);
    return null;
  }
};

