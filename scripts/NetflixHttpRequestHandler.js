const makeRequest = (method, url, body) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.onload = () => {
      if (request.status >= 200 && request.status <= 299) {
        resolve(request.responseText);
      } else {
        const reason = new Error("Oops, something went wrong!");
        reject(reason);
      }
    };

    request.open(method, url);
    request.send(body);
  });
};

const getAllProgrammes = () => {
  makeRequest(
    "GET",
    "http://localhost:8080/netflixWatchlistApp/api/netflix/getAllProgrammes"
  )
    .then(response => console.log(response))
    .catch(error => console.log(error.message));
};

const getAProgram = () => {
  //programID
  let id = document.getElementById().value;

  makeRequest(
    "GET",
    `http://localhost:8080/AccountSETemplate/api/account/getAnAccount/${id}`
  )
    .then(request => {
      if (request != "null") {
        console.log(request);
      } else {
        console.log("Program does not exist");
      }
    })
    .catch(error => console.log(error.message));
};

const addAProgram = () => {
  const program = {
    //country
    country: document.getElementById().value,
    //title
    title: document.getElementById().value,
    //genreID
    genreId: document.getElementById().value
  };

  makeRequest(
    "POST",
    "http://localhost:8080/netflixWatchlistApp/api/addAProgram",
    JSON.stringify(program)
  )
    .then(request => console.log(request))
    .catch(error => console.log(error.message));
};

const removeAProgram = () => {
  //programID
  let id = document.getElementById().value;

  makeRequest(
    "DELETE",
    `http://localhost:8080/netflixWatchlistApp/api/netflix/removeAProgram/${id}`
  )
    .then(request => {
      console.log(request);
    })
    .catch(error => {
      console.log(error.message);
    });
};

const updateAProgram = () => {
  const program = {
    //country
    country: document.getElementById().value,
    //title
    title: document.getElementById().value,
    //genreID
    genreId: document.getElementById().value
  };

  //programID
  let id = document.getElementById().value;

  makeRequest(
    "PUT",
    `http://localhost:8080/netflixWatchlistApp/api/netflix/updateAProgram/${id}`,
    JSON.stringify(program)
  )
    .then(request => console.log(request))
    .catch(error => console.log(error.message));
};
