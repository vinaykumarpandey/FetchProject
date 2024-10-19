function displayCarBrands(response) {
   const carBrandList = document.getElementById('car-brand-list')
   carBrandList.innerHTML ='';

   console.log("The reponse is " + response);

   response.forEach(car => {
     const carBrandDiv = document.createElement('div');
     carBrandDiv.className = 'car-brand';
     carBrandDiv.textContent = `Code: ${car.codigo}, Name: ${car.nome}`;
     carBrandList.appendChild(carBrandDiv);
   });

}





let p = fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");

p.then((response) => {
    return response.json();
}).then((response) => {
    console.log(response);
    displayCarBrands(response);
}).catch(error => {
    console.log('There was problem fetching the car data ', error)
})
