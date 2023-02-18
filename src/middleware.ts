import { NextResponse } from "next/server";

const EXLUCEDED_URL_REGEX = /(_next|favicon)/;

export function middleware(request: Request) {
  if (EXLUCEDED_URL_REGEX.test(request.url)) {
    return NextResponse.next();
  }

  const { origin, pathname } = new URL(request.url);

  if (origin && pathname !== "/son-depremler" && !pathname.includes("api/")) {
    return NextResponse.redirect(`${origin}/son-depremler`);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("my-origin", origin);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
