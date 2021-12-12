import { NextApiRequest, NextApiResponse } from 'next'

import { continents } from 'mock'
import { Continent } from 'types'

const handler = (_: NextApiRequest, response: NextApiResponse<Continent[]>) => {
  response.status(200).json(continents)
}

export default handler
