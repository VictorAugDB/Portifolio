import path from "path"
import fsPromises from "fs/promises"
import { NextPage } from "next"
import { Project as ProjectType } from ".."
import Image from "next/image"
import { Container } from "../../styles/projects/project"
import { sanitizeServerSideData } from "../../helpers/sanitizeServerSideData"
import Link from "next/link"

type DetailedProject = ProjectType & {
  description: string
  repositoryLink: string
}

interface ProjectProps {
  project: DetailedProject
}

const Project: NextPage<ProjectProps> = ({ project }) => {
  return (
    <Container>
      <Image
        src={project.image}
        alt="Imagem do Projeto"
        width={480}
        height={480}
      />
      <div>
        <h1>{project.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: project.description }} />
        <Link href={project.repositoryLink}>
          <a target="_blank">Link do projeto</a>
        </Link>
      </div>
    </Container>
  )
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data.json')
  const data = await fsPromises.readFile(filePath)
  const { projects } = JSON.parse(data.toString())
  const ids = projects.map((project: any) => ({
    params: {
      id: project.id
    }
  }))

  return {
    paths: ids,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const filePath = path.join(process.cwd(), 'data.json')
  const data = await fsPromises.readFile(filePath)
  const { projects } = JSON.parse(data.toString())
  const project = projects[params.id - 1]

  const sanitizedProject = {
    ...project,
    description: sanitizeServerSideData(project.description.join(' '))
  }


  return {
    props: {
      project: sanitizedProject
    }
  }
}

export default Project