async function getShows() {
  try {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
getShows();
