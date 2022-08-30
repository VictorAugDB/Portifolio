import styled from 'styled-components'

interface ContainerProps {
  hasImg: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  background-color: #414141;

  h3 {
    margin-left: ${({hasImg}) => hasImg ? '8px' : '0'};
  }

  img {
    border-radius: 50%;
  }
`