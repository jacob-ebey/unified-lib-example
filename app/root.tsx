import { json } from "remix";
import { Outlet, Scripts, useLoaderData } from "remix/react";

export function loader() {
  return json({ message: "Hello world!!" });
}

export default function Root() {
  const { message } = useLoaderData<typeof loader>();

  return (
    <html>
      <head>
        <title>{message}</title>
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
