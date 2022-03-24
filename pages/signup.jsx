import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { Signup } from '../component'

const SignupPage = () => (
  <div>
    <Head>
      <title>Sign Up | PaySure</title>
    </Head>

    <Signup />
  </div>
)

export default SignupPage
