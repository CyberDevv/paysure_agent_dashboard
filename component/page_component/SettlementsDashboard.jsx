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
  ReceiptLabel,
  Modal,
  FilterBox,
  SearchBar,
  DatRangePickerAndOthers,
} from '..'

const SettlementsDashboard = () => {
  const [modalView, setModalView] = React.useState(false)

  // array of agent stats
  const agencyOveriewData = [
    {
      amount: (
        <CurrencyFormat
          value={278322}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₦'}
        />
      ),
      label: 'Total Settlements',
    },
    {
      amount: NumberFormatter(124232),
      label: 'Total Number of Successful Settlements',
    },
    {
      amount: NumberFormatter(243),
      label: 'Total  Number of Failed Settlements',
    },
    {
      amount: NumberFormatter(243),
      label: 'Total  Number of Pending Settlements',
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
      headerName: 'Amount',
      minWidth: 227,
      flex: 1,
      headerClassName: 'grid-header',
      renderCell: params => {
        return (
          <CurrencyFormat
            value={params.row.col2}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₦'}
          />
        )
      },
    },
    {
      field: 'col3',
      headerName: 'Type',
      minWidth: 140,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col4',
      headerName: 'Identifier',
      minWidth: 186,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col5',
      headerName: 'RRR',
      minWidth: 201,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col6',
      headerName: 'Status',
      minWidth: 139,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col7',
      headerName: 'Date',
      minWidth: 144,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col8',
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

  return (
    <Layout title="Settlements">
      <section>
        <div css={[tw`flex justify-between items-center`]}>
          <Ttile className="font-bold">Settlement Overview</Ttile>
        </div>

        <OverViewCardTemp data={agencyOveriewData} />

        <DataGridViewTemp
          link="/settlements/transactionsList"
          limited
          title="Transaction Records"
          rows={[]}
          columns={columns}
          hasExportBtn
          className={tw`grid sm:grid-template-columns[auto] gap-4 w-full xl:(grid-cols-2)`}
        >
          <div tw="col-span-2 grid sm:grid-cols-2 gap-4 xl:(grid-cols-4)">
            <SearchBar />
            <FilterBox label="Type" dropdownData={typedropdownData} />
            <FilterBox label="Status" dropdownData={StatusdropdownData} />
            <FilterBox label="Benefactor" dropdownData={dropdownData} />
          </div>
          <DatRangePickerAndOthers />
        </DataGridViewTemp>

        <Modal
          title="Transaction Details"
          setState={setModalView}
          state={modalView}
          buttonLabel="Print report"
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
            <ReceiptLabel label="Merchant ID" value="012233332324" />
            <ReceiptLabel label="Status Code" value="00" isRightAlgned />
            <ReceiptLabel label="Plan" value="Percentage plan 0.7" />
            <ReceiptLabel
              label="Status Description"
              value={
                <p tw="text-xs text-paysure-success-100 bg-[#E9FBF9] p-[10px] rounded-full w-[fit-content]">
                  Completed Successfully
                </p>
              }
              isRightAlgned
            />
          </div>
        </Modal>
      </section>
    </Layout>
  )
}

const typedropdownData = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'pending',
    label: 'Pending',
  },
  {
    value: 'failed',
    label: 'Failed',
  },
  {
    value: 'deposit transfer',
    label: 'Deposit Transfer',
  },
  {
    value: 'unknown/pending',
    label: 'Unknown/Pending',
  },
  {
    value: 'income settlements',
    label: 'Income Settlements',
  },
]

const StatusdropdownData = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'failed',
    label: 'Failed',
  },
  {
    value: 'pending',
    label: 'Pending',
  },
  {
    value: 'successful',
    label: 'Successful',
  },
]

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
const MUIButton = tw(
  Button,
)`bg-paysure-primary-100 text-white normal-case rounded-lg p-3 pl-3.5 text-[13px] hover:(bg-paysure-primary-100 ring-2 ring-offset-2 ring-paysure-primary-100)`

export default SettlementsDashboard
