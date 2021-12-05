const mongoose = require("mongoose");

const { MONGO_URI, DATABASE } = process.env;
console.log(`Database: ${DATABASE}\nURI: ${MONGO_URI}`)
exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(`${MONGO_URI}${DATABASE}`)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};