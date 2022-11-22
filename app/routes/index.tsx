import { Link } from "remix/react";

export default function Index() {
  return (
    <main>
      <h1>Index</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </main>
  );
}
