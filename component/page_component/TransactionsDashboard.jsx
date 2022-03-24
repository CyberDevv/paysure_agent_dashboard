import React from 'react'
import tw from 'twin.macro'
import Image from 'next/image'
import { Button } from '@mui/material'
import CurrencyFormat from 'react-currency-format'

import { Add, Print, ViewActionSVG } from '../SVGIcons'
import {
  Layout,
  OverViewCardTemp,
  HomeDisplayCard,
  DataGridViewTemp,
  NumberFormatter,
  Modal,
  ReceiptLabel,
  SearchBar, 
  FilterBox
} from '..'
import Router from 'next/router'

const TransactionsDashboard = () => {
  const [modalView, setModalView] = React.useState(false)

  
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
      headerName: 'Mark Pan',
      minWidth: 227,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col3',
      headerName: 'Terminal ID',
      minWidth: 140,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col4',
      headerName: 'Merchant Name',
      minWidth: 126,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col5',
      headerName: 'Amount',
      minWidth: 101,
      flex: 1,
      headerClassName: 'grid-header',
      renderCell: params => {
        return (
          <CurrencyFormat
            value={params.row.col5}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₦'}
          />
        )
      },
    },
    {
      field: 'col6',
      headerName: 'Charge',
      minWidth: 139,
      flex: 1,
      headerClassName: 'grid-header',
      renderCell: params => {
        return (
          <CurrencyFormat
            value={params.row.col6}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₦'}
          />
        )
      },
    },
    {
      field: 'col7',
      headerName: 'Transaction Ref.',
      minWidth: 144,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col8',
      headerName: 'RRR',
      minWidth: 101,
      flex: 1,
      headerClassName: 'grid-header',
      disableClickEventBubbling: true,
    },
    {
      field: 'col9',
      headerName: 'Type',           
      minWidth: 185,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col10',
      headerName: 'Status Code',
      minWidth: 185,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col11',
      headerName: 'Notification Time',
      minWidth: 185,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col12',
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

          setModalView(true)
          
          // const api = params.api
          // const thisRow = {}

          // api
          //   .getAllColumns()
          //   .filter(c => c.field !== '__check__' && !!c)
          //   .forEach(
          //     c => (thisRow[c.field] = params.getValue(params.id, c.field)),
          //   )

          // Router.push(`/transactions/${thisRow.col1}`)
        }

        return (
          <div tw="space-x-1">
            <button onClick={handleView}>
              <ViewActionSVG />
            </button>

            <button onClick={handleView}>
              <Print />
            </button>
          </div>
        )
      },
    },
  ]
  
  // array of agent page stats
  const agentPageData = [
    {
      amount: (
        <CurrencyFormat
          value={5283232}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₦'}
        />
      ),
      title: 'Total Transactions',
    },
    {
      amount: (
        <CurrencyFormat
          value={5283232}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₦'}
        />
      ),
      title: 'Total Successful Transactions',
    },
    {
      amount: (
        <CurrencyFormat
          value={5283232}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₦'}
        />
      ),
      title: 'Total Pending Transactions',
    },
    {
      amount: (
        <CurrencyFormat
          value={5283232}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₦'}
        />
      ),
      title: 'Total Failed Transactions',
    },
  ]

  // array of agent stats
  const agencyOveriewData = [
    {
      amount: NumberFormatter(132423),
      label: 'Total Number of Paysure Transactions',
    },
    {
      amount: NumberFormatter(124232),
      label: 'Total Number of Completed Transactions',
    },
    {
      amount: NumberFormatter(243),
      label: 'Total  Number of Pending Transactions',
    },
    {
      amount: NumberFormatter(243),
      label: 'Total  Number of Failed Transactions',
    },
  ]

  return (
    <Layout title="Transactions">
      <section>
        <div css={[tw`flex justify-between items-center`]}>
          <Ttile className="font-bold">Transactions</Ttile>
        </div>

        <HomeDisplayCard data={agentPageData} />

        <OverViewCardTemp title="Transaction Counts" data={agencyOveriewData} />

        <DataGridViewTemp
          link="/transactions/transactionsList"
          limited
          title="Transaction Records"
          rows={rows}
          columns={columns}
          hasExportBtn
          className={tw`flex flex-col space-y-4 md:(flex-row space-y-0 space-x-4) w-full`}
        >
          <div tw= "grid gap-4 w-full sm:grid-cols-2 md:flex">
            <SearchBar />
            <FilterBox label="Status" dropdownData={dropdownData} />
          </div>
        </DataGridViewTemp>

        {/* View modal */}
        <Modal
          title="Transaction Details"
          setState={setModalView}
          state={modalView}
          buttonLabel="Print report"
          link="/transactions/1"
          linkLabel="View full report"
        >
          {/* Paysure logo */}
          <div tw="flex items-center justify-center mt-8">
            <Image src="/images/paysureLogo.png" height={55} width={180} />
          </div>

          {/* amount */}
          <div tw="text-center">
            <p tw="text-[#505780] mt-8 text-sm">Amount</p>
            <CurrencyFormat
              value={40000}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₦'}
              className="font-500"
              tw="text-[40px] text-dark mt-2"
            />
          </div>

          {/* Details */}
          <div tw="grid grid-cols-2 gap-y-8 gap-x-2 pt-8">
            <ReceiptLabel label="Payment Date" value="10 October, 2021" />
            <ReceiptLabel
              label="Custumer Name"
              value="Guarantee Trust Bank"
              isRightAlgned
            />
            <ReceiptLabel label="Terminal ID" value="012233332324" />
            <ReceiptLabel
              label="RRR"
              value={
                <CurrencyFormat
                  value={40020}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₦'}
                />
              }
              isRightAlgned
            />
            <ReceiptLabel label="Merchant ID" value="012233332324" />
            <ReceiptLabel
              label="Merchant Name"
              value={
                <CurrencyFormat
                  value={40020}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₦'}
                />
              }
              isRightAlgned
            />
            <ReceiptLabel label="Plan" value="Percentage plan 0.7" />
            <ReceiptLabel label="Status Code" value="00" isRightAlgned />
            <ReceiptLabel
              label="Description"
              value="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              isSpan2
            />
            <ReceiptLabel
              label="Status Description"
              value={
                <p tw="text-xs text-paysure-success-100 bg-[#E9FBF9] p-[10px] rounded-full w-[fit-content]">
                  Completed Successfully
                </p>
              }
              isSpan2
            />
          </div>
        </Modal>
      </section>
    </Layout>
  )
}

// FIXME: Temp data (should be replaced with real data)
const dropdownData = [
  {
    value: 'all',
    label: 'All',
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

// FIXME: Temp data (should be replaced with real data)
const rows = [
  {
    id: 1,
    col1: 1,
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

// Tailwind styles
const Ttile = tw.h1`text-gray-dark tracking-[-0.05em] text-2xl lg:text-[28px] xl:(text-[32px])`
const TitleSpan = tw.span`block text-light-dark text-sm font-normal mt-1.5 tracking-normal lg:(text-base) xl:mt-3`
const MUIButton = tw(
  Button,
)`bg-paysure-primary-100 text-white normal-case rounded-lg p-3 pl-3.5 text-[13px] hover:(bg-paysure-primary-100 ring-2 ring-offset-2 ring-paysure-primary-100)`

export default TransactionsDashboard
