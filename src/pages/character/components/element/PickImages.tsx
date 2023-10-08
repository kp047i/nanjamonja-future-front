import styled from "styled-components";

const IMAGES_PATHS = ['00.png', '01.png', '02.png', '03.png', '04.png', '05.png', '06.png', '07.png', '08.png', '09.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png']

interface Props { 
  selectImage: (image: HTMLImageElement) => void;
}

const loadImage = async (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Image not found'));
    
    image.src = src;
  })
}

const PartsImage = styled.img`
  height: 10vw;
`

const ImageWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4vw;
  padding: 3vw;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  overflow-y: scroll;
  background-color: #eee;
`

export const PickImages = ({ selectImage }: Props) => {
  const select = async (src: string) => {
    const image = await loadImage(src);
    selectImage(image)
  };

  return (
    <ImageWrapper>
      {IMAGES_PATHS.map((path) => (
        <button onClick={() => select(`/assets/parts/${path}`)}>
          <PartsImage src={`/assets/parts/${path}`} alt="" />
        </button>
      ))}
    </ImageWrapper>
  )
}