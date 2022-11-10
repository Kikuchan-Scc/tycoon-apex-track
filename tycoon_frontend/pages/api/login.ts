// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest,res: NextApiResponse) {
  // const {username, password} = req.body

  console.log(req.body)
  res.status(200).json({ name: 'John Doe' })
}
