import React from 'react'
import tw from 'twin.macro'
import { Button } from '@mui/material'

import { Layout, DataGridViewTemp } from '..'
import { ViewActionSVG, Print } from '../SVGIcons'
import CurrencyFormat from 'react-currency-format'

const SettlementTransactionLIst = () => {
  return (
    <Layout goBack>
      <section>
        <DataGridViewTemp
          title="Transaction Records"
          rows={rows}
          columns={columns}
          dropdownData={dropdownData}
          hasSearch
          hasFilter="Benefactor"
          hasSort
          hasFilterStatus
          StatusDropdownData={dropdownData}
          hasFilterType
          typeDropdownData={typedropdownData}
          hasExportBtn
        />
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

// FIXME: Temp data (should be replaced with real data)
const dropdownData = [
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
    minWidth: 126,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col5',
    headerName: 'Percentage',
    minWidth: 101,
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
]

export default SettlementTransactionLIst