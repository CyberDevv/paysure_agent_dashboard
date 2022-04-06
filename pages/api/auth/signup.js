import { makeEncryptedRequestWithoutUserJWT } from '../../../utils/makeEncryptedRequestWithoutUserJWT'

export default async function loginAPI(req, res) {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      BVN,
      businessName,
      businessAddress,
      userRole,
      password,
      confirmPassword,
    } = req.body

    const response = await makeEncryptedRequestWithoutUserJWT(
      {
        firstName,
        lastName,
        phonePri: phoneNumber,
        emailAddress: email,
        bvn: BVN,
        fullName: businessName,
        address1: businessAddress,
        userRole,
        password,
        verifyPassword: confirmPassword,
        userName: email,
        partnerCode: '00000001',
      },
      'paysure/api/processor/create-profile-nx',
      'POST',
    )

    console.log(response)

    res.status(response.status).json(response)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}
