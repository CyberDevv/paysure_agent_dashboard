// import { makeEncryptedRequestWithoutUserJWT } from '../../../utils/makeEncryptedRequestWithoutUserJWT'

// export default async function loginAPI(req, res) {
//   try {
//     const { userName, password } = req.body

//     const response = await makeEncryptedRequestWithoutUserJWT(
//       { userName, password },
//       'paysure/api/processor/user-login',
//       'POST',
//     )

//     console.log(response)

//     res.status(response.status).json(response)
//   } catch (error) {
//     res.json(error)
//   }
// }
