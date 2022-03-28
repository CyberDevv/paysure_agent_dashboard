import React from 'react'
import tw from 'twin.macro'
import Image from 'next/image'
import ReactToPrint from 'react-to-print'
import CurrencyFormat from 'react-currency-format'

import { Print, ViewActionSVG } from '../SVGIcons'
import {
  Layout,
  DataGridViewTemp,
  Modal,
  ReceiptLabel,
  FilterBox,
  DatRangePickerAndOthers,
  Receipt,
} from '..'

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
      headerName: 'Transaction Type',
      minWidth: 227,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col3',
      headerName: 'Ref. No.',
      minWidth: 140,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col4',
      headerName: 'Terminal ID',
      minWidth: 126,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col5',
      headerName: 'Pan Account',
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
      headerName: 'Auth Code',
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
      field: 'col8',
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
      field: 'col9',
      headerName: 'Settlement',
      minWidth: 144,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col10',
      headerName: 'Status',
      minWidth: 101,
      flex: 1,
      headerClassName: 'grid-header',
      disableClickEventBubbling: true,
    },
    {
      field: 'col11',
      headerName: 'Date, Time',
      minWidth: 185,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col12',
      headerName: 'RRR',
      minWidth: 185,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col13',
      headerName: 'Action',
      minWidth: 100,
      flex: 1,
      sortable: false,
      headerClassName: 'grid-header',

      renderCell: params => {
        const handlePrint = () => {}

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

            <ReactToPrint
              trigger={() => (
                <button onClick={handlePrint}>
                  <Print />
                </button>
              )}
              content={() => componentRef.current}
            />
          </div>
        )
      },
    },
  ]

  const componentRef = React.useRef()

  return (
    <Layout title="Transactions">
      <section>
        <div css={[tw`flex justify-between items-center`]}>
          <Ttile className="font-bold">Transactions</Ttile>
        </div>

        <DataGridViewTemp
          rows={[]}
          columns={columns}
          hasExportBtn
          className={tw`flex flex-col space-y-4 sm:(grid grid-cols-2) 2xl:(flex flex-row space-y-0 space-x-4) w-full`}
        >
          <div tw="grid gap-4 sm:(col-span-2) md:(grid-cols-3) 2xl:(flex) w-full">
            <FilterBox label="Showing" dropdownData={dropdownData} />
            <FilterBox label="Status" dropdownData={StatusdropdownData} />
            <FilterBox label="Transaction" dropdownData={dropdownData} />
          </div>
          <DatRangePickerAndOthers />
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

      {/* Print */}
      <div tw="hidden">
        <Receipt ref={componentRef} />
      </div>
    </Layout>
  )
}

const StatusdropdownData = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'pending',
    label: 'Pending',
  },
  {
    value: 'complete',
    label: 'Complete',
  },
]

const dropdownData = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'pos withdrawal',
    label: 'POS Withdrawal',
  },
  {
    value: 'wallet history',
    label: 'Wallet History',
  },
  {
    value: 'Transfer',
    label: 'Transfer',
  },
  {
    value: 'Airtime',
    label: 'Airtime',
  },
  {
    value: 'Data',
    label: 'Data',
  },
  {
    value: 'TV Subscription',
    label: 'TV Subscription',
  },
  {
    value: 'Electricity',
    label: 'Electricity',
  },
  {
    value: 'tax',
    label: 'Tax',
  },
  {
    value: 'Internet',
    label: 'Internet',
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

export default TransactionsDashboard
