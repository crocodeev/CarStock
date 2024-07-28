import { NextResponse } from "next/server";
import { TJsonBodyResponce } from "@/shared/types";
import { connectDB } from "@/config/db";
import { Model } from "@/models/model";
import { TModel } from "@/shared/types";
import { handleError } from "@/utils/handleError";

type TBody = TJsonBodyResponce<TModel[]>;
type TModelResponce = NextResponse<TBody>;

async function getModelsByMark(mark: string): Promise<TModelResponce> {

    try {

        const db = await connectDB();
        const result = await new Model(db).getModelListByMark(mark);

        if (result) {

            const formatted = result.map(item => item._id);

            return NextResponse.json({
                data: formatted
            })

        }else{
            throw new Error("Cann't read data from db!");
        }
        
    } catch (error) {

        return handleError(error);
    }
}

export { getModelsByMark } 