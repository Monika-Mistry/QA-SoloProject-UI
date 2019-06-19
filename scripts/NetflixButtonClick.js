const getAllNetflix = "http://34.90.182.15:8888/netflixWatchlistApp/api/netflix/getAllProgrammes";
const getANetflix = "http://34.90.182.15:8888/netflixWatchlistApp/api/netflix/getAProgram/";
const removeNetflix = "http://34.90.182.15:8888/netflixWatchlistApp/api/netflix/addAProgram"
const addNetflix = "http://34.90.182.15:8888/netflixWatchlistApp/api/netflix/removeAProgram/";
const updateNetflix = "http://34.90.182.15:8888/netflixWatchlistApp/api/netflix/updateAProgram/";

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
    getANetflix.concat(id)
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
    genreId: document.getElementById("genre").value
  };

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
    removeNetflix.concat(id)
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
    updateNetflix.concat(id),
    JSON.stringify(program)
  )
    .then(response => {
      netflixDisplayResults(response)
    })
    .catch(error => console.log(error.message));
};
