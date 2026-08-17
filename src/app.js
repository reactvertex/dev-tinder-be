const express = require('express');
const connectDB = require('./config/database');
const app = express();
const User = require('./models/user');
app.use(express.json())

app.post('/singup', async(req, res)=>{
    
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send("user added successfuly");
    } catch (error) {
        res.send(401).send("failed to add user")
    }
})

connectDB().then(() => {
    console.log("DB connected Sucessfully");
    app.listen(3000, () => {
        console.log('Server is Sucessfully listen on port 3000')
    })
}).catch((err) => {
    console.log("DB connection failed")
})

