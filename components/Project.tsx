import Image from "next/image"
import { useRouter } from "next/router"
import { Container } from "../styles/components/project"

interface ProjectProps {
  image: string
  title: string
  id: string
}

export const Project: React.FunctionComponent<ProjectProps> = ({image, title, id}) => {
  const router = useRouter()
  const goToProject = (id: string) => {
    router.push(`/projects/${id}`)
  }

  return (
    <Container onClick={() => goToProject(id)}>
      <Image
        src={image}
        alt={`Imagem do projeto ${image}`}
        width={320}
        height={232}
      ></Image>
      <h2>{title}</h2>
    </Container>
  )
}