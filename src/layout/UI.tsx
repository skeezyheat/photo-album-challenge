import React, { FC } from 'react'
import styled from 'styled-components'

import { Modal } from 'components'
import { Sidebar } from './Sidebar'
import { Content } from './Content'
import { useStore } from 'store'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1.7fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '. .';
  @media (max-width: 768px) {
    grid-template-columns: 0.5fr 1.5fr;
  }
`

export const UI: FC = () => {
  const modal = useStore((state) => state.modal)
  return (
    <Wrapper>
      <Sidebar />
      <Content />
      {modal && <Modal />}
    </Wrapper>
  )
}
