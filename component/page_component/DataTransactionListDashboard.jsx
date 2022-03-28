import React from 'react'
import tw from 'twin.macro'

import { ViewActionSVG, Print } from '../SVGIcons'
import CurrencyFormat from 'react-currency-format'
import {
  Layout,
  DataGridViewTemp,
  FilterBox,
  DatRangePickerAndOthers,
} from '..'

const DataTransactionListDashboard = () => {
  return (
    <Layout goBack>
      <section>
        <DataGridViewTemp
          title="Transaction Records"
          rows={[]}
          columns={columns}
          hasExportBtn
          className={tw`grid sm:grid-template-columns[auto] gap-4 w-full xl:(grid-cols-2)`}
        >
          <div tw="col-span-2 grid sm:grid-cols-2 gap-4">
            <FilterBox label="Status" dropdownData={dropdownData} />
            <FilterBox label="Network Provider" dropdownData={dropdownData} />
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

// FIXME: Temp data (should be replaced with real data)
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
      headerName: 'Phone Number',
      minWidth: 140,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col4',
      headerName: 'Amount',
      minWidth: 157,
      flex: 1,
      headerClassName: 'grid-header',
      renderCell: params => {
        return (
          <CurrencyFormat
            value={params.row.col4}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₦'}
          />
        )
      },
    },
    {
      field: 'col5',
      headerName: 'Network Provider',
      minWidth: 166,
      flex: 1,
      headerClassName: 'grid-header',
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
            value={params.row.col7}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₦'}
          />
        )
      },
    },
    {
      field: 'col7',
      headerName: 'Data Plan',
      minWidth: 229,
      flex: 1,
      headerClassName: 'grid-header',
      renderCell: params => {
        return (
          <CurrencyFormat
            value={params.row.col7}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₦'}
          />
        )
      },
    },
    {
      field: 'col8',
      headerName: 'Status',
      minWidth: 101,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col9',
      headerName: 'Date',
      minWidth: 144,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col10',
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

export default DataTransactionListDashboard
