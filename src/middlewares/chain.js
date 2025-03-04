// src/middlewares/chainMiddleware.js
import { NextResponse } from "next/server";

export function chainMiddlewares(middlewares) {
  return async (request, event) => {
    let response;

    for (const middleware of middlewares) {
      response = await middleware(request, event);
      if (response) {
        return response; // Return if middleware handles the request
      }
    }

    // If no middleware handles the request, proceed as normal
    return NextResponse.next();
  };
}
