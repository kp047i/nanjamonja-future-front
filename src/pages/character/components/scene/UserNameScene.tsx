interface Props {
  next: () => void;
}

export const UserNameScene = ({next}: Props) => {

  return (
    <div>
      <p>名前を入力してね！</p>
      <input type="text" />
      <button onClick={next}>決定</button>
    </div>
  )
}
