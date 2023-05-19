import mongoose from "mongoose";

//by using .connect we can connect our project to the mongodb, it will take two argument 1) URL 2) object
// to connect to the mongodb we can use two library 1) mongus 2) mongoose
const Connection = async (username, password) => {
    //const URL = `mongodb+srv://${username}:${password}@crud-app.qjinj8r.mongodb.net/?retryWrites=true&w=majority`;
    const URL = `mongodb+srv://${username}:${password}@cluster0.mp0plnf.mongodb.net/?retryWrites=true&w=majority`;
        try{
           await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true });
           console.log('Database connected successfully');
        }catch(error){
            console.log('Error while connecting with the database ', error);
        }
}

export default Connection;