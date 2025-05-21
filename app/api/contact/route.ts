import { NextResponse } from "next/server";

interface ContactRequestBody {
    name:string;
    email:string;
    message:string;
}
export async function POST(request: Request){
    try{
        await request.json() as ContactRequestBody;
        return NextResponse.json({
            message: "Message sent successfully "
        },
        {
            status: 200
        })
    }
    catch(error){
        const errorMsg = error instanceof Error ? error.message : "Unknown Error";
        return NextResponse.json({
            message: errorMsg
        },
        {
            status: 500
        }
    )
    }
}