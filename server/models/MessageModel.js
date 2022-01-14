/** @format */

// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI = ""
require("dotenv").config()

// UNCOMMENT THE LINE BELOW IF USING MONGO
const URI = process.env.MONGO_URI || myURI

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
// const URI = process.env.PG_URI || myURI;

/** @format */

const mongoose = require("mongoose")
const Schema = mongoose.Schema

// const MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ervpf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
  .connect(URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "Cluster0",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err))

const MessageSchema = new Schema({
  message: { type: String, required: true },
  password: { type: String, required: true },
  created_at: {
    type: Date,
    default: Date.now(),
  },
})

const Message = mongoose.model("message", MessageSchema)

module.exports = {
  Message,
}
