
const addToWatchlist = () => {
    let program;
    makeRequest(
        "POST",
        "http://localhost:8080/netflixWatchlistApp/api/watchlist/addAProgram",
        JSON.stringify(program)
    )
        .then(response => {
            watchlistDisplayResults(response)
        })
        .catch(error => console.log(error.message));
};

const removeFromWatchlist = () => {
    let id;
    makeRequest(
        "DELETE",
        `http://localhost:8080/netflixWatchlistApp/api/watchlist/removeAProgram\{id}`
    )
        .then(response => {
            watchlistDisplayResults(response)
        })
        .catch(error => console.log(error.message));
};

const getWatchlist = () => {
    makeRequest(
        "GET",
        "http://localhost:8080/netflixWatchlistApp/api/watchlist/getWatchlist"
    )
        .then(response => {
            watchlistDisplayResults(response)
        })
        .catch(error => console.log(error.message));
};
const updateWatchlistProgram = () => {
    let status;
    let id;
    makeRequest(
        "PUT",
        `http://localhost:8080/netflixWatchlistApp/api/watchlist/updateAProgram/{id}`,
        JSON.stringify(status)
    )
        .then(response => {
            watchlistDisplayResults(response)
        })
        .catch(error => console.log(error.message));
};
