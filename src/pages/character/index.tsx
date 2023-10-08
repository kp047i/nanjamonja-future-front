import "./style.css"
import styled from "styled-components";

import { UserNameScene } from "./components/scene/UserNameScene";
import { OekakiScene } from "./components/scene/OekakiScene";
import { FinishScene } from "./components/scene/FinishScene";
import { useState } from "react";

type Scene = 'username' | 'oekaki' | 'finish';

export const Character = () => {
  const [scene, setScene] = useState<Scene>('username')
  return (
    <CharacterLayout>
      {scene === 'username' && <UserNameScene next={() => setScene('oekaki')} />}
      {scene === 'oekaki' && <OekakiScene next={() => setScene('finish')} />}
      {scene === 'finish' && <FinishScene />}
    </CharacterLayout>
  );
};

const CharacterLayout = styled.div`
  width: 100%;
  height: 100svh;
`;
