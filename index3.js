const express = require('express');
var app = express(); //create an express application

//think about what the URL looks like and handle that: ?firstname=shaun&lastname=collins
app.get('/hello', function(request, response){	
	response.send(`hello ${request.query.firstName} ${request.query.lastName}`);
});

app.listen(3020, function() { 
    console.log('Example app listening on port 3020');
});

