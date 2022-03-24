import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { ForgotPassword } from '../component'

const ForgotPasswordPage = () => (
  <div>
    <Head>
      <title>Forgot Password | PaySure</title>
    </Head>

    <ForgotPassword />
  </div>
)

export default ForgotPasswordPage
