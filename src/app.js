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
        res.status(401).send(`failed to add user ${error.message}`)
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

// update the user by id
app.patch('/user/:userId', async(req, res) =>{
    const userId = req.params.userId;
    const data = req.body;
    try{
      const ALLOW_UPDATE = ["photo", "about", "gender", "userProfile"];
      const isUpdateAllow = Object.keys(data).every((kl) => ALLOW_UPDATE.includes(kl));
      if(!isUpdateAllow){
       throw new Error("update are not allow")
      }
      if(data.skills?.length > 10){
        throw new Error("skill will not more then 10")
      }
      const userUpdate = await User.findByIdAndUpdate({_id: userId}, data, {
        runValidators: true
      });
      console.log(userUpdate);
      res.send("user update successfuly");
    }catch(err){
      res.status(404).send(`something went wrong ${err.message}`);
    }  
})

// delete the user by id
app.delete('/user', async(req, res) =>{
    const userId = req.body.userId;
    try{
      await User.findByIdAndDelete(userId);
      res.send("user delete successfuly");
    }catch(err){
      res.status(404).send("something went wrop");
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

