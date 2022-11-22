import { Link } from "remix/react";

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </main>
  );
}
