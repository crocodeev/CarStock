import { NextResponse } from "next/server";
import { connectDB } from "@/config/db";
import { Car } from "@/models/car";
import { handleError } from "@/utils/handleError";

async function getCarsPaginated(mark: string, limit: string, skip: string, model: string) { 

        console.log({ mark, limit, skip, model });
    
    try {

        const db = await connectDB();
        const car = new Car(db);

        let result: unknown;

        /**
         * @todo very bad, need refactor API
         */
        if(model === "undefined"){

            result = await car.paginateByMark(mark, parseInt(limit), parseInt(skip));
        }else{
            
            result = await car.paginateByMarkAndModel(mark, parseInt(limit), parseInt(skip), model);
        }

        console.log(result);
        

        if(result) {

            return NextResponse.json({
                data: result
            })
        }else{

            throw new Error("Can not read data from db!");
        }
        
        
    } catch (error) {

        return handleError(error);
    }
}

export { getCarsPaginated } 