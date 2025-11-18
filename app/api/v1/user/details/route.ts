import {NextResponse} from "next/server";
export function GET(){
    return NextResponse.json({
        user:"abhi",
        email:"abhi@123"
    })
}    
export function POST(){
    return NextResponse.json({
        user:"abhi",
        email:"abhi@123"
    })

}
export function DELETE(){
    return NextResponse.json({
        user:"abhi",
        email:"abhi@123"
    })  
}
export function PUT(){
    return NextResponse.json({      
        user:"abhi",
        email:"abhi@123"
    })  
}   
    