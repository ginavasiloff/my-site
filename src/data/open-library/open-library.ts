const openLibraryApiUrl = process.env.OPEN_LIBRARY_API_URL

const defaultOptions: RequestInit = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
}
type MediaItem = {}

const getOpenLibrary = async (req: string | URL | Request) => {
  const data = await fetch(req, defaultOptions)
  const result = await data.json()
  return result
}

export const getByISBN = async (isbn: string): Promise<MediaItem> => {
  const url = `${openLibraryApiUrl}/isbn/${isbn}`
  const res = await getOpenLibrary(url)
  return res
}
