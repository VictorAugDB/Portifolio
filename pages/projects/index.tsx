import path from "path"
import fsPromises from "fs/promises"
import { NextPage } from "next"
import { Project } from ".."
import Image from "next/image"
import { Container } from "../../styles/projects"
import Link from "next/link"
import { Project as ProjectComponent } from "../../components/Project"

interface ProjectProps {
  projects: Project[]
}

const Projects: NextPage<ProjectProps> = ({ projects }) => {
  return (
    <Container>
      {projects.map(project => (
        <ProjectComponent image={project.image} title={project.title} id={project.id} key={project.id}/>
      ))}
    </Container>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json')
  const data = await fsPromises.readFile(filePath)
  const { projects } = JSON.parse(data.toString())

  return {
    props: {
      projects
    }
  }
}

export default Projects