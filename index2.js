const express = require('express');
var app = express(); //create an express application

app.get('/a*le', function(request, response) { //this is a get request
    console.log('apple or ale is being printed');
    response.send('apple or ale?');
});

// Accept the word whoa with an aribitrary number of os and as,returning"I know, right?!"
app.get('/who+a+', function(request, response) { 
    console.log('whoa is being printed');
    response.send('I know right!');
});

//Take a first name and last name as parameters, returning a greeting for that user.
app.get('/hello/:firstName/:lastName', function(request,response){
    console.log(`got request for "/hello/${request.params.firstName}" and "/${request.params.lastName}"`);
    response.send(`hello ${request.params.firstName} ${request.params.lastName}`);
});

//Take a word as a parameter and returning the word reversed. https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
app.get('/hello/:string', function(request,response){
    console.log(`got request for reverse string`);
    const stringParam = request.params.string;
	const reverseString = stringParam.split("").reverse().join("");
	response.send(`hello ${reverseString}`);
});

app.get('*', function(request, response) {
    response.status(404).send('uh oh! page not found!');
});

app.listen(3010, function() { 
    console.log('Example app listening on port 3010');
});