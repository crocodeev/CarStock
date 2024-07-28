import 'dotenv/config';
import { MongoClient, Db } from 'mongodb';

const connectionString = process.env.DB_CONNECTION_STRING;
const database = process.env.DB_NAME;

let client: MongoClient;
let db: Db;

async function connectDB() {
    
    if(db){
        return db
    }

    try {

        if(connectionString && database){

            client = await MongoClient.connect(connectionString);
            db = client.db(database);
            console.log("Connected to database");
            return db
            
        }else{

            throw new Error("Connection string and database name should not be undefined!");
        }
        
        
    } catch (error) {
        console.error(error);
        process.exit(1);
    }

}

export { connectDB }