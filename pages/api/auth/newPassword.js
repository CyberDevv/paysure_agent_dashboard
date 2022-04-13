import { makeEncryptedRequestWithoutUserJWT } from '../../../utils/makeEncryptedRequestWithoutUserJWT'

export default async function forgotPasswordAPI(req, res) {
  try {
    const { email, otp, newPassword, confirmNewPassword } = req.body

    const response = await makeEncryptedRequestWithoutUserJWT(
      {
        userName: email,
        otp,
        password: newPassword,
        verifyPassword: confirmNewPassword,
      },
      'paysure/api/processor/votp-n-force-change',
      'POST',
    )

    console.log(response)

    res.status(response.status).json(response)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}
