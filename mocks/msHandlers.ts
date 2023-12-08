import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

// 2. Describe network behavior with request handlers.
// const worker = setupWorker(

export const Handlers = [
  http.post("/api/users/signin", ({ request, params, cookies }) => {
    return HttpResponse.json(
      {
        message: "Mocked response",
      },
      {
        status: 200,
        statusText: "Mocked status",
      }
    );
  }),
];
// 3. Start request interception by starting the Service Worker.
// worker.start();
