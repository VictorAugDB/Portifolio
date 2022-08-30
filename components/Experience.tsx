import { Container } from "../styles/components/experience"
import dayjs from 'dayjs'
import { calculatePeriodInMonths } from "../helpers/calculatePeriodInMonths"

interface TecnologyProps {
  companyName: string
  description: string
  date: string[]
  role: string
}

export const Experience: React.FunctionComponent<TecnologyProps> = ({ companyName, description, date, role }) => {
  return (
    <Container>
      <div>
        <h2>{companyName}</h2>
        <h3>{dayjs(date[0]).format('DD/MM/YYYY')} - {dayjs(date[1]).format('DD/MM/YYYY')} | {calculatePeriodInMonths(date[0], date[1])} Meses</h3>
        <h3>{role}</h3>
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Container>
  )
}