import { makeEncryptedRequest } from '../../../utils/makeEncryptedRequest'

export default async function addRole(req, res) {
  try {
    const { roleName, roleDesc } = req.body

    const response = await makeEncryptedRequest(
      { roleName, roleDesc },
      'paysure/api/processor/create-role',
      'POST',
    )

    res.status(response.status).json(response)
  } catch (error) {
    console.log(error.response.data)
  }
}
