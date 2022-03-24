import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'

import { DataDashboard } from '../../../component'

const DataPage = () => (
  <div>
    <Head>
      <title>Data | PaySure</title>
    </Head>

    <DataDashboard />
  </div>
)

export default DataPage
