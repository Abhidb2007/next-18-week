// app/api/signin/route.ts
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, password } = body;

  // TODO: check username & password in DB here

  const userId = 1;

  const token = jwt.sign(
    { userId },
    "SECRET" // use env variable in real apps
  );

  return NextResponse.json({ token });
}
