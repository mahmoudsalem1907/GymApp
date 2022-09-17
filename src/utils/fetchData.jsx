export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "d2e1650968msh551d50f16866cffp1c3970jsn1d027882294c",
  },
};
export const youtubeoptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d2e1650968msh551d50f16866cffp1c3970jsn1d027882294c",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};
