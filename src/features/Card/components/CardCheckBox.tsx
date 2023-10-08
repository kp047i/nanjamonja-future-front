import styled, { css } from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Card } from "../type";
import { CARD_HEIGHT, CARD_WIDTH } from "../const";

export type CardCheckBoxProps = {
  card: Card;
  checked: boolean;
  handleChange: () => void;
};

export const CardCheckBox: React.FC<CardCheckBoxProps> = ({
  card,
  checked,
  handleChange,
}) => {
  return (
    <StyledCardCheckBox>
      <ImgWrapper>
        <StyledCheckbox
          id="cardCheck"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        {checked && <StyledCheckIcon checked={checked} />}
        <StyledImg
          src={card.imgPath}
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
          checked={checked}
        />
      </ImgWrapper>
      <p>{card.userName}</p>
    </StyledCardCheckBox>
  );
};

const StyledCardCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: 0.2s;
  }
`;

const ImgWrapper = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
`;

const StyledImg = styled.img<{ checked: boolean }>`
  position: absolute;
  left: 0;

  ${({ checked }) =>
    checked &&
    css`
      filter: brightness(50%);
    `}
`;

const StyledCheckbox = styled.input`
  width: 0;
  height: 0;
`;

const StyledCheckIcon = styled(AiOutlineCheckCircle)<{ checked: boolean }>`
  z-index: 1;
  width: 80px;
  height: 80px;
  color: #22c55e;
`;
