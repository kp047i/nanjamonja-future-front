interface Props {
  next?: () => void;
}

export const OekakiScene = ({next}: Props) => { 

  return (
    <div>
      <p>お絵描きページだよ！</p>
      <button onClick={next}>完成</button>
    </div>
  )
}
