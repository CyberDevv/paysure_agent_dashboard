import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { TaxDashboard } from '../../../component'

const TaxPage = () => (
  <div>
    <Head>
      <title>Tax | PaySure</title>
    </Head>

    <TaxDashboard />
  </div>
)

export default TaxPage
