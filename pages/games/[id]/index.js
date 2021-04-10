import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGame } from "../../../store/actions/gameAction";

export default function index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGame(4200));
  }, []);

  return (
    <div>
      <h1>Juegosssss</h1>
    </div>
  );
}
