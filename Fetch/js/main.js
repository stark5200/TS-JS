// Fetch Apis requires a discussion of ..
// callbacks, Promises, Thenables and Async/Await

// callbacks

function firstFunction(paremeters, callback) {
  // do stuff
  callback()
}

// AKA callback hell

// Promises
// 3 states: Pending, fulfilled, Rejected
const myPromise = new Promise((resolve, reject) => {
  const error = true;
  if (!error) {
    resolve("Yes! Resolved the promise!");
  } else {
    resolve("No! Rejected the promise!");
  }
});

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("Mynext promise resolved");
  }, 300);
}); 
//console.log(myPromise);

myNextPromise.then(value => {
  //console.log(value);
});

myPromise.then(value => {
  return value+1;
}).then(newValue => {
  //console.log(newValue);
}).catch(err => {
  console.error(err);
})

// pending

const users = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
  return response.json();
})
.then(data => {
  data.forEach(user => {
    //console.log(user);
  })
});

//console.log(users);


// Async / Await

const myGuys = {
  GuyList: []
}

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonGuyData = await response.json();
  return jsonGuyData; 
}

myCoolFunction();

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myGuys.GuyList = data;
  //console.log(data);
} 

anotherFunc();
//console.log(myGuys.GuyList);

//workflow function examples

const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();

  const userEmailArray = jsonUserData.map(user => {
    return user.email;
  });

  postToWebage(userEmailArray);
}

const postToWebage = (data) => {
  console.log(data);
}

getAllUserEmails();

// 2nd paremeter of fetch is an object

const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });
  const jsonJokeData = await response.json();

  console.log(jsonJokeData.joke);
}

getDadJoke();


// skipped rest of jokes part