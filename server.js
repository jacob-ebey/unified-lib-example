import { createServer } from "http";
import { createDevRequestHandler, createRequestHandler } from "remix/node";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

let server;
if (process.env.NODE_ENV == "development") {
  const cli = await import("universal-lib-template/cli");
  const config = await cli.loadConfig();

  server = createServer(
    await createDevRequestHandler(config, {
      publicDir: "public",
    })
  );
} else {
  server = createServer(
    createRequestHandler(
      // @ts-expect-error
      await import("./build/stdin.js"),
      {
        publicDir: "public",
      }
    )
  );
}

server.listen(PORT);
console.log("Server listening at http://localhost:3000 in development mode");
