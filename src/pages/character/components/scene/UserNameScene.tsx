interface Props {
  next: () => void;
  setUserName: (name: string) => void;
}

export const UserNameScene = ({next, setUserName}: Props) => {

  return (
    <div>
      <p>名前を入力してね！</p>
      <input onChange={e => setUserName(e.target.value)} type="text" />
      <button onClick={next}>決定</button>
    </div>
  )
}
