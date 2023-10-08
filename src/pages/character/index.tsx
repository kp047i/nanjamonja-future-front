import "./style.css"
import styled from "styled-components";

import { UserNameScene } from "./components/scene/UserNameScene";
import { OekakiScene } from "./components/scene/OekakiScene";
import { FinishScene } from "./components/scene/FinishScene";

export const Character = () => {
  return (
    <CharacterLayout>
      <UserNameScene />
      <OekakiScene />
      <FinishScene />
    </CharacterLayout>
  );
};

const CharacterLayout = styled.div`
  width: 100%;
  height: 100svh;
`;
