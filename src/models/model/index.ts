import { connectDB } from "@/config/db";
import { TModel } from "./types";
import { Db } from "mongodb";

class Model {

    private db: Db;
    private collection: string; 

    constructor(db: Db){

        this.db = db;
        this.collection = "stock";
    }

    async getModelListByMark(mark: string): Promise<TModel[] | undefined> {

        try {

            const pipeline = [
                { $match: { mark: mark, model: { $ne: null} } },
                { $group: { _id: "$model" } },
            ]

            const db = await connectDB();
            const result = await db.collection(this.collection).aggregate(pipeline).toArray();

            return result as TModel[];
            
        } catch (error) {
            
            console.log(error);
            throw error;
        }
        
    }
}

export { Model };