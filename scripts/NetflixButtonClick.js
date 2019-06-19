// const getAllNetflix = "http://34.90.182.15:8888/netflixWatchlistApp/api/netflix/getAllProgrammes";
// const getANetflix = "http://34.90.182.15:8888/netflixWatchlistApp/api/netflix/getAProgram/";
// const removeNetflix = "http://34.90.182.15:8888/netflixWatchlistApp/api/netflix/removeAProgram";
// const addNetflix = "http://34.90.182.15:8888/netflixWatchlistApp/api/netflix/addAProgram/";
// const updateNetflix = "http://34.90.182.15:8888/netflixWatchlistApp/api/netflix/updateAProgram/";


const getAllNetflix = "http://localhost:8080/netflixWatchlistApp/api/netflix/getAllProgrammes";
const getANetflix = "http://localhost:8080/netflixWatchlistApp/api/netflix/getAProgram/";
const removeNetflix = "http://localhost:8080/netflixWatchlistApp/api/netflix/removeAProgram/";
const addNetflix = "http://localhost:8080/netflixWatchlistApp/api/netflix/addAProgram";
const updateNetflix = "http://localhost:8080/netflixWatchlistApp/api/netflix/updateAProgram/";

const getAllProgrammes = () => {
  makeRequest(
    "GET",
    getAllNetflix
  )
    .then(response => {
      netflixDisplayResults(response)
    })
    .catch(error => console.log(error.message));
};

const getAProgram = () => {
  //programID
  let id = document.getElementById("netflixId").value;

  makeRequest(
    "GET",
    getANetflix + id
  )
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

  console.log(program);
  console.log(JSON.stringify(program));
  makeRequest(
    "POST",
    addNetflix,
    JSON.stringify(program)
  )
    .then(response => {
      netflixDisplayResults(response)
    })
    .catch(error => console.log(error.message));
};

const removeAProgram = () => {
  //programID
  let id = document.getElementById("netflixId").value;

  makeRequest(
    "DELETE",
    removeNetflix + id
  )
    .then(response => {
      let responseMessage = JSON.parse(response);
      window.alert(responseMessage.message);
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

  makeRequest(
    "PUT",
    updateNetflix + id,
    JSON.stringify(program)
  )
    .then(response => {
      netflixDisplayResults(response)
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