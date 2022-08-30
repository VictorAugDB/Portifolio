import fsPromises from 'fs/promises'
import path from 'path'
import type { NextPage } from 'next'
import { sanitizeServerSideData } from '../helpers/sanitizeServerSideData'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/Button'
import { Divider } from '../components/Divider'
import { Experience } from '../components/Experience'
import { Project } from '../components/Project'
import { Tecnology } from '../components/Tecnology'
import { createDate } from '../helpers/createDate'
import {
  Container,
  Header,
  Title,
  Main,
  Presentation,
  PresentationTitle,
  Description,
  Projects,
  Contact,
  Tecnologies,
  TecnologiesContainer,
  Experiences,
  ExperiencesContainer
} from '../styles/index'

type Experience = {
  companyName: string
  role: string
  startDate: string
  endDate: string
  description: string
}

export type Project = {
  id: string
  image: string
  title: string
}

type Tecnology = {
  image: {
    src: string
    alt: string
  }
  text: string
}

interface HomeProps {
  experiences: Experience[]
  projects: Project[]
  tecnologies: Tecnology[]
}

const Home: NextPage<HomeProps> = ({experiences, projects, tecnologies}) => {
  return (
    <Container>
      <Header>
        <Link href='#description'>
          <a>Sobre</a>
        </Link>
        <Link href='#projects'>
          <a>Projetos</a>
        </Link>
        <Link href='#experiences'>
          <a>Experiências</a>
        </Link>
        <Link href='#tecnologies'>
          <a>Tecnologias</a>
        </Link>
        <Link href='#contact'>
          <a>Contato</a>
        </Link>
      </Header>
      <Main>
        <Presentation>
          <Image
            className="my-photo"
            src="/foto.jpg"
            alt="Foto de Perfil"
            width={485}
            height={485}
          />
          <PresentationTitle>
            <Title>
              Olá, Desenvolvedor fullstack.
              <p>Victor Augusto</p>
            </Title>
            <div className="presentation-group-first-buttons">
              <Button hire text="Me Contrate" blank redirectPath='https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=vdbernardes@gmail.com&su=Proposta de emprego' />
              <Button text="Projetos" redirectPath='#projects' />
            </div>
            <Button className="linkedin-button" blank redirectPath='https://www.linkedin.com/in/victor-augusto-949397192/' image={{ src: '/linkedin-icon.png', alt: 'Icone do Linkedin' }} text="Veja meu linkedin" />
          </PresentationTitle>
        </Presentation>
        <Divider />
        <Description id="description">
          <h2>Descrição Hard Skills</h2>
          <h3>
            <p>Graduado em Análise e Desenvolvimento de Sistemas pela FATEC Sorocaba;</p>
            <p>1 Ano de experiência desenvolvendo soluções no mercado de trabalho;</p>
            <p>
              Desenvolver soluções do zero desde o planejamento até implementação e o deploy com fluxos automatizados de CI/CD;
            </p>
            <p>Conhecimento em microserviços, estratégias para escalabilidade, filas, pub/sub;</p>
            <p>Boas práticas de desenvolvimento, Clean Code e Refactoring;</p>
            <p>Noções de design e Arquitetura. DDD, System Design, Clean Architecture, Hexagonal Architecture, etc.</p>
          </h3>
          <h2>Descrição Soft Skills</h2>
          <h3>
            <p>Resolução de Problemas;</p>
            <p>Comunicação;</p>
            <p>Gestão de Tempo;</p>
            <p>Foco;</p>
            <p>Organização;</p>
            <p>Proatividade;</p>
            <p>Resiliência;</p>
            <p>Liderança;</p>
            <p>Ética;</p>
            <p>Inteligência Emocional;</p>
            <p>Colaboração;</p>
            <p>Pensamento Crítico;</p>
            <p>Raciocínio Lógico.</p>
          </h3>
        </Description>
        <Divider />
        <Projects id="projects">
          <h1>Projetos</h1>
          <div className='projects-container'>
            {projects.slice(0, 3).map(project => (
              <Project key={project.id} image={project.image} title={project.title} id={project.id}></Project>
            ))}
          </div>
          <div className="see-more">
            <Link href="/projects"><a>Veja mais</a></Link>
            <Button image={{ src: '/github.png', alt: 'Icone do Github' }} blank redirectPath="https://github.com/VictorAugDB" text="Github" />
          </div>
        </Projects>
        <Divider />
        <TecnologiesContainer id="tecnologies">
          <h1>Tecnologias</h1>
          <Tecnologies>
            {tecnologies.map(el => {
              if (el.image?.src) {
                return (
                  <Tecnology key={el.text} image={{ src: el.image.src, alt: el.image.alt }} text={el.text} />
                )
              }

              return <Tecnology key={el.text} text={el.text} />
            })}
          </Tecnologies>
        </TecnologiesContainer>
        <Divider />
        <ExperiencesContainer id="experiences">
          <h1>Experiências</h1>
          <Experiences>
            {experiences.sort((a, b) => new Date(b.endDate).getDate() - new Date(a.endDate).getDate()).map(el => (
              <Experience 
                key={el.companyName} 
                companyName={el.companyName}
                date={[el.startDate, el.endDate]}
                description={el.description}
                role={el.role} />
            ))}
          </Experiences>
        </ExperiencesContainer>

      </Main>
      <Contact id="contact">
        <div>
          <h3>E-mail</h3>
          <Link href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=vdbernardes@gmail.com"><a target="_blank">vdbernardes@gmail.com</a></Link>
        </div>
        <div>
          <h3>Redes Sociais</h3>
          <Link href="https://www.linkedin.com/in/victor-augusto-949397192/"><a target="_blank">Linkedin</a></Link>
        </div>
      </Contact>
    </Container>
  )
}

export default Home

export async function getStaticProps(context: undefined) {
  const filePath = path.join(process.cwd(), 'data.json')
  const data = await fsPromises.readFile(filePath)
  const {projects, experiences, tecnologies} = JSON.parse(data.toString())

  const sanitizedExperiences = experiences.map((experience: any) => ({
    ...experience,
    startDate: createDate(experience.startDate[0], experience.startDate[1], experience.startDate[2]),
    endDate: createDate(experience.endDate[0], experience.endDate[1], experience.endDate[2]),
    description: sanitizeServerSideData(experience.description.join(' '))
  }))

  return {
    props: {
      experiences: JSON.parse(JSON.stringify(sanitizedExperiences)),
      projects,
      tecnologies
    }
  }
}
