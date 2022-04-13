import { makeEncryptedRequestWithoutUserJWT } from '../../../utils/makeEncryptedRequestWithoutUserJWT'

export default async function loginAPI(req, res) {
  try {
    const { email, password } = req.body

    const response = await makeEncryptedRequestWithoutUserJWT(
      { userName: email, password },
      'paysure/api/processor/user-login',
      'POST',
    )

    console.log(response)
    console.log("🚀 ~ file: login.js ~ line 14 ~ loginAPI ~ response", response)

    res.status(response.status).json(response)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}
