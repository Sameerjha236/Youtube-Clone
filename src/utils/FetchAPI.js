import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/";

const SEARCH_BASE_URL = "https://youtube-v3-lite.p.rapidapi.com/";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const searchOptions = {
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": "youtube-v3-lite.p.rapidapi.com",
  },
};

export const fetchSearchResults = async (url) => {
  try {
    const { data } = await axios.get(`${SEARCH_BASE_URL}${url}`, searchOptions);
    return data;
  } catch (error) {
    console.log("error -> ", error);
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}`, options);
    return data;
  } catch (error) {
    console.log("error -> ", error);
  }
};
