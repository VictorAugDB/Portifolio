import { darken } from 'polished'
import styled from 'styled-components'

interface ButtonProps {
  hire?: boolean
}

export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.hire ? '#7996FC' : '#414141'};
  color: ${props => props.hire ? props.theme.colors.text : '#C9C9C9'};
  max-width: 251px;
  width: 100%;
  height: 56px;
  border-radius: 10px;
  transition: background-color .175s ease-in-out, color .175s ease-in-out, font-weight .175s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  font-size: 14px;
  font-weight: 600;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${darken('0.05', '#7996FC')};
    color: ${props => props.theme.colors.text};
    font-weight: bold;
  }
`