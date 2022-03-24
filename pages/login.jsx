import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { Login } from '../component'

const IndexPage = () => (
  <div>
    <Head>
      <title>Login | PaySure</title>
    </Head>

    <Login />
  </div>
)

export default IndexPage
