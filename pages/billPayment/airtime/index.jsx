import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { AirtimeDashboard } from '../../../component'

const AirtimePage = () => (
  <div>
    <Head>
      <title>Airtime | PaySure</title>
    </Head>

    <AirtimeDashboard />
  </div>
)

export default AirtimePage
