const express = require('express');
var app = express(); //create an express application

//define a route on `/hello/world`.  If user types in '/hello' then that request wouldn't be handled

app.get('/hello/world', function(request, response) { //this is a get request
    console.log('got request for "/hello/world"');
    response.send('hello there!');
});

app.get('/hello/penguin', function(request, response) { //this is a get request
    console.log('got request for "/hello/penguin"');
    response.send('hello penguin!');
});

//you can extract out the parameters
app.get('/hello/:id/:name', function(request, response) {
    console.log(`got request for "/hello/${request.params.name}"`);
    console.log(`got request for "/hello/${request.params.id}"`);
    response.send(`hello ${request.params.name}!`);
    response.send(`hello ${request.params.id}!`);
});

//you want to put the general query title after the specific query title otherwise the program will match the general one first and not match the specific query.  This is why the wildcard is at the very bottom
app.get('/books/:title/:author', function(request, response) {
    console.log(`got request for "/hello/${request.params.title}"`);
    response.send(`hello ${request.params.title}!`);
    response.send(`hello ${request.params.author}!`);
});

app.get('/books/:title', function(request, response) {
    console.log(`got request for "/hello/${request.params.title}"`);
    response.send(`hello ${request.params.title}!`);
});

app.get('/he*o/world', function(request, response) {//matches `/heo/world`, `/hello/world`, `/heyo/world`, etc
    response.send('hello there!');
});

//plus signs match the preceding character as many times as it happens in a row
app.get('/hel+o/world', function(request, response) {
    //matches `/helo/world`, `/helllllllllllo/world`, etc
    response.send('hello there!');
});

//question marks make a character optional
app.get('/hel?lo/world', function(request, response) {
    //matches `/helo/world`, `/hello/world`
    response.send('hello there!');
});

//parenthesis can be used to group characters
app.get('/he(ll)?o/world', function(request, response) {
    //here, the Ls in `hello` are optional
    //matches `/heo/world`, `/hello/world`
    response.send('hello there!');
});

//array for multiple routing names
app.get(['/hello', '/hi', '/hola'], function(request,response){
    response.send('hello there!');
});

//exercise
app.get(['/am*zon/delivery', '/am+zon/delivery', '/am?zon/world', '/am(ll)?on/world',], function(request, response) {
    response.send('Amazon delivery');
});

app.get('*', function(request, response) {
    response.status(404).send('uh oh! page not found!');
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