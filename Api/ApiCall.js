import axios from "axios";

const API_KEY = "df4e888c43bec24422bfa0f9a44e5747";
const API_BASE_URL = "https://api.themoviedb.org/3/";

const API_KEY_POPULAR_MOVIE = `${API_BASE_URL}movie/popular?api_key=${API_KEY}`;
const API_KEY_POPULAR_TV = `${API_BASE_URL}tv/popular?api_key=${API_KEY}`;
const API_M_UPCOMING = `${API_BASE_URL}movie/upcoming?api_key=${API_KEY}`;
const API_TV_TODAY = `${API_BASE_URL}tv/airing_today?api_key=${API_KEY}`;

export async function getPopularMovie() {
  try {
    const response = await axios.get(API_KEY_POPULAR_MOVIE);
    return response.data.results.slice(0, 10);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPopularTvData() {
  try {
    const response = await axios.get(API_KEY_POPULAR_TV);
    return response.data.results.slice(0, 10);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUpcomingMovie() {
  try {
    const response = await axios.get(API_M_UPCOMING);
    return response.data.results.slice(0, 10);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAiringToday() {
  try {
    const response = await axios.get(API_TV_TODAY);
    return response.data.results.slice(0, 10);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
