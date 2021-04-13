import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="nav_main">
      <ul className="nav_ul">
        <li className="nav_li">
          <Link href="/">Games</Link>
        </li>
        <li className="nav_li">
          <Link href="/">
            Search
          </Link>
        </li>
        <li className="nav_li">
          <Link href="/">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};
