import { CastMember, MovieCredits, MovieDetails, MovieSummary } from './types'

const movieDbApiUrl = process.env.TMDB_API_URL
const token = process.env.TMDB_API_TOKEN

const defaultOptions: RequestInit = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
}

const getTMDB = async (req: string | URL | Request) => {
  const data = await fetch(req, defaultOptions)
  const result = await data.json()
  return result
}

export const fetchMovieSearch = async (
  query: string
): Promise<MovieSummary[]> => {
  const url = `${movieDbApiUrl}/search/movie?include_adult=true&query=${query}`
  const res = await getTMDB(url)
  return res.results.map(
    (m: { id: any; title: any; poster_path: any; release_date: any }) => ({
      id: m.id,
      title: m.title,
      posterPath: m.poster_path,
      releaseDate: m.release_date,
    })
  )
}

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  const url = `${movieDbApiUrl}/movie/${movieId}`
  const res = await getTMDB(url)
  const releaseDate = res.release_date
  return { id: movieId, releaseDate, title: res.title }
}

type TMDBCast = {
  id: string
  name: string
  birthday: string
  profile_id: string
}
export const fetchMovieCredits = async (
  movieId: string
): Promise<MovieCredits> => {
  const url = `${movieDbApiUrl}/movie/${movieId}/credits`
  const response = await getTMDB(url)
  const cast: CastMember[] = response.cast.map((c: TMDBCast) => {
    const { id, name, birthday, profile_id } = c
    return { id, name, birthday, profileId: profile_id }
  })
  return { id: movieId, cast }
}

export const fetchIndividualDetails = async (
  personId: string
): Promise<CastMember> => {
  const url = `${movieDbApiUrl}/person/${personId}`
  const details = await getTMDB(url)
  const { id, name, birthday, profile_id } = details
  return { id, name, birthday, profileId: profile_id }
}
