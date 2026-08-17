const express = require('express');
const connectDB = require('./config/database');
const app = express();
const User = require('./models/user');
app.use(express.json())

app.post('/singup', async (req, res) => {

    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send("user added successfuly");
    } catch (error) {
        res.send(401).send("failed to add user")
    }
})

app.get('/user', async (req, res) => {
    const emailId = req.body.email;
    const user = await User.find({ email: emailId });
    try {
        if (user.length) {
            res.status(200).send(user)
        }
    } catch (err) {
        res.status(404).send("user not found")
    }
})
// get feed api - get all user from the databse
app.get("/feed", async (req, res) => {
    const userList = await User.find();
    try {
        if (userList.length) {
            res.status(200).send(userList)
        }
    } catch (err) {
        res.status(404).send("user not found")
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

