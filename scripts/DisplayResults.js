const displayResults = (results, headers) => {
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
      let content = document.createTextNode(value[headers[i]]);
      cell.append(content);
    }
  });
};

const netflixDisplayResults = results => {
  let headers = ["netflixId", "title", "country", "genreId"];
  displayResults(results, headers);
};

const watchlistDisplayResults = results => {
  let headers = ["title", "status"];
  displayResults(results, headers);
}
