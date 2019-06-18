const displayResults = (results, headers, numFields, fct) => {
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
      } else {
        let button = document.createElement('button');
        button.type = "button";
        button.className = "btn btn-dark myBtn";
        button.innerHTML = fct;
        cell.append(button);
      }
    }
  });
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
  displayResults(results, headers, 4, "Add");
};

const watchlistDisplayResults = results => {
  let headers = ["title", "status", "details", "select"];
  displayResults(results, headers, 2, "Delete");
};
