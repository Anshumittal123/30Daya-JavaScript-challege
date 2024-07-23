// ========================================== Day 11 : Promise and Async / Await ===========================

// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2 second timeout and log the message to the console.
const myPromise = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("resolved");
    }, 2000);
});

myPromise.then((value)=>{
    console.log(`Your promise is ${value}!!`);
});

// Task 2: Create a promise that rejects with an error message after a 2 second timeout and handle the error using .catch().
const myPromise2 = new Promise((res, rej)=>{
    setTimeout(()=>{
        rej('rejected');
    }, 2000);
});

myPromise2.then((e)=>{
    console.log(`Your promise is ${e}!!`);
})
.catch((e)=>{
    console.log(`Your promise is ${e}!!`);
});

// OUTPUT:
// Task 1:
// Your promise is resolved!!

// Task 2:
// Your promise is rejected!!


// Activity 2: Chaning Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promise to log messages in a specific order. 
function fetchData(data, delay){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(data);
        }, delay);
    });
}

fetchData('fetch data from server 1', 1000)
.then((result)=>{
    console.log(result);
    return fetchData('fetch data from server 2', 2000);
})
.then((result)=>{
    console.log(result);
    return fetchData('fetch data from server 3', 1500);
})
.then((result)=>{
    console.log(result);
    return fetchData('fetch data from server 4', 500);
})
.then((result)=>{
    console.log(result);
   console.log('All data fetch from servers');
}).catch((e)=>{
    console.log('something wents wrong: ', e);
});

// OUTPUT:
// Task 3:
// fetch data from server 1
// fetch data from server 2
// fetch data from server 3
// fetch data from server 4
// All data fetch from servers


// Activity 3: Using Async / Await
// Task 4: write an async function that waits for a promise to resolve and then logs the resolved value.
async function asyncPromise(){
    await new Promise((res, rej)=>{
        res('resolved');
    })
    .then((value)=>{
        console.log(`Your aync promise is ${value}`);
    }).catch((e)=>{
        console.log('something wents wrong: ', e);
    })
}

asyncPromise();


// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
function tryCatchPromise(isError){
   return new Promise((res, rej)=>{
       setTimeout(()=>{
        if(isError){
            rej('Error: Data fetch failed!');
           }else{
            res('Date fetched successfully!');
           }
       }, 1000);
    });
}

async function handleFetchData(){
    try{
        const result = await tryCatchPromise(true);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

handleFetchData();

// OUTPUT:
// Task 4:
// Your aync promise is resolved

//Task 5:
// Error: Data fetch failed!


// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from from a public API and log the response data to the console using promises.
const apiKey = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(apiKey)
.then((response)=>{
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then((data)=>{
    console.log('Data from Public API: ', data);
}).catch(err=>{
    console.log(`There was a problem with the fetch opeartion : ${err}`);
});

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchData(){
    const api = 'https://jsonplaceholder.typicode.com/posts/2'
    try {
        const response = await fetch(api);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data fetched from API: ',data);
    } catch (error) {
        console.log(`There was a problem with the fetch opeartion : ${error}`);
    }
}
fetchData();

// OUTPUT:
// Task 6:
// Data fetched from API:  {
//     userId: 1,
//     id: 2,
//     title: 'qui est esse',
//     body: 'est rerum tempore vitae\n' +
//       'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
//       'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
//       'qui aperiam non debitis possimus qui neque nisi nulla'
//   }

// Task 7: 
// Data from Public API:  {
//     userId: 1,
//     id: 1,
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\n' +
//       'suscipit recusandae consequuntur expedita et cum\n' +
//       'reprehenderit molestiae ut ut quas totam\n' +
//       'nostrum rerum est autem sunt rem eveniet architecto'
//   }


// Activity 5: Concurrent Promises
// Task 8: Use promise.all to wait for multiple promises to resolve and then log all their values. 
function fetchData(data, delay){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(data)
        }, delay)
    });
}

const promise1 = fetchData('Data from fetch promise 1 (promise.all)', 1000);
const promise2 = fetchData('Data from fetch promise 2 (promise.all)', 2000);
const promise3 = fetchData('Data from fetch promise 3 (promise.all)', 1500);

Promise.all([promise1, promise2, promise3])
.then((results)=>{
    console.log('All promise resolved!');
    results.forEach((result, index)=>{
        console.log(`Result from promise ${index + 1}: ${result}`);
    })
})
.catch((err)=>{
    console.log(`Something went wrong: ${err}`);
});

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises. 
function fetchData(data, delay){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(data)
        }, delay)
    });
}

const promiseRace1 = fetchData('Data from fetch promise 1 (promise.race)', 1000);
const promiseRace2 = fetchData('Data from fetch promise 2 (promise.race)', 2000);
const promiseRace3 = fetchData('Data from fetch promise 3 (promise.race)', 1500);

Promise.race([promiseRace1, promiseRace2, promiseRace3])
.then((result)=>{
    console.log(`First resolved promise: ${result}`);
})
.catch((err)=>{
    console.log(`Something went wrong: ${err}`);
});

// OUTPUT:
// Task 8:
// Result from promise 1: Data from fetch promise 1 (promise.all)
// Result from promise 2: Data from fetch promise 2 (promise.all)
// Result from promise 3: Data from fetch promise 3 (promise.all)

// Task : 9 
// First resolved promise: Data from fetch promise 1 (promise.race)