import styled from "styled-components";

import { UserNameScene } from "./components/scene/UserNameScene";
import { OekakiScene } from "./components/scene/OekakiScene";
import { FinishScene } from "./components/scene/FinishScene";
import { useState } from "react";
import { SendingScene } from "./components/scene/SendingScene";

type Scene = number;

const CharacterLayout = styled.div`
  width: 100%;
  height: 100svh;
`;

const POST_CARD_URL = 'https://h3nckvn8-8000.asse.devtunnels.ms/api/user/insert/';

export const Character = () => {
  const [scene, setScene] = useState<Scene>(0);
  const [userName, setUserName] = useState<string>('');

  const sendCharacter = async (datauri: string) => {
    setScene((prev) => prev + 1);

    const res = await fetch(POST_CARD_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: userName,
        content: datauri
      }),
    }).then((res) => res.json());

    setScene((prev) => prev + 1);

    return res;
  };

  return (
    <CharacterLayout>
      {scene === 0 && <UserNameScene next={() => setScene((prev) => prev + 1)} setUserName={setUserName} isSubmittable={userName.length > 0} />}
      {scene === 1 && <OekakiScene next={sendCharacter} />}
      {scene === 2 && <SendingScene /> }
      {scene === 3 && <FinishScene />}
    </CharacterLayout>
  )
};
