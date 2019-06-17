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
    "http://localhost:8080/netflixWatchlistApp/api/watchlist/addAProgram",
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
    `http://localhost:8080/netflixWatchlistApp/api/watchlist/removeAProgram\{id}`
  )
    .then(response => {
      watchlistDisplayResults(response);
    })
    .catch(error => console.log(error.message));
};

const getWatchlist = () => {
  makeRequest(
    "GET",
    "http://localhost:8080/netflixWatchlistApp/api/watchlist/getWatchlist"
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
    `http://localhost:8080/netflixWatchlistApp/api/watchlist/updateAProgram/{id}`,
    JSON.stringify(status)
  )
    .then(response => {
      watchlistDisplayResults(response);
    })
    .catch(error => console.log(error.message));
};
