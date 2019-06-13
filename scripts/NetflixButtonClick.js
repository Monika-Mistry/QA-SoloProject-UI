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
    let id = document.getElementById("netflixId").value;
  
    makeRequest(
      "GET",
      `http://localhost:8080/netflixWatchlistApp/api/netflix/getAProgram/${id}`
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
      country: document.getElementById("country").value,
      //title
      title: document.getElementById("title").value,
      //genreID
      genreId: document.getElementById("genreId").value
    };
  
    makeRequest(
      "POST",
      "http://localhost:8080/netflixWatchlistApp/api/netflix/addAProgram",
      JSON.stringify(program)
    )
      .then(request => console.log(request))
      .catch(error => console.log(error.message));
  };
  
  const removeAProgram = () => {
    //programID
    let id = document.getElementById("netflixId").value;
  
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
      country: document.getElementById("country").value,
      //title
      title: document.getElementById("title").value,
      //genreID
      genreId: document.getElementById("genreId").value
    };
  
    //programID
    let id = document.getElementById("netflixId").value;
  
    makeRequest(
      "PUT",
      `http://localhost:8080/netflixWatchlistApp/api/netflix/updateAProgram/${id}`,
      JSON.stringify(program)
    )
      .then(request => console.log(request))
      .catch(error => console.log(error.message));
  };
  