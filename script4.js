// async function vinay(){
//       return 5;
// }

// vinay().then((x) => {
//     alert(x);
// })

async function weather(){

let delhiWeather = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve("27 deg");
    }, 1000)
});


let bangaloreWeather = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("21 deg");
    },7000)
});
  
// delhiWeather.then(alert);
// bangaloreWeather.then(alert);
let delhiW = await delhiWeather;
let bangaloreW = await bangaloreWeather;
return [delhiW, bangaloreW];

}

console.log("welcome to weather control room ")
let a =  weather();
console.log(a);