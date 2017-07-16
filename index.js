const express = require('express');
//create an express application
var app = express();

//define a route on `/hello/world`.  If user types in '/hello' then that request wouldn't be handled

app.get('/hello/world', function(request, response) { //this is a get request
    console.log('got request for "/hello/world"');
    response.send('hello there!');
});

app.get('/hello/penguin', function(request, response) { //this is a get request
    console.log('got request for "/hello/penguin"');
    response.send('hello penguin!');
});

// app.post('/add-to-cart', function(request, response) { //adding something 
//     console.log('got request for "/hello/world"');
//     response.send('hello there!');
// });

// app.put('/modify-cart', function(request, response) { //adding something 
//     console.log('got request for "/hello/world"');
//     response.send('hello there!');
// });

//have the application listen on a specific port
app.listen(3000, function () { //to test, do localhost: 3000
    console.log('Example app listening on port 3000!');
});