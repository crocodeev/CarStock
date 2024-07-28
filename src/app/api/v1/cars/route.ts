import { NextRequest } from "next/server";
import { getCarsPaginated } from "@/controllers/cars";
import { handleError } from "@/utils/handleError";


export async function GET(req: NextRequest) {

    const searchParams = req.nextUrl.searchParams;

    const mark = searchParams.get("mark");
    const limit = searchParams.get("limit");
    const skip = searchParams.get("skip");
    /**
     * @todo remove crutch
     */
    const model = searchParams.get("model") || "undefined";

   
    try {

        if(mark && limit && skip) {
            
            const result = await getCarsPaginated(mark, limit, skip, model);
            return result;

        }else{
            throw new Error("Should provide args!");
        }
        
    } catch (error) {
        
        return handleError(error);
    }

}