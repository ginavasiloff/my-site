import { query } from '@/data/query'
import { neon } from '@neondatabase/serverless'

type MediaType = ''

type Media = {
  title: string
}

export const addMedia = async (media: Media) => {
  const queryString = `insert into media(title) values('${media.title}');`
  const res = await query(queryString)
  console.log({ res })
}
