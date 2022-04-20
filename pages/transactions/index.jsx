import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'
import nookies from 'nookies'
import Router from 'next/router'
import uid from 'generate-unique-id'
import { destroyCookie } from 'nookies'
import { useDispatch } from 'react-redux'

import { logout } from '../../features/userSlice'
import { TransactionsDashboard } from '../../component'
import { makeEncryptedRequest } from '../../utils/makeEncryptedRequest'

const TransactionsPage = ({ status, data }) => {
  // dispatch
  const dispatch = useDispatch()

  // useEffect hook
  React.useEffect(() => {
    if (status === 873) {
      // logout the user and push to login page
      dispatch(logout())
      destroyCookie(null, 'USER_AUTHORIZATION')
      localStorage.removeItem('user')
      Router.push('/login')
    }
  })

  return (
    <div>
      <Head>
        <title>Transactions | PaySure</title>
      </Head>

      <TransactionsDashboard transactionData={data} />
    </div>
  )
}

// getServerSideProps
export async function getServerSideProps(ctx) {
  const { USER_AUTHORIZATION } = nookies.get(ctx)

  // TRANSACTIONS DASHBOARD STATS
  const response = await makeEncryptedRequest(
    {
      // requestId: uid({
      //   length: 20,
      // }),
      fromDate: '2021-01-01 00:00:00',
      toDate: '2022-03-31 23:59:59',
      pageId: 1,
      pageSize: 10,
    },
    'paysure/api/processor/agents-reports',
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

export default TransactionsPage
