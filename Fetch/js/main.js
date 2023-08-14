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
  }, 3000);
}); 
//console.log(myPromise);

myNextPromise.then(value => {
  console.log(value);
});

myPromise.then(value => {
  return value+1;
}).then(newValue => {
  console.log(newValue);
}).catch(err => {
  console.error(err);
})


