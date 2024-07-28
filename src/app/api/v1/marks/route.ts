import { getAllMarks } from "@/controllers/marks";

export async function GET() {
    
    return await getAllMarks();

}