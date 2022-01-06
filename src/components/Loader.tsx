import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoaderEl = styled.div`
  &,
  &:before,
  &:after {
    border-radius: 50%;
    background-color: #e05d5b;
    animation: grow 4s ease-in-out infinite;
    animation-fill-mode: both;
    width: 2rem;
    height: 2rem;
  }

  & {
    color: #fff;
    text-indent: -9999rem;
    position: relative;
    animation-delay: -0.25s;
    transform: translateZ(0);
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }

  &:before {
    left: -2.5rem;
    animation-delay: -0.75s;
  }

  &:after {
    right: -2.5rem;
  }
  @keyframes grow {
    0%,
    50%,
    100% {
      transform: scale(1);
    }
    25%,
    75% {
      transform: scale(1.2);
    }
  }
`
export const Loader: FC = () => {
  return (
    <Wrapper>
      <LoaderEl>Loading</LoaderEl>
    </Wrapper>
  )
}
