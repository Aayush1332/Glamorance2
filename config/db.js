import mongoose from "mongoose";
<<<<<<< HEAD
import dotenv from "dotenv";

dotenv.config();
=======
>>>>>>> origin/master

// Suppress the deprecation warning
mongoose.set('strictQuery', false);

<<<<<<< HEAD
const connectDB = async () => {
    // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    // .then(() => {
    //     console.log("Connected to database...");
    // }).catch((error) => {
    //     console.log(error);
    // });
    mongoose.connect("mongodb+srv://aayush:bhandari@mernstack.x8fygxq.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database...");
    }).catch((error) => {
        console.log(error);
    });
};
=======
//connetcing to database
const connectDB = async()=> {
    try {
      mongoose.connect(process.env.MONGO_URL)
      console.log("connected to database")
    } catch (error) {
      console.log(error);
    }
    }
>>>>>>> origin/master
    
export default connectDB;
