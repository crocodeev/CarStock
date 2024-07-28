import { connectDB } from "@/config/db";
import { Db } from "mongodb";
import { TCarModel } from "./types";

const collection = process.env.DB_COLLECTION;

class Car {

    private db: Db;
    private collection: string; 

    constructor(db: Db){

        this.db = db;
        this.collection = "stock";
    }

    async paginateByMark(mark: string, limit: number, skip: number): Promise<TCarModel[] | undefined> {


        try {

            const pipeline = [
                { "$match": { "mark": mark }},
                { "$sort": { "_id": 1 }},
                { "$skip": skip * limit },
                { "$limit": limit}
            ]

            const db = await connectDB();
            const result = await db.collection(this.collection).aggregate(pipeline).toArray();
            
            return result as TCarModel[];
            
        } catch (error) {
            
            console.log(error);
            throw error;
            
        }
        
    }

    async paginateByMarkAndModel(mark: string, limit: number, skip: number, models: string[]): Promise<TCarModel[] | undefined> {


        try {

            const pipeline = [
                { "$match": { "mark": mark, "model": { $in: models} }},
                { "$sort": { "_id": 1 }},
                { "$skip": skip * limit },
                { "$limit": limit}
            ]

            const db = await connectDB();
            const result = await db.collection(this.collection).aggregate(pipeline).toArray();
            
            return result as TCarModel[];
            
        } catch (error) {
            
            console.log(error);
            throw error;
            
        }
        
    }
}

export { Car };