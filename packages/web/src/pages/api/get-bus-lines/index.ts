import { getBusLinesService } from 'main/services/server-side'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const busLines = await getBusLinesService.execute()
    return res.json(busLines)
  } catch (error) {
    console.log(error)
  }
}
