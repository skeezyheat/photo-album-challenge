import { FC, useState, useEffect } from 'react'
import shallow from 'zustand/shallow'
import styled from 'styled-components'

import { UI } from 'layout'
import { Loader } from 'components'
import { getAlbums, getPhotosForAlbum } from 'api'
import { useStore } from 'store'

const Wrapper = styled.div`
  position: relative;
  max-height: 100vh;
  height: 100%;
  width: 100%;
`

export const App: FC = () => {
  const [
    loading,
    setLoading,
    albums,
    setAlbums,
    selectedAlbum,
    setSelectedAlbum,
    setPhotos,
  ] = useStore(
    (state) => [
      state.loading,
      state.setLoading,
      state.albums,
      state.setAlbums,
      state.selectedAlbum,
      state.setSelectedAlbum,
      state.setPhotos,
    ],
    shallow
  )

  const fetchAlbums = async () => {
    try {
      const fetchedAlbums = await getAlbums()
      setSelectedAlbum(fetchedAlbums[0].id)
      const albums = fetchedAlbums.map((album) => ({
        ...album,
        photos: [],
      }))
      setAlbums(albums)
    } catch (error) {
      console.log(error)
      console.log('Failed to fetch initial data')
    } finally {
      setLoading(false)
    }
  }

  const fetchPhotos = async () => {
    setLoading(true)
    try {
      const photos = await getPhotosForAlbum(selectedAlbum)
      const newAlbums = albums.map((album) => {
        if (album.id === selectedAlbum) {
          return {
            ...album,
            photos,
          }
        }
        return album
      })
      setAlbums(newAlbums)
      setPhotos(photos)
    } catch (error) {
      console.log(error)
      console.log('Failed to fetch photo set')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAlbums()
  }, [])

  useEffect(() => {
    if (albums.length > 0) {
      if (
        albums[selectedAlbum - 1].photos &&
        albums[selectedAlbum - 1].photos.length === 0
      ) {
        fetchPhotos()
      } else {
        setPhotos(albums[selectedAlbum - 1].photos)
      }
    }
  }, [selectedAlbum, albums])

  return (
    <>
      <Wrapper>
        {loading && <Loader />}
        <UI />
      </Wrapper>
    </>
  )
}
