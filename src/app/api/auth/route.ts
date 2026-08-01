import { SignJWT } from "jose";
import { NextResponse } from "next/server";

// Hardcoded credentials
const VALID_USERNAME = "HeroMaster";
const VALID_PASSWORD = "Boster2026#!?";

function getJwtSecret(): Uint8Array {
  const secret =
    process.env.JWT_SECRET ||
    "hErOhUb_S3cR3t_K3y_2026_xQ9mPvL7nRtW_default_secret_key_hero";
  return new TextEncoder().encode(secret);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Validate credentials
    if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
      return NextResponse.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      );
    }

    // Generate JWT with jose
    const token = await new SignJWT({ username, role: "admin" })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d")
      .sign(getJwtSecret());

    // Build response with HttpOnly cookie
    const response = NextResponse.json({ success: true });

    const isHttps = request.url.startsWith("https://");

    response.cookies.set("hero_token", token, {
      httpOnly: true,
      secure: isHttps,
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day in seconds
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
