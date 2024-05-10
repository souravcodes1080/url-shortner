import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);

    const dbName = db.connection.name;
    const dbPort = db.connection.port;
    console.log(`Connected to Database: ${dbName} and port no.: ${dbPort}`);
  } catch (error) {
    console.log(
      `Something went wrong while connecting to Database.\n\n ${error}`
    );
  }
};

export { connectdb };
