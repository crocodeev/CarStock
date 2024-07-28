import { connectDB } from "@/config/db";
import { Db } from "mongodb";
import { TMarkModel } from "./types";

const collection = process.env.DB_COLLECTION;

class Mark {

    private db: Db;
    private collection: string; 

    constructor(db: Db){

        this.db = db;
        this.collection = "stock";
    }

    async getListWithCount(): Promise<TMarkModel[] | undefined> {

        try {

            const pipeline = [
                { $group: { _id: "$mark", count: { $sum: 1} }},
                { $sort: { "_id": 1}}
            ]

            const db = await connectDB();
            const result = await db.collection(this.collection).aggregate(pipeline).toArray();

            return result as TMarkModel[];
            
        } catch (error) {
            
            console.log(error);
            throw error;
        }
        
    }
}

export { Mark };