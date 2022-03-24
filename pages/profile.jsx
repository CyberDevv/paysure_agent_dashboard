import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { ProfileDashboard } from '../component'

const ProfilePage = () => (
  <div>
    <Head>
      <title>Profile | PaySure</title>
    </Head>

    <ProfileDashboard />
  </div>
)

export default ProfilePage
