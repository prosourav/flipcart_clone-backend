import mongoose from "mongoose";

const Connection = async (username, password, dbname) => {
  try {
    const uri = `mongodb+srv://${username}:${password}@cluster0.vgudw.mongodb.net/${dbname}?retryWrites=true&w=majority`;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection success full");
  } catch (error) {
    console.log(`Error while connecting ${error}`);
  }
};

export default Connection;
