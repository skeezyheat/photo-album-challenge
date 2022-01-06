import create from 'zustand'
import { Album, Photo, Modal } from 'types'
import { getPhotosForAlbum } from 'api'

interface State {
  loading: boolean,
  setLoading: (loading: boolean) => void,

  albums: Album[]
  setAlbums: (albums: Album[]) => void

  selectedAlbum: number,
  setSelectedAlbum: (selectedAlbum: number) => void

  photos: Photo[]
  setPhotos: (photos: Photo[]) => void

  modal: Modal | null,
  setModal: (modal: Modal | null) => void

  removePhoto: (id: number) => void

  movePhoto: (id: number, newAlbumId: number) => void
}

export const useStore = create<State>(set => ({
  loading: true,
  setLoading: loading => set({ loading }),

  albums: [],
  setAlbums: (albums: Album[]) => set({ albums }),

  selectedAlbum: 0,
  setSelectedAlbum: (selectedAlbum: number) => set({ selectedAlbum }),
  
  photos: [],
  setPhotos: (photos: Photo[]) => set({ photos }),

  modal: null,
  setModal: (modal: Modal | null) => set({ modal }),

  removePhoto: (id: number) => {
    set(state => {
      // Remove photo from photos
      const photos = state.photos.filter(photo => photo.id !== id)
      // Update photos in selected album
      const albums = state.albums.map(album => {
        if (album.id === state.selectedAlbum) {
          album.photos = photos
        }
        return album
      })
      console.log(`Photo with id ${id} removed form album ${state.selectedAlbum}`)
      console.log('New state', {
        photos: photos,
        album: albums[state.selectedAlbum - 1]
      })
      return { photos, albums }
    })
  },

  movePhoto: (id: number, newAlbumId: number) => {
    set((state) => {
      // Find the photo object in the current album
      const photo = state.photos.find(photo => photo.id === id)

      // Remove the photo from the current photo set
      const photos = state.photos.filter(photo => photo.id !== id)

      const albums = state.albums.map(album => {
        // Update the current album with the new photo set
        if (album.id === state.selectedAlbum) {
          album.photos = photos
        }
        // Add the new photo to the new album
        if (album.id === newAlbumId) {
          // If the album to move to doesn't have photos then grab them from the API first
          if (album.photos.length === 0) {
            getPhotosForAlbum(newAlbumId).then(photos => {
              if (photo){ 
                state.albums[newAlbumId - 1].photos = [...photos, photo]
              }
            })
          } else {
            if (photo) {
              album.photos.push(photo)

            }
          }
        }
        return album
      })
      console.log(`Photo with id ${id} moved from ${state.selectedAlbum} to album ${newAlbumId}`)
      console.log(`Check the photo at the end of the album ${newAlbumId}`)
      console.log('New state', {
        currentAlbum: albums[state.selectedAlbum - 1],
        photos: photos,
        newAlbum: albums[newAlbumId - 1]
      })
      return { photos, albums }
    })
  }

}))