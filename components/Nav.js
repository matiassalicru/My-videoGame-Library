import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loading, NotLoading, searchGame } from "../store/actions/searchAction";

export const Nav = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  //PREVIEW DE BUSQUEDA TODO!!!!!1111111111111

  // useEffect(() => {
  // dispatch(searchGame(search));
  // }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchGame(search));
    router.replace("/search");
  };

  return (
    <nav className="nav_main">
      <form onSubmit={handleSubmit}>
        <label>
          <FontAwesomeIcon icon={faSearch} />
          <input
            required
            type="text"
            placeholder="Search..."
            onChange={handleInputChange}
          />
        </label>
      </form>
    </nav>
  );
};
