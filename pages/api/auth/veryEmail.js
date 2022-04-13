import { makeEncryptedRequestWithoutUserJWT } from '../../../utils/makeEncryptedRequestWithoutUserJWT'

export default async function verifyEmail(req, res) {
  try {
    const { email, otp } = req.body

    const response = await makeEncryptedRequestWithoutUserJWT(
      { userName: email, otp },
      'paysure/api/processor/votp-email',
      'POST',
    )

    res.status(response.status).json(response)
  } catch (error) {
    res.json(error)
  }
}
