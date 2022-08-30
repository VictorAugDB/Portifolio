import Image from "next/image"
import { Container } from "../styles/components/tecnology"

interface ImageProps {
  src: string
  alt: string
}

interface TecnologyPros {
  image?: ImageProps
  text: string
}

export const Tecnology: React.FunctionComponent<TecnologyPros> = ({ image, text }) => {
  return (
    <Container hasImg={!!image}>
      {image && (
        <Image
          src={image.src}
          alt={`Imagem do projeto ${image.alt}`}
          width={32}
          height={32}
        ></Image>
      )}
      <h3>{text}</h3>
    </Container>
  )
}