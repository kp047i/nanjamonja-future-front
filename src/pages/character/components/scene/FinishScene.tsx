import { useEffect, useState } from "react";

interface Props {
  finish: () => void;
}

export const FinishScene = ({ finish }: Props) => {
  const [isFirstRender, setIsFirstRender] = useState(false)

  useEffect(() => {
    setIsFirstRender(true);
  }, []);

  useEffect(() => {
    if (!isFirstRender) return;
    finish()
  }, [finish, isFirstRender]);

  return (
    <div>
      <p>作成完了だよ！</p>
    </div>
  )
}