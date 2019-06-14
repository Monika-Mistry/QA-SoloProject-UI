let netflix = [];

const getNetflixRecord = (id) => netflix.filter(value => value.netflixId === id).reduce(acc => acc);

const displayResults = results => {
    netflix = [];
    let resultObj = JSON.parse(results);

    //array of netflix programmes
    if (Array.isArray(resultObj)) {
        netflix = netflix.concat(resultObj);
    } else {
        netflix.push(resultsObj);
    }

    //keys for table headings
    let keys = Object.keys(netflix[0]);

    //create table
    let resultTable = document.getElementById('resultTable');
    resultTable.className = "table table-hover";
    resultTable.id = "resultTable";

    //create table header
    let tableHead = resultTable.createTHead();
    tableHead.className = "thead-light"

    //headers for results table
    keys.forEach(value => {
        let cell = document.createElement('th');
        cell.innerHTML = value;
        tableHead.appendChild(cell);
    })

    //create table body
    let tableBody = resultTable.createTBody();

    //create table rows
    netflix.forEach(value => {
        let row = tableBody.insertRow();

        for (let i = 0; i < keys.length; i++) {
            let cell = row.insertCell();
            let content = document.createTextNode(value[keys[i]]);
            cell.append(content);
        }
    });



};