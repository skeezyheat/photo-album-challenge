import { Album, Photo } from 'types'

export const getAlbums = async (): Promise<Album[]> => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    if (!res.ok) {
      throw new Error('Something went wrong while fetching albums')
    }
    return res.json()
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getPhotosForAlbum = async (albumId: number): Promise<Photo[]> => {
  try {
    console.log(albumId)
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    if (!res.ok) {
      throw new Error(`Something went wrong while fetching photos for album ${albumId}`)
    }
    return res.json()
  } catch (error) {
    return Promise.reject(error)
  }
}
