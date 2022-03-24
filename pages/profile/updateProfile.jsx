import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { UpdateProfileDashboard } from '../../component'

const UpdateProfilePage = () => (
  <div>
    <Head>
      <title>Update Profile | PaySure</title>
    </Head>

    <UpdateProfileDashboard />
  </div>
)

export default UpdateProfilePage
