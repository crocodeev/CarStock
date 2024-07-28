import { NextRequest } from "next/server";
import { handleError } from "@/utils/handleError";
import { getModelsByMark } from "@/controllers/models";


export async function GET(req: NextRequest) {

    const searchParams = req.nextUrl.searchParams;

    const mark = searchParams.get("mark");
    
    
    try {

        if(mark) {
            
            const result = await getModelsByMark(mark);

            return result;

        }else{
            throw new Error("Should provide args!");
        }
        
    } catch (error) {
        
        return handleError(error);
    }

}