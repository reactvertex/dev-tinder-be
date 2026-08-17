const mongoose = require('mongoose');

const connectDB = async() =>{  
    await mongoose.connect('mongodb+srv://sharmasandeep2085_db_user:xFiz0T13n6ymkBFK@cluster0.pg1ul8i.mongodb.net/devTinder');
}

module.exports = connectDB;



