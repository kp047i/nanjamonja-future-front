import styled from "styled-components";
import { Player } from "../type";

export type PlayerScoreProps = {
  player: Player;
  handleAddScoreButton: (id: string) => void;
};
export const PlayerScore: React.FC<PlayerScoreProps> = ({
  player,
  handleAddScoreButton,
}) => {
  return (
    <StyledPlayerScore>
      <PlayerInfo>
        <span>{player.name}</span>
        <span>{player.score}</span>
      </PlayerInfo>
      <ButtonWrapper>
        <button onClick={() => handleAddScoreButton(player.id)}>点数を加える</button>
      </ButtonWrapper>
    </StyledPlayerScore>
  );
};

const StyledPlayerScore = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const PlayerInfo = styled.div`
  display: grid;
  gap: 8px;
`;

const ButtonWrapper = styled.div``;
