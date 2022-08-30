import styled from 'styled-components'

export const Container = styled.div`
  img {
    margin-bottom: 24px;
    cursor: pointer;
    border-radius: 16px;
    transition: transform .3s ease-in-out;
  }

  h2 {
    font-size: 20px;
    transition: opacity .3s ease-in-out;
    text-align: center;
  }

  @media (min-width: 768px) {
     &:hover {
      img {
        transform: scale(0.975);
      }

      h2 {
        opacity: 0.8;
      }
    }

    h2 {
      font-size: 24px;
    }
  }
`