import { makeEncryptedRequestWithoutUserJWT } from '../../../utils/makeEncryptedRequestWithoutUserJWT'

export default async function forgotPasswordAPI(req, res) {
  try {
    const { email } = req.body

    const response = await makeEncryptedRequestWithoutUserJWT(
      { userName: email },
      'paysure/api/processor/force-password-change',
      'POST',
    )

    console.log(response)

    res.status(response.status).json(response)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}
