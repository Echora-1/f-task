export function useFavorite() {
  const FAVORITES_STORAGE_KEY = 'favoritesImages'

  function isFavoriteImage(id) {
    const favoritesImagesRaw = localStorage.getItem(FAVORITES_STORAGE_KEY)
    if (favoritesImagesRaw) {
      const favoritesImages = JSON.parse(favoritesImagesRaw)
      console.log('favoritesImages', favoritesImages)
      console.log('id', id)
      const isFavorite = favoritesImages.find((img) => img.id === id)
      console.log(!!isFavorite)
      return !!isFavorite
    }
    return false
  }

  function setLocalStorage(value) {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(value))
    } catch {
      console.log('localStorage переполнен')
    }
  }

  function removeFromFavorite(image) {
    const favoritesImages = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY))
    const newFavoritesImages = favoritesImages.filter((img) => img.id !== image.id)
    setLocalStorage(newFavoritesImages)
  }

  function addToFavorite(image) {
    const favoritesImages = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY))
    favoritesImages.push(image)
    setLocalStorage(favoritesImages)
  }

  function getFavoriteImage() {
    const favoritesImagesRaw = localStorage.getItem(FAVORITES_STORAGE_KEY)
    if (favoritesImagesRaw) {
      return JSON.parse(favoritesImagesRaw)
    }
    return []
  }

  function toggleFavorite(image) {
    const favoritesImagesRaw = localStorage.getItem(FAVORITES_STORAGE_KEY)
    if (favoritesImagesRaw) {
      const isFavorite = isFavoriteImage(image.id)
      if (isFavorite) {
        removeFromFavorite(image)
      } else {
        addToFavorite(image)
      }
    } else {
      setLocalStorage([image])
    }
  }

  return { toggleFavorite, isFavoriteImage, getFavoriteImage }
}
