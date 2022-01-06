import React, { FC } from 'react'
import styled from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger'
}

const ButtonWrapper = styled.div`
  padding: 0.5rem 0;
  width: 100%;
`

const ButtonEl = styled.button<ButtonProps>`
  width: 100%;
  height: 2rem;
  font-weight: bold;
  border: 1px solid;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.variant === 'danger' ? '#ff1744' : 'transparent'};
  color: ${(props) => (props.variant === 'danger' ? '#fff' : '#333')};
  border-color: ${(props) =>
    props.variant === 'danger' ? '#b2102f' : 'transparent'};
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.variant === 'danger' ? '#b2102f' : '#e1e1e1'};
    border-color: ${(props) =>
      props.variant === 'danger' ? '#b2102f' : '#888'};
  }
`

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  children,
  ...props
}) => {
  return (
    <ButtonWrapper>
      <ButtonEl variant={variant} {...props}>
        {children}
      </ButtonEl>
    </ButtonWrapper>
  )
}
