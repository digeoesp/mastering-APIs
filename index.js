// Imports
const fetch = require('node-fetch'); // only works in NODE

// Request to a website that returns html
// fetch('https://espn.com') // url, endpoint
// .then((response) => {
//     console.log(response);
//     return response.text(); // an extra that happens to see the text
// })
// .then((html) => {
//     console.log('html');
// });

// Requests to a third party database that returns a json object
fetch('https://api.github.com/users/facebook') // endpoint
fetch('https://api.github.com/users/romebell') // endpoint
.then(response => {
    return response.json(); // change this reponse so we can work with it in JavaScript
})
fetch('https://api.spacexdata.com/v3/capsules')
    console.log(c102Object);
    console.log(capsuleSerial);
    console.log(capsuleStatus);
}) 
});

// Request to a website that returns html
// fetch('https://espn.com') // url, endpoint
// .then((response) => {
//     console.log(response);
//     return response.text(); // an extra that happens to see the text
// })
// .then((html) => {
//     console.log('html');
// }); 