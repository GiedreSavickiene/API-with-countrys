
async function loadIntoTable(url, table) {
    const tableHead = table.querySelector('thead');
    const tableBody = table.querySelector('tbody');
    const response = await fetch(url);
    // const { header, rows } = response.json()
    const data = await response.json();

    console.log(data)

}