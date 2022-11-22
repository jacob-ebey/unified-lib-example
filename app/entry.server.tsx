import { renderToString } from "react-dom/server";
import { type EntryContext } from "remix";
import { RemixServer } from "remix/react";

export default function handleDocumentRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const html = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  const headers = new Headers(responseHeaders);
  headers.set("Content-Type", "text/html");

  return new Response(`<!DOCTYPE html>${html}`, {
    status: responseStatusCode,
    headers,
  });
}
