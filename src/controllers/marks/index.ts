import { NextResponse } from "next/server";
import { TJsonBodyResponce } from "@/shared/types";
import { connectDB } from "@/config/db";
import { Mark } from "@/models/mark";
import { TMark } from "@/fsd/enteties/mark/model/types";
import { handleError } from "@/utils/handleError";

type TBody = TJsonBodyResponce<TMark[]>;
type TMarkResponce = NextResponse<TBody>;

async function getAllMarks(): Promise<TMarkResponce> {
    
    try {

        const db = await connectDB();
        const result = await new Mark(db).getListWithCount();

        if (result) {

            const formatted = result.map(item => ({ name: item._id, amount: item.count }));

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

export { getAllMarks } 