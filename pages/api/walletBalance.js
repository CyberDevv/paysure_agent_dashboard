import uid from 'generate-unique-id'
import { parseCookies } from 'nookies'

import { makeEncryptedRequest } from '../../../../utils/makeEncryptedRequest'

export default async function loginAPI(req, res) {
  const { USER_AUTHORIZATION } = parseCookies({ req })

  try {
    const { walletId, email } = req.body

    const response = await makeEncryptedRequest(
      {
        walletId,
        emailAddress: email,
        requestId: uid({
          length: 20,
        }),
      },
      'BASE-URL/paysure/api/processor/agents-balance-enquiry',
      'POST',
      USER_AUTHORIZATION,
    )

    console.log(response)

    res.status(response.status).json(response)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}
