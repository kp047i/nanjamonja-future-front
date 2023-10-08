import { Player } from "../type";

export type PlayerScoreProps = {
  player: Player;
};
export const PlayerScore: React.FC<PlayerScoreProps> = ({ player }) => {
  return (
    <div>
      <p>{player.name}</p>
      <p>{player.score}</p>
    </div>
  );
};
