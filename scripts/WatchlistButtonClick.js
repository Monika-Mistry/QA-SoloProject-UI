// const getAllWatchlist = "http://34.90.182.15:8888/netflixWatchlistApp/api/watchlist/getWatchlist";
// const removeWatchlist = "http://34.90.182.15:8888/netflixWatchlistApp/api/watchlist/removeAProgram";
// const addWatchlist = "http://34.90.182.15:8888/netflixWatchlistApp/api/watchlist/addAProgram";
// const updateWatchlist = "http://34.90.182.15:8888/netflixWatchlistApp/api/watchlist/updateAProgram/";

const getAllWatchlist = "http://localhost:8080/netflixWatchlistApp/api/watchlist/getWatchlist";
const removeWatchlist = "http://localhost:8080/netflixWatchlistApp/api/watchlist/removeAProgram/";
const addWatchlist = "http://localhost:8080/netflixWatchlistApp/api/watchlist/addAProgram";
const updateWatchlist = "http://localhost:8080/netflixWatchlistApp/api/watchlist/updateAProgram/";

const addToWatchlist = () => {
  //netflix ID
  let title = document.getElementById("netflixProgram");
  let netflixID = title.options[title.selectedIndex].value;

  //watch status
  let status = document.getElementById("status");
  let watchStatus = status.options[status.selectedIndex].value;

  //program
  const program = {
    netflixId: netflixID,
    status: watchStatus
  };
  makeRequest(
    "POST",
    addWatchlist,
    JSON.stringify(program)
  )
    .then(response => {
      watchlistDisplayResults(response);
    })
    .catch(error => console.log(error.message));
};

const removeFromWatchlist = () => {
  let id = document.getElementById("netflixProgram").nodeValue;
  makeRequest(
    "DELETE",
    removeWatchlist
  )
    .then(response => {
      watchlistDisplayResults(response);
    })
    .catch(error => console.log(error.message));
};

const getWatchlist = () => {
  makeRequest(
    "GET",
    getAllWatchlist
  )
    .then(response => {
      watchlistDisplayResults(response);
    })
    .catch(error => console.log(error.message));
};
const updateWatchlistProgram = () => {
  let status = document.getElementById("status").nodeValue;
  let id = document.getElementById("netflixProgram").nodeValue;
  makeRequest(
    "PUT",
    updateWatchlist + id,
    JSON.stringify(status)
  )
    .then(response => {
      watchlistDisplayResults(response);
    })
    .catch(error => console.log(error.message));
};
