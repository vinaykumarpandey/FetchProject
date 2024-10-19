
const createTodo = async () => {

    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
  
    }
  
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
  
    let response = await p.json();
    return response;
  }
  
  const mainFunc = async () => {
    let todo = await createTodo();
    console.log(todo);
  }
  
  
  
//jsonplaceholder  