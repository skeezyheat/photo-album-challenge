import React, { FC, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { Button } from './Button'
import { useStore } from 'store'

const Backdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.2s ease-in-out;
  z-index: 10;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const ModalContainer = styled.div`
  position: relative;
  z-index: 20;
  background-color: #fff;
  height: 90vh;
  width: 90vw;
  max-height: 700px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  padding: 1rem;
`

const CloseButton = styled(Button)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  height: 2rem;
  width: 2rem;
`

const Image = styled.img`
  width: 80%;
  max-width: 400px;
  height: auto;
`

const Title = styled.h2`
  font-size: 1.125rem;
  margin: 1rem 0;
  text-align: center;
`
const MovePhotoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Subtitle = styled.h3`
  font-size: 0.875rem;
  margin: 0.5rem 0;
  text-align: center;
  color: #000;
`
export const Modal: FC = () => {
  const modal = useStore((state) => state.modal)
  const setModal = useStore((state) => state.setModal)
  const removePhotoFromAlbum = useStore((state) => state.removePhoto)
  const movePhoto = useStore((state) => state.movePhoto)
  const innerRef = useRef<HTMLDivElement | null>(null)

  const handleClose = () => {
    setModal(null)
  }

  const handleRemovePhoto = (id: number) => {
    removePhotoFromAlbum(id)
    handleClose()
  }

  const handleMovePhoto = (id: number, albumId: number) => {
    const newId = window.prompt('Enter the album number to move the photo to')
    if (newId) {
      // Change the string to a number
      const newAlbumId = parseInt(newId, 10)
      // If it's a valid number && it's not the same album, move the photo
      if (
        !Number.isNaN(newAlbumId) &&
        newAlbumId !== albumId &&
        newAlbumId > 0
      ) {
        movePhoto(id, newAlbumId)
        handleClose()
      }
      // If it's not a valid number, alert the user
      else {
        return window.alert('Please enter a valid album number.')
      }
    }
  }

  // Escape key closes modal
  useEffect(() => {
    const keydownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }
    window.addEventListener('keydown', keydownHandler)
    return () => {
      window.removeEventListener('keydown', keydownHandler)
    }
  }, [])

  // Add click outside event handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        innerRef.current &&
        !innerRef.current.contains(event.target as Node)
      ) {
        handleClose()
      }
    }

    if (innerRef.current) {
      document.addEventListener('click', handleClickOutside, true)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [innerRef])

  return (
    <Backdrop>
      <ModalContainer ref={innerRef}>
        <CloseButton onClick={handleClose}>X</CloseButton>
        <Image src={modal?.photo.url} />
        <Title>{modal?.photo.title}</Title>
        <Subtitle>
          Photo {modal?.photo.id} from Album #{modal?.photo.albumId}
        </Subtitle>
        <MovePhotoRow>
          <Button
            onClick={() =>
              handleMovePhoto(
                modal?.photo.id as number,
                modal?.photo.albumId as number
              )
            }
          >
            Move Photo
          </Button>
        </MovePhotoRow>

        <Button
          onClick={() => handleRemovePhoto(modal?.photo.id as number)}
          variant='danger'
        >
          Remove From Album
        </Button>
      </ModalContainer>
    </Backdrop>
  )
}
