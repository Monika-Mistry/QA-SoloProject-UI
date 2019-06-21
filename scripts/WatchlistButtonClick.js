const getAllWatchlist = "/netflixWatchlistApp/api/watchlist/getWatchlist";
const removeWatchlist = "/netflixWatchlistApp/api/watchlist/removeAProgram/";
const addWatchlist = "/netflixWatchlistApp/api/watchlist/addAProgram";
const updateWatchlist = "/netflixWatchlistApp/api/watchlist/updateAProgram/";

// const getAllWatchlist =
//   "http://localhost:8080/netflixWatchlistApp/api/watchlist/getWatchlist";
// const removeWatchlist =
//   "http://localhost:8080/netflixWatchlistApp/api/watchlist/removeAProgram/";
// const addWatchlist =
//   "http://localhost:8080/netflixWatchlistApp/api/watchlist/addAProgram";
// const updateWatchlist =
//   "http://localhost:8080/netflixWatchlistApp/api/watchlist/updateAProgram/";

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
  makeRequest("POST", addWatchlist, JSON.stringify(program))
    .then(response => {
      watchlistDisplayResults(response);
    })
    .catch(error => console.log(error.message));
};

const removeFromWatchlist = () => {
  let id = document.getElementById("netflixProgram").value;
  makeRequest("DELETE", removeWatchlist.concat(id))
    .then(response => {
      watchlistDisplayResults(response);
    })
    .catch(error => console.log(error.message));
};

const removeFromWatchlistTable = id => {
  makeRequest("DELETE", removeWatchlist.concat(id))
    .then(response => {
      watchlistDisplayResults(response);
      getWatchlist();
    })
    .catch(error => console.log(error.message));
};

const getWatchlist = () => {
  makeRequest("GET", getAllWatchlist)
    .then(response => {
      let programmes =[];
      let resultObj = JSON.parse(response);
      resultObj.forEach(element => {
        programmes.push(watchlistMaker(element));
      });

      watchlistDisplayAllResults(JSON.stringify(programmes));
    })
    .catch(error => console.log(error.message));
};
const updateWatchlistProgram = () => {
  let status = document.getElementById("status").value;
  let id = document.getElementById("netflixProgram").value;
  makeRequest("PUT", updateWatchlist.concat(id), status)
    .then(response => {
      watchlistDisplayResults(response);
    })
    .catch(error => console.log(error.message));
};

const watchlistMaker = watchlist => {
  return { netflixId: watchlist[0], title: watchlist[1], status: watchlist[2] };
};


getWatchlist();