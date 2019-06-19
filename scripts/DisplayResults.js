
const displayResults = (results, headers, numFields, fct, method) => {

  let records = [];
  let resultObj = JSON.parse(results);

  //array of netflix programmes
  if (Array.isArray(resultObj)) {
    records = records.concat(resultObj);
  } else {
    records.push(resultObj);
  }

  //create table
  let resultTable = document.getElementById("resultTable");
  let tableBody = document.getElementById("resultBody");

  //remove any rows except header
  for (let i = resultTable.rows.length - 1; i > 0; i--) {
    resultTable.deleteRow(i);
  }

  if (tableBody != null) {
    resultTable.removeChild(tableBody);
    tableBody = null;
  }

  tableBody = resultTable.createTBody();

  //create table rows
  records.forEach(value => {
    let row = tableBody.insertRow();

    for (let i = 0; i < headers.length; i++) {
      let cell = row.insertCell();
      if (i < numFields) {
        let content = document.createTextNode(value[headers[i]]);
        cell.append(content);
      } else if (headers[i] === "details") {
        let button = document.createElement('button');
        button.type = "button";
        button.className = "btn btn-dark myBtn";
        button.innerHTML = "Details";
        cell.append(button);

      } else if (headers[i] === "select") {
        let btnFunction = method.concat("(").concat(value.netflixId).concat(")");
        let btnCRUD = document.createElement('input');
        btnCRUD.type = "button";
        btnCRUD.className = "btn btn-dark myBtn";
        btnCRUD.value = fct;
        btnCRUD.addEventListener("click", function () {
          btnFunction;
        });

        cell.append(btnCRUD);

      }
    }
  });
};

const netflixDisplayAllResults = results => {
  let headers = [
    "netflixId",
    "title",
    "country",
    "genreName",
    "details",
    "select"
  ];

  displayResults(results, headers, 4, "Add To Watchlist", "addToWatchlistTable");
};

const netflixDisplayResults = results => {
  let headers = [
    "netflixId",
    "title",
    "country",
    "genreId",
    "details",
    "select"
  ];

  displayResults(results, headers, 4, "Add", "addToWatchlistTable");
};

const watchlistDisplayResults = results => {
  let headers = ["netflixId", "status", "details", "select"];

  displayResults(results, headers, 2, "Delete", "removeFromWatchlistTable");

};

const watchlistDisplayAllResults = results => {
  let headers = ["title", "status", "details", "select"];

  displayResults(results, headers, 2, "Delete", "removeFromWatchlistTable");

};
