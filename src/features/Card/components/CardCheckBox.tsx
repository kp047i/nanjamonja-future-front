import styled, { css } from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Card } from "../type";

export type CardCheckBoxProps = {
  card: Card;
  checked: boolean;
  handleChange: () => void;
};

export const CardCheckBox: React.FC<CardCheckBoxProps> = ({
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
        <StyledCheckIcon checked={checked} />
        <StyledImg
          src="https://res.cloudinary.com/techfeed/image/upload/w_96,h_96,c_fill/v1585110459/users/wqrb2bwadnhi0df00qmm.png"
          width={160}
          height={240}
          checked={checked}
        />
      </ImgWrapper>
      <p>kappy</p>
    </StyledCardCheckBox>
  );
};

const StyledCardCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
`;

const ImgWrapper = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  width: 160px;
  height: 240px;
`;

const StyledImg = styled.img<{ checked: boolean }>`
  position: absolute;
  left: 0;
  ${({ checked }) =>
    checked &&
    css`
      opacity: 0.6;
    `}
`;

const StyledCheckbox = styled.input`
  /* position: absolute;
  left: 0; */
  width: 0;
  height: 0;
`;

const StyledCheckIcon = styled(AiOutlineCheckCircle)<{ checked: boolean }>`
  width: 80px;
  height: 80px;
  color: green;
`;
