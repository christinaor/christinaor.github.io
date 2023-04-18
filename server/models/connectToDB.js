import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.DB_URI;

const URI = process.env.MONGO_URI || MONGO_URI;

const connectionOptions = {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: process.env.DB_NAME,
};

const connectToDB = async () => {
  try {
    await mongoose.connect(URI, connectionOptions);
    console.log('Connected to db.')
  } catch (error) {
    console.log('Error connecting to db: ', error);
  }
};

// module.exports = connectToDB;
export default connectToDB;
