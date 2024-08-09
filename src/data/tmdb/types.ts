export type CastMember = {
  id: string
  name: string
  birthday: string
  ageAtRelease?: number
  profileId: string
}

export type MovieCredits = {
  id: string
  cast: CastMember[]
}

export type MovieDetails = {
  id: string
  title: string
  releaseDate: string
}

export type MovieSummary = {
  id: string
  posterPath: string
  releaseDate: string
  title: string
}
