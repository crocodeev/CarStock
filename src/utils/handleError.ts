import { NextResponse } from "next/server";

function handleError(error: any) {

        //could replace any logger

        console.error(error);
        
        //send error to client
        if(error instanceof Error){
            return NextResponse.json({
                error: error.message
            }, { status: 500 })
        }else{
            return NextResponse.json({
                error: JSON.stringify(error)
            }, { status: 500 })
        }

}

export { handleError }