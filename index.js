const express= require('express');
const app=express();


app.get('/', function(req,res){

    res.send('Diana says hello');
});

app.listen(4000);
console.log('Application running and listening on port 4000');