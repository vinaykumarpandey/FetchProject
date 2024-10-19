function displayCarBrands(response) {
    const carBrandList = document.getElementById('car-brand-list');
    carBrandList.innerHTML = '';
 
    // Create a table element
    const table = document.createElement('table');
    table.className = 'car-brand-table';
 
    // Create the table header
    const headerRow = document.createElement('tr');
    const codeHeader = document.createElement('th');
    codeHeader.textContent = 'Code';
    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'Name';
 
    headerRow.appendChild(codeHeader);
    headerRow.appendChild(nameHeader);
    table.appendChild(headerRow);
 
    // Populate the table with car brand data
    response.forEach(car => {
      const row = document.createElement('tr');
 
      const codeCell = document.createElement('td');
      codeCell.textContent = car.codigo;
 
      const nameCell = document.createElement('td');
      nameCell.textContent = car.nome;
 
      row.appendChild(codeCell);
      row.appendChild(nameCell);
      table.appendChild(row);
    });
 
    // Append the table to the carBrandList div
    carBrandList.appendChild(table);
 }
 
 let p = fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");
 
 p.then((response) => {
     return response.json();
 }).then((response) => {
     console.log(response);
     displayCarBrands(response);
 }).catch(error => {
     console.log('There was a problem fetching the car data ', error);
 });
 