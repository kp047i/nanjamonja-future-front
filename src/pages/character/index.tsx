import "./style.css"
import styled from "styled-components";

import { UserNameScene } from "./components/scene/UserNameScene";
import { OekakiScene } from "./components/scene/OekakiScene";
import { FinishScene } from "./components/scene/FinishScene";
import { useState } from "react";

type Scene = 'username' | 'oekaki' | 'finish';

const CharacterLayout = styled.div`
  width: 100%;
  height: 100svh;
`;

export const Character = () => {
  const [scene, setScene] = useState<Scene>('username');
  const [userName, setUserName] = useState<string>('');

  const goOekaki = () => {
    if (userName === '') return;
    setScene('oekaki');
  }

  const goFinish = () => {
    setScene('finish');
  }

  return (
    <CharacterLayout>
      {scene === 'username' && <UserNameScene next={goOekaki} setUserName={setUserName} />}
      {scene === 'oekaki' && <OekakiScene next={goFinish} />}
      {scene === 'finish' && <FinishScene />}
    </CharacterLayout>
  );
};
