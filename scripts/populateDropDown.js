// const getAllGenre = "http://34.90.182.15:8888/netflixWatchlistApp/api/genre/getAllGenres";


const getAllGenre =
  "http://localhost:8080/netflixWatchlistApp/api/genre/getAllGenres";


const getTitles = () => {
  makeRequest("GET", getAllNetflix)
    .then(response => {
      let programmes = [];
      let responseObj = JSON.parse(response);
      responseObj.forEach(element => {
        programmes.push(netflixMaker(element));
      });

      populateTitles(JSON.stringify(programmes));
    })
    .catch(error => console.log(error.message));
};

const getGenres = () => {
  makeRequest("GET", getAllGenre)
    .then(response => {
      console.table(response);
      populateGenres(response);
    })
    .catch(error => console.log(error.message));
};

const populateTitles = programmes => {
  populateDropDown(programmes, "netflixProgram", "netflixId", "title");
};

const populateGenres = genres => {
  populateDropDown(genres, "genre", "genreId", "genreName");
};

const populateDropDown = (response, drpdwn, value, field) => {
  let results = [];
  resultObj = JSON.parse(response);
  //add to array
  if (Array.isArray(resultObj)) {
    results = results.concat(resultObj);
  } else {
    results.push(resultObj);
  }

  //select dropdown
  let dropdown = document.getElementById(drpdwn);

  //populate dropdown
  results.forEach(item => {
    let option = document.createElement("option");

    option.value = item[value];
    option.innerHTML = item[field];
    dropdown.appendChild(option);
  });
};

