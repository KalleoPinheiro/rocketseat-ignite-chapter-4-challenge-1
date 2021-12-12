import { NextApiRequest, NextApiResponse } from 'next'

import { continents } from 'mock'
import { Continent } from 'types'

const handler = (request: NextApiRequest, response: NextApiResponse<Continent | undefined>) => {
  const {
    query: { id },
    method,
  } = request

  switch (method) {
    case 'GET':
      response.status(200).json(continents.find(continent => continent.id === id))
      break
    default:
      response.setHeader('Allow', ['GET'])
      response.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default handler
