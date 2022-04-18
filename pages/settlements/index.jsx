import React from 'react'
import Head from 'next/head'
import nookies from 'nookies'

import { SettlementsDashboard } from '../../component'
import { makeEncryptedRequest } from '../../utils/makeEncryptedRequest'

const SettlementsPage = () => (
  <div>
    <Head>
      <title>Settlements | PaySure</title>
    </Head>

    <SettlementsDashboard />
  </div>
)

// getServerSideProps
export async function getServerSideProps(ctx) {
  const { USER_AUTHORIZATION } = nookies.get(ctx)

  // TRANSACTIONS DASHBOARD STATS
  const response = await makeEncryptedRequest(
    {
      requestId: '42d84777ff1040cf957c',
      fromDate: '2021-01-01 00:00:00',
      toDate: '2022-04-30 23:59:59',
      pageId: 1,
      pageSize: 10,
    },
    'paysure/api/processor/agent-settlement-paged-th',
    'POST',
    USER_AUTHORIZATION,
  )

  console.log('response >>>> ' + JSON.stringify(response))

  return {
    props: {
      status: response ? response.status : {},
      data: response ? response.data : {},
    },
  }
}

export default SettlementsPage
