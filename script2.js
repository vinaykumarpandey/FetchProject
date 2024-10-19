

let p = fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");

p.then((response) => {
    return response.json();
}).then((res)=> {
    console.log(res);
    displayCarBrands(res);
}).catch(err => console.log("There was some problem catching the data " +err));

function displayCarBrands(res){
    let carBrandList = document.getElementById('car-brand-list');
    carBrandList.innerHTML='';

    res.forEach(car =>{
        const carBrandDiv = document.createElement('div');
        carBrandDiv.className = 'car-brand';
        carBrandDiv.textContent =`Code: ${car.codigo}, Name: ${car.nome}`;
        carBrandList.appendChild(carBrandDiv);
     })



}