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
      <PlayerInfo>{player.name}</PlayerInfo>
      <Score>
      <ButtonWrapper>
        <Button onClick={() => handleAddScoreButton(player.id)}>
          GET!
        </Button>
      </ButtonWrapper>
      <PlayerInfoScore>{player.score}</PlayerInfoScore>
      </Score>
    </StyledPlayerScore>
  );
};

const StyledPlayerScore = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const PlayerInfo = styled.span`
  margin-left: 10px;
  font-weight: 800;
`;

const ButtonWrapper = styled.div``;

const Button = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 100vh;
  border: 4px solid #fff;
  background-color: #243779;
  padding: 10px 40px;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
`;

const PlayerInfoScore = styled.span`
  font-size: 24px;
  font-weight: 800;
`

const Score = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`
