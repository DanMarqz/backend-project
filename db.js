require('dotenv').config()
const mongoose = require('mongoose');

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGODB_URL);
    console.info('MongoDB Connected...');
  } catch(err){
    console.error(err);
  }
}

module.exports = { connectDB };