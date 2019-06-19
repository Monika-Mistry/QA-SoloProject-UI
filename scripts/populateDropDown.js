const getAllGenre = "http://34.90.182.15:8888/netflixWatchlistApp/api/genre/getAllGenres";
const getAllTitle = "http://34.90.182.15:8888/netflixWatchlistApp/api/netflix/getAllProgrammes";

const getTitles = () => {
    makeRequest(
        "GET",
        getAllTitle
    )
        .then(response => {
            populateTitles(response);
        })
        .catch(error => console.log(error.message));
};

const getGenres = () => {
    makeRequest("GET", getAllGenres).then(response => {
        populateGenres(response);
    }).catch(error => console.log(error.message));
};

const populateTitles = programmes => {
    populateDropDown(programmes, "netflixProgram", "netflixId", "title");


};

const populateGenres = genres => {
    populateDropDown(genres, "genre", "genreId", "genre");
};

const populateDropDown = (response, drpdwn, value, field) => {
    let results = [];
    resultObj = JSON.parse(response);
    //add to array
    (Array.isArray(resultObj)) {
        lts = results.concat(resultObj);
    } else {
        results.push(resultObj);
    };



    //select dropdown
    let dropdown = document.getElementById(drpdwn);

    //populate dropdown
    results.forEach(item => {
        let option = document.createElement('option');
        option.value = item.value;
        option.innerHTML = item.field;
        dropdown.appendChild(option);
    });


};