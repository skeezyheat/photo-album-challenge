import React, { FC } from 'react'
import styled from 'styled-components'

import { Button } from 'components'
import { useStore } from 'store'

const Wrapper = styled.nav`
  max-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: #f1f1f1;
  border-right: 2px solid #ccc;
  overflow: auto;
`

const Container = styled.div`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`
const Link = styled(Button)`
  @media (max-width: 768px) {
    font-size: 0.75rem;
    height: 2.25rem;
  }
`

export const Sidebar: FC = () => {
  const albums = useStore((state) => state.albums)
  const setSelectedAlbum = useStore((state) => state.setSelectedAlbum)

  return (
    <Wrapper>
      <Container>
        {albums.map((album) => (
          <Link key={album.id} onClick={() => setSelectedAlbum(album.id)}>
            Album #{album.id}
          </Link>
        ))}
      </Container>
    </Wrapper>
  )
}
