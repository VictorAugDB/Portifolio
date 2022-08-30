import Image from "next/image"
import { Button as Container } from "../styles/components/button"
import { TbArrowNarrowRight } from 'react-icons/tb'
import React from "react"
import Router from 'next/router'

interface ImageProps {
  src: string
  alt: string
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  image?: ImageProps
  hire?: boolean
  text: string
  redirectPath?: string
  blank?: boolean
}

function redirect(path?: string) {
  if(!path) {
    return
  }

  Router.push(path)
}

function redirectBlank(path?: string) {
  if(!path) {
    return
  }

  window.open(path, '_blank');
}

export const Button: React.FunctionComponent<ButtonProps> = ({hire, image, text, redirectPath, blank, ...rest}) => {
  return (
    <Container {...rest} hire={hire} onClick={() => blank ? redirectBlank(redirectPath) : redirect(redirectPath)}>
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={28}
          height={28}
        ></Image>
      )}
      {text}
      <TbArrowNarrowRight />
    </Container>
  )
}