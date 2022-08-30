import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;

  img {
    border-radius: 16px;
  }

  > div {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      h2, p {
        text-align: center;
      }
    }

    a {
        margin-top: 8px;
        font-size: 24px;
      }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    
    > div {
      margin-top: 0;
      align-items: start;
      margin-left: 16px;

      h1 {
        text-align: left:
      }

      div {
        align-items: start;

        h2, p {
          text-align: left;
        }
      }

      a {
        font-size: 24px;
        margin-bottom: 8px;
      }
    }
  }
`