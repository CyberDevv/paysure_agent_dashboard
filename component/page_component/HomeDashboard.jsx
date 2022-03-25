import React from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import CurrencyFormat from 'react-currency-format'

import {
  Layout,
  OverViewCardTemp,
  HomeDisplayCard,
  DataGridViewTemp,
  NumberFormatter,
  DatRangePickerAndOthers,
  FilterBox,
} from '..'

const HomeDashboard = () => {
  // array of home page stats
  const homePageData = [
    {
      amount: (
        <CurrencyFormat
          value={5283232}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₦'}
        />
      ),
      title: 'Wallet Balance',
    },
    {
      amount: NumberFormatter(24),
      title: 'Total Number of Terminals',
      link: '/terminals',
    },
    {
      amount: NumberFormatter(2783),
      title: 'Total Number of Transactions',
      link: '/transactions',
    },
  ]

  // array of agent stats
  const agencyOveriewData = [
    {
      amount: NumberFormatter(4103),
      label: 'Total Number of Completed Transactions',
    },
    {
      amount: NumberFormatter(10),
      label: 'Total Number of Failed Transactions',
    },
    {
      amount: NumberFormatter(24),
      label: 'Total  Number of Pending Transactions',
    },
    {
      amount: (
        <CurrencyFormat
          value={3283232}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₦'}
        />
      ),
      label: 'Total Transactions',
    },
    {
      amount: (
        <CurrencyFormat
          value={1283232}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₦'}
        />
      ),
      label: 'Total Settlements',
    },
    {
      amount: (
        <CurrencyFormat
          value={2322}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₦'}
        />
      ),
      label: 'charges',
    },
  ]

  return (
    <Layout title="Home">
      <section>
        <KYC className="KYCbgSVG">
          <div>
            <KYCHeader className="font-500">Complete your KYC</KYCHeader>
            <KYCParagraph>
              To enjoy all paysure services, please complete your profile by
              filling the important documents
            </KYCParagraph>
          </div>

          <Link href="/profile/updateProfile">
            <KYCButton>Go to profile</KYCButton>
          </Link>
        </KYC>

        <HomeDisplayCard data={homePageData} title="Overview" />

        <OverViewCardTemp
          title="Transactions"
          data={agencyOveriewData}
          btnLabel="View all"
          link="/transactions"
        />

        <DataGridViewTemp
          link="/transactions/transactionsList"
          limited
          title="Transaction Records"
          rows={[]}
          columns={columns}
          hasExportBtn
          className={tw`grid grid-auto-columns[auto] gap-4 w-full xl:(flex items-center space-y-0 space-x-4)`}
        >
          <div tw="space-y-4 sm:(flex space-x-4 space-y-0) w-full col-span-2">
            <FilterBox label="Showing" dropdownData={showingdropdownData} />
            <FilterBox label="Transaction" dropdownData={dropdownData} />
          </div>
          <DatRangePickerAndOthers />
        </DataGridViewTemp>
      </section>
    </Layout>
  )
}

// FIXME: Temp data (should be replaced with real data)
const dropdownData = [
  {
    label: 'All',
    value: 'all',
  },
  {
    value: 'user',
    label: 'User',
  },
  {
    value: 'admin',
    label: 'Admin',
  },
]

const showingdropdownData = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Pending',
    value: 'pending',
  },
  {
    label: 'Completed',
    value: 'completed',
  },
]

// FIXME: Temp data (should be replaced with real data)
const rows = [
  {
    id: 1,
    col1: 1,
    col2: 'POS Withdrawal',
    col3: 'Savannah',
    col4: 28,
    col5: 101234,
    col6: 'TID-131332',
    col7: '349234893948',
    col8: '190939203',
    col9: '200000',
    col10: '423',
    col11: '23',
    col12: 'Pending',
    col13: 'Dec 30, 2018 05:12',
    col14: '',
  },
  {
    id: 2,
    col1: 2,
    col2: 'Bessie Cooper',
    col3: 'Tv Subscription',
    col4: 5000,
    col5: 39.9,
    col6: '443943043',
    col7: 'Bank Card',
    col8: 'pending',
    col9: 'Dec 30, 2018 05:12',
    col10: '',
  },
  {
    id: 3,
    col1: 3,
    col2: 'Bessie Cooper',
    col3: 'Tv Subscription',
    col4: 5000,
    col5: 39.9,
    col6: '443943043',
    col7: 'Bank Card',
    col8: 'pending',
    col9: 'Dec 30, 2018 05:12',
    col10: '',
  },
  {
    id: 4,
    col1: 4,
    col2: 'Bessie Cooper',
    col3: 'Tv Subscription',
    col4: 5000,
    col5: 39.9,
    col6: '443943043',
    col7: 'Bank Card',
    col8: 'completed',
    col9: 'Dec 30, 2018 05:12',
    col10: '',
  },
  {
    id: 5,
    col1: 5,
    col2: 'Bessie Cooper',
    col3: 'Tv Subscription',
    col4: 5000,
    col5: 39.9,
    col6: '443943043',
    col7: 'Bank Card',
    col8: 'pending',
    col9: 'Dec 30, 2018 05:12',
    col10: '',
  },
]

const columns = [
  {
    field: 'col1',
    headerName: 'S/N',
    minWidth: 71,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col2',
    headerName: 'Transaction Type',
    minWidth: 227,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col3',
    headerName: 'Agent Name',
    minWidth: 140,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col4',
    headerName: 'RRN',
    minWidth: 126,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col5',
    headerName: 'Ref. No.',
    minWidth: 101,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col6',
    headerName: 'Terminal ID',
    minWidth: 139,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col7',
    headerName: 'Pan Account',
    minWidth: 144,
    flex: 1,
    headerClassName: 'grid-header',
    renderCell: params => {
      return (
        <span>
          {params.row.col7.substring(0, 2) +
            params.row.col7.replace(/.(?=.{4})/g, '*')}
        </span>
      )
    },
  },
  {
    field: 'col8',
    headerName: 'Auth Code',
    minWidth: 144,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col9',
    headerName: 'Amount',
    minWidth: 144,
    flex: 1,
    headerClassName: 'grid-header',
    renderCell: params => {
      return (
        <CurrencyFormat
          value={params.row.col9}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₦'}
        />
      )
    },
  },
  {
    field: 'col10',
    headerName: 'charges',
    minWidth: 144,
    flex: 1,
    headerClassName: 'grid-header',
    renderCell: params => {
      return (
        <CurrencyFormat
          value={params.row.col10}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₦'}
        />
      )
    },
  },
  {
    field: 'col11',
    headerName: 'Settlement',
    minWidth: 144,
    flex: 1,
    headerClassName: 'grid-header',
    renderCell: params => {
      return (
        <CurrencyFormat
          value={params.row.col11}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₦'}
        />
      )
    },
  },
  {
    field: 'col12',
    headerName: 'Status',
    minWidth: 101,
    flex: 1,
    headerClassName: 'grid-header',
    disableClickEventBubbling: true,
    renderCell: params => {
      return (
        <span css={[tw`bg-border2 text-paysure-primary-100 p-1 rounded`]}>
          {params.row.col12}
        </span>
      )
    },
  },
  {
    field: 'col13',
    headerName: 'Date, Time',
    minWidth: 185,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col14',
    headerName: 'Action',
    minWidth: 100,
    flex: 1,
    sortable: false,
    headerClassName: 'grid-header',

    renderCell: params => {
      const handleEdit = () => {
        console.log('edit')
      }

      const handleView = e => {
        const api = params.api
        const thisRow = {}

        api
          .getAllColumns()
          .filter(c => c.field !== '__check__' && !!c)
          .forEach(
            c => (thisRow[c.field] = params.getValue(params.id, c.field)),
          )

        // Router.push(`/agents/super_agent/${thisRow.col1}`)
      }

      return (
        // <div tw="space-x-1">
        //   <button onClick={handleEdit}>
        //     <EditActionSVG />
        //   </button>

        //   <button onClick={handleView}>
        //     <ViewActionSVG />
        //   </button>
        // </div>

        <button tw="normal-case text-paysure-primary-100">Print</button>
      )
    },
  },
]

// Tailwind styles
const KYC = tw.div`rounded-lg text-white px-6 py-5 flex justify-between items-end space-x-4 lg:(px-8 py-[30px])`
const KYCHeader = tw.h3`text-lg sm:text-xl tracking-[-0.05em] leading-[29px] lg:(text-2xl)`
const KYCParagraph = tw.p`(text-xs mt-1) sm:(text-sm mt-2) lg:(text-base mt-3)`
const KYCButton = tw.a`text-white normal-case text-xs sm:text-sm whitespace-nowrap cursor-pointer lg:(text-base)`

export default HomeDashboard
