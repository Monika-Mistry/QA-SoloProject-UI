let results = [];
const getTitles = () => {
    makeRequest(
        "GET",
        "http://localhost:8080/netflixWatchlistApp/api/netflix/getAllProgrammes"
    )
        .then(response => {
            populateDropDown(response)
        })
        .catch(error => console.log(error.message));
}

const populateTitles = (programmes) => {
    results = [];
    let resultObj = JSON.parse(results);
    
    //array of netflix programmes
    if (Array.isArray(resultObj)) {
        netflix = netflix.concat(resultObj);
    } else {
        netflix.push(resultObj);
    }

    //select dropdown
    let dropdown = document.getElementById("netflixProgram");

    //populate dropdown
    results.forEach(value => {
        let option = document.createElement('option');
        option.value = value[netflixId];
        option.innerHTML = value[title];
        dropdown.appendChild(option);
    })


};