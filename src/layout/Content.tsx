import React, { FC } from 'react'
import styled from 'styled-components'
import { useStore } from 'store'
import { Photo } from 'types'

const Wrapper = styled.main`
  max-height: 100vh;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: #fff;
`
const AlbumTitle = styled.h1`
  text-align: center;
  font-size: 1.5rem;
`

const GridContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 1em 1em;
  grid-template-areas: '. . .';
  width: 75%;
  margin: 0 auto;
`

const GridItem = styled.div`
  margin: 0 auto;
  transition: transform 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.125);
  }
`

export const Content: FC = () => {
  const photos = useStore((state) => state.photos)
  const selectedAlbum = useStore((state) => state.selectedAlbum)
  const setModal = useStore((state) => state.setModal)
  const handleModal = (photo: Photo) => {
    setModal({ photo })
  }

  return (
    <Wrapper>
      <AlbumTitle>Album #{selectedAlbum} </AlbumTitle>
      <GridContainer>
        {photos.map((photo) => (
          <GridItem
            key={photo.id}
            role='button'
            onClick={() => handleModal(photo)}
          >
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </GridItem>
        ))}
      </GridContainer>
    </Wrapper>
  )
}
