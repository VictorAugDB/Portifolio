import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Header = styled.header`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    
    a {
      margin-right: 60px;

      &:last-child {
        margin-right: 0px;
      }
    }
  }
`

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 40px 0 40px;

  @media (min-width: 768px) {
    padding: 0 108px 0 85px;
  }
`

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1268px) {
    flex-direction: row;
  }
  
  .my-photo {
    border-radius: 64px;
    height: 100%;
  }
`

export const PresentationTitle = styled.div`
  @media (min-width: 1268px) {
    margin-left: 90px;
  }

  .presentation-group-first-buttons {
    margin-top: 60px;
    display: flex;
    flex-direction: column;

    button {
      max-width: 522px;
    }

    button:last-child {
        margin-top: 20px;
      }

    @media (min-width: 768px) {
      flex-direction: row;

      button:first-child {
        margin-right: 20px;
      }

      button:last-child {
        margin-top: 0;
      }
    } 
  }

  .linkedin-button {
    display: flex;
    align-items: center;
    margin-top: 20px;
    max-width: 522px;

    img {
      border-radius: 16px;

    }

    p {
      margin-left: 20px;
    }
  }
`

export const Title = styled.h1`
  font-size: 44px;
  max-width: 449px;
  text-align: center;

  
  @media(min-width: 1268px) {
    font-size: 56px;
    text-align: normal;
  }
`

export const Description = styled.div`
  width: 100%;

  h2 {
    color: #C9C9C9;
    font-weight: 300;
    margin: 16px 0 16px 0;

    &:first-of-type {
      margin-top: 0;
    }
  }

  h3 {
    font-weight: 600;
    line-height: 32px;
  }
`

export const Projects = styled.div` 
  .projects-container {
    display: grid;
    margin-top: 16px;

    grid-template-areas: 
      "a"
      "b"
      "c"
    ;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    grid-gap: 0 66px;

    @media (min-width: 768px) {
      grid-template-areas: "a" "b""c";
      grid-template-columns: auto auto auto;
      grid-template-rows: auto;
    }
  }

  > div:last-child {
    margin-top: 56px;
    display: flex;

    div {
      margin-right: 66px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .see-more {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #C9C9C9;
      margin-right: 72px;
      font-size: 24px;
    }

    button {
      max-width: 206px;
      height: 48px;
    }
  }
`

export const Contact = styled.div`,
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #414141;
  padding: 32px 96px;
  margin-top: 120px;
  width: 100%;
  border-radius: 16px 16px 0 0;


  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: normal;
    justify-content: space-between;
    div {
      align-items: normal;
      
      h3 {
        font-weight: 300;
        opacity: 0.9;
        margin-bottom: 8px;
      }

      a {
        opacity: 0.9;
        line-height: 28px;
      }
    }
  }
`

export const TecnologiesContainer = styled.div`
  h1 {
    margin-bottom: 16px;
  }
`

export const Tecnologies = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
`

export const ExperiencesContainer = styled.div`
  width: 100%;

  h1 {
    margin-bottom: 16px;
  }
`

export const Experiences = styled.div`
  > div {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

