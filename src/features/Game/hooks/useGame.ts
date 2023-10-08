import { useOutletContext } from "react-router-dom";
import { GameContext } from "../../../pages/game/GameLayout";

export const useGame = () => useOutletContext<GameContext>();
