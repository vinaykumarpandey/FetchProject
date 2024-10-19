// let promise = new Promise(function(resolve, reject) {
//   alert("hELLO");
//   reject(56);
// })

// console.log(promise)


// let p1 = new Promise((resolve, reject) => {
//   //everything will execute in background
//   //and when it will be done then it will execute this function

//   console.log("promise p1 is pending")
//   setTimeout(() => {
//     alert("I am a promise p1 and I am fulfilled after 5 seconds");
//     console.log("I am promise p1 and I am fulfillesd");
//     resolve(true);
//   }, 5000)
// })

// let p2 = new Promise((resolve, reject) => {
//   //everything will execute in background
//   //and when it will be done then it will execute this function

//   console.log("promise p2 is pending")
//   setTimeout(() => {
//     alert("I am a promise p2 and I am fulfilled after 5 seconds");
//     console.log("I am promise p2 and I am rejected");
//     reject(false);
//   }, 5000)
// })

// p1.then((value) => {
//   console.log(value);
// })

// p2.catch(error => {
//   console.log("some error occured in p2");
// })


// console.log(p1);
// console.log(p2);

//promise chaining


// let p1 = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     resolve("promise p1 - resolve after 2 sec");
//   })

// }, 2000)


// p1.then((val) => {
//   console.log("resolving after 2 sec" + val);
//   let p2 = new Promise((resolve, reject) => {

//   })
//   return 56;
// }).then((val) => {
//   console.log("promise p2 is resolved with value " + val);
// })


//async and await

// function weather() {
//   return 5;
// }

// weather().then((x) => {
//   alert(x);
// })

async function weather() {

    let delhiWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("27 Degree");
      })
    }, 2000)
  
    let bangaloreWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("21 Degree");
      })
    }, 5000)
  
    // delhiWeather.then(alert);
    // bangaloreWeather.then(alert);
  
    console.log("Fetching delhi weather, pls wait");
    let delhiW = await delhiWeather;
    console.log("delhi weather fetched " + delhiW);
  
    console.log("Fetching bangalore weather, pls wait");
    let bangaloreW = await bangaloreWeather;
    console.log("bangalore weather fetched " + bangaloreW);
  
    return [delhiW, bangaloreW]
  
  }
  
  const precipitation = async () => {
    console.log("hey i am abc and i am not waiting");
  }
  
  const main1 = async () => {
    console.log("welcome to wether controle room")
    let a = await weather();
    let b = await precipitation()
  }
  
  main1();