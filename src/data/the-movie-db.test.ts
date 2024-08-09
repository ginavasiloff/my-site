import {
  fetchIndividualDetails,
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovieSearch,
} from './the-movie-db'

const mockFetch = (data: any) => {
  global.fetch = vi
    .fn()
    .mockResolvedValue({ json: () => Promise.resolve(data) })
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('fetchMovieSearch', () => {
  beforeAll(() => {
    mockFetch({ results: [] })
  })
  test('it uses the query string to get', async () => {
    const query = 'test'
    await fetchMovieSearch(query)
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(query),
      expect.objectContaining({ method: 'GET' })
    )
  })
})

describe('fetchMovieDetails', () => {
  beforeAll(() => {
    mockFetch({})
  })

  test('it uses a movie id to get from the movie api', async () => {
    const movieId = '0'
    await fetchMovieDetails(movieId)
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(movieId),
      expect.objectContaining({ method: 'GET' })
    )
  })
})

describe('fetchMovieCredits', () => {
  beforeAll(() => {
    mockFetch({
      id: '0',
      cast: [],
    })
  })
  test('it uses a movie id to get from the movie api', async () => {
    const movieId = '0'
    await fetchMovieCredits(movieId)
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(movieId),
      expect.objectContaining({ method: 'GET' })
    )
  })
})

describe('fetchIndividualDetails', () => {
  beforeAll(() => {
    mockFetch({})
  })
  test('it uses a person id to get from the movie api', async () => {
    const personId = '0'
    await fetchIndividualDetails(personId)
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(personId),
      expect.objectContaining({ method: 'GET' })
    )
  })
})
