import axios from "axios";

const API_URL =
  "https://exercisedb.p.rapidapi.com/exercises";
// 
const headers = {
  "X-RapidAPI-Key": '4f5513a577mshc37db61c2eaa119p102a15jsnd6d95cc214f4',
    
  "X-RapidAPI-Host":
    "exercisedb.p.rapidapi.com",
};

export const searchExercises = async (
  query: string
) => {
  try {
    const response = await axios.get(
      `${API_URL}/name/${query}`,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};