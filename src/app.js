const express = require('express');
const {adminAuthorization, userAuthorization} = require('./authorization');

const app = express();
app.use('/admin', adminAuthorization);

app.get('/user/login',(req, res) =>{
    res.send("user login")
})

app.get('/user',userAuthorization, (req, res) =>{
    res.send("get all user add")
})

app.get('/admin/getAllData', (req, res) =>{
    res.send("get all add")
})

app.get('/admin/deleteUser', (req, res) =>{
    res.send("deleted user")
})

app.listen(3000, () =>{
    console.log('Server is Sucessfully listen on port 3000')
})