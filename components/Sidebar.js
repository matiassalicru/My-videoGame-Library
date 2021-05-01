import {
  faAddressCard,
  faGamepad,
  faPlay,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export const Sidebar = () => {
  const [isSidebarExtended, setIsSidebarExtended] = useState(false);

  const extendSidebar = () => {
    setTimeout(() => {
      setIsSidebarExtended(true);
    }, 100);
  };

  const shrinkSidebar = () => {
    setTimeout(() => {
      setIsSidebarExtended(false);
    }, 100);
  };

  return (
    <div
      className="sidebar__main"
      onMouseOver={extendSidebar}
      onMouseLeave={shrinkSidebar}
    >
      {!isSidebarExtended ? (
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <FontAwesomeIcon icon={faGamepad} />
          </li>
          <li className="sidebar__list-item">
            <FontAwesomeIcon icon={faPlay} />
          </li>
          <li className="sidebar__list-item">
            <FontAwesomeIcon icon={faAddressCard} />
          </li>
          <li className="sidebar__list-item">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </li>
        </ul>
      ) : (
        <ul className="sidebar__text-list">
          <li className="sidebar__list-item">
            <Link href="/games/1">Games</Link>
          </li>
          <li className="sidebar__list-item">
            <Link href="/">My lists</Link>
          </li>
          <li className="sidebar__list-item">
            <Link href="/">Profile</Link>
          </li>
          <li className="sidebar__list-item">
            <Link href="/">Help</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
