const express = require('express');

const app = express();

app.use('/', (req, res)=>{
 res.send('Hello Node')
 console.log("Hello Node")
})


app.listen(3000, () =>{
    console.log('Server is Sucessfully listen on port 3000')
})