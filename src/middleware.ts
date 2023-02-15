import { NextResponse } from "next/server";

const EXLUCEDED_URL_REGEX = /(_next|favicon)/;

export function middleware(request: Request) {
  if (EXLUCEDED_URL_REGEX.test(request.url)) {
    return NextResponse.next();
  }

  const { origin } = new URL(request.url);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("my-origin", origin);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
