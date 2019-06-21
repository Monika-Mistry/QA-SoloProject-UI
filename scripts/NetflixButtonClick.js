const getAllNetflix = "http://104.155.54.25:8888/netflixWatchlistApp/api/netflix/getAllProgrammes";
const getANetflix = "http://104.155.54.25:8888/netflixWatchlistApp/api/netflix/getAProgram/";
const removeNetflix = "http://104.155.54.25:8888/netflixWatchlistApp/api/netflix/removeAProgram/";
const addNetflix = "http://104.155.54.25:8888/netflixWatchlistApp/api/netflix/addAProgram/";
const updateNetflix = "http://104.155.54.25:8888/netflixWatchlistApp/api/netflix/updateAProgram/";

// const getAllNetflix =
//   "http://localhost:8080/netflixWatchlistApp/api/netflix/getAllProgrammes";
// const getANetflix =
//   "http://localhost:8080/netflixWatchlistApp/api/netflix/getAProgram/";
// const removeNetflix =
//   "http://localhost:8080/netflixWatchlistApp/api/netflix/removeAProgram/";
// const addNetflix =
//   "http://localhost:8080/netflixWatchlistApp/api/netflix/addAProgram";
// const updateNetflix =
//   "http://localhost:8080/netflixWatchlistApp/api/netflix/updateAProgram/";

const getAllProgrammes = () => {
  makeRequest("GET", getAllNetflix)
    .then(response => {
      let programmes = [];
      let responseObj = JSON.parse(response);
      responseObj.forEach(element => {
        programmes.push(netflixMaker(element));
      });

      netflixDisplayAllResults(JSON.stringify(programmes));
    })
    .catch(error => console.log(error.message));
};

const getAProgram = () => {
  //programID
  let id = document.getElementById("netflixId").value;

  makeRequest("GET", getANetflix.concat(id))
    .then(response => {
      if (response != "null") {
        netflixDisplayResults(response);
      } else {
        console.log("Program does not exist");
      }
    })
    .catch(error => console.log(error.message));
};

const addAProgram = () => {
  const program = {
    //country
    country: document.getElementById("country").value,
    //title
    title: document.getElementById("title").value,
    //genreID
    genreId: Number(document.getElementById("genre").value)
  };
  makeRequest("POST", addNetflix, JSON.stringify(program))
    .then(response => {
      netflixDisplayResults(response);
    })
    .catch(error => console.log(error.message));
};

const removeAProgram = () => {
  //programID
  let id = document.getElementById("netflixId").value;

  makeRequest("DELETE", removeNetflix.concat(id))
    .then(response => {
      let responseMessage = JSON.parse(response);
      let modal = document.getElementById("delResponse");
      modal.innerText = responseMessage.message;
      $('#deleteModal').modal('show');
      getAllProgrammes();
    })
    .catch(error => console.log(error.message));
};

const updateAProgram = () => {
  const program = {
    //country
    country: document.getElementById("country").value,
    //title
    title: document.getElementById("title").value,
    //genreID
    genreId: document.getElementById("genre").value
  };

  //programID
  let id = document.getElementById("netflixId").value;

  makeRequest("PUT", updateNetflix.concat(id), JSON.stringify(program))
    .then(response => {
      netflixDisplayResults(response);
    })
    .catch(error => console.log(error.message));
};

const addToWatchlistTable = id => {
  //watch status
  let status = "PENDING";

  //program
  const program = {
    netflixId: id,
    status: status
  };

  makeRequest("POST", addWatchlist, JSON.stringify(program))
    .then(response => {
      window.location = "watchlist.html";
    })
    .catch(error => console.log(error.message));
};

const netflixMaker = netflix => {
  return {
    netflixId: netflix[0],
    title: netflix[1],
    country: netflix[2],
    genreName: netflix[3]
  };
};

getAllProgrammes();