let netflix = [];

const displayResults = results => {
    netflix = [];
    let resultObj = JSON.parse(results);

    //array of netflix programmes
    if (Array.isArray(resultObj)) {
        netflix = netflix.concat(resultObj);
    } else {
        netflix.push(resultsObj);
    }


    //create table
    let resultTable = document.getElementById('resultTable');

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