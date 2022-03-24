import React from 'react'
import tw from 'twin.macro'
import Router from 'next/router'
import { Button } from '@mui/material'

import {
  Layout,
  Modal,
  TextField,
  HomeDisplayCard,
  DataGridViewTemp,
  NumberFormatter,
  FilterBox,
  SearchBar
} from '..'
import { Add, EditActionSVG, UserWithPositive, Wallet } from '../SVGIcons'

const TerminalsDashboard = () => {
  // array of agent page stats
  const agentPageData = [
    {
      amount: NumberFormatter(24),
      title: 'Total Number of Terminals',
    },
    {
      amount: NumberFormatter(10),
      title: 'Total Number of Active Terminals',
    },
    {
      amount: NumberFormatter(3),
      title: 'Total Number of Inactive Terminals',
    },
  ]

  // useState hook
  const [isaddModalOpened, setIsAddmodalOpened] = React.useState(false)
  const [terminalID, setTerminalID] = React.useState('')
  const [serialNo, setSerialNo] = React.useState('')
  const [transactionLimit, setTransactionLimit] = React.useState('')
  const [nibbsRate, setNibbsRate] = React.useState('')
  const [bank, setBank] = React.useState('')
  const [terminalType, setTerminalType] = React.useState('')

  // functions
  const handSetIsAddmodalOpened = React.useCallback(() =>
    setIsAddmodalOpened(true),
  )

  return (
    <Layout title="Terminals">
      <section>
        <div css={[tw`flex justify-between items-center`]}>
          <Ttile className="font-bold">Terminals</Ttile>

          <MUIButton onClick={handSetIsAddmodalOpened} startIcon={<Add />}>
            Add Terminal
          </MUIButton>

          {/* Add agent modal */}
          <Modal
            title="Add Terminal"
            state={isaddModalOpened}
            setState={setIsAddmodalOpened}
            buttonLabel="Save"
          >
            <form tw="space-y-6">
              <TextField
                label="Terminal ID"
                value={terminalID}
                setValue={setTerminalID}
              />
              <TextField
                label="Serial No"
                value={serialNo}
                setValue={setSerialNo}
              />
              <TextField
                label="Transacton Limit"
                value={transactionLimit}
                setValue={setTransactionLimit}
                type="email"
              />
              <TextField
                label="Bank"
                value={bank}
                setValue={setBank}
                select={['Basic', 'Standard', 'Premium']}
              />
              <TextField
                label="Terminal Type"
                value={terminalType}
                setValue={setTerminalType}
                select={['Basic', 'Standard', 'Premium']}
              />
              <TextField
                label="Nibbs Rate"
                value={nibbsRate}
                setValue={setNibbsRate}
              />
            </form>
          </Modal>
        </div>

        <HomeDisplayCard data={agentPageData} />

        <DataGridViewTemp
          link="/terminals/terminalList"
          limited
          title="Terminals"
          rows={rows}
          columns={columns}
          hasExportBtn
          className={tw`space-y-4 md:(flex justify-between items-center w-full)`}
        >
          <div tw=" space-y-4 sm:(flex space-x-4 space-y-0) w-full">
            <SearchBar />
            <FilterBox label="Showing" dropdownData={dropdownData} />
          </div>
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
    value: 'active',
    label: 'Active',
  },
  {
    value: 'inactive',
    label: 'Inactive',
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
    headerName: 'Terminal ID',
    minWidth: 227,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col3',
    headerName: 'Serial No.',
    minWidth: 140,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col4',
    headerName: 'Bank',
    minWidth: 126,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col5',
    headerName: 'Transactions',
    minWidth: 101,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col6',
    headerName: 'Nibbs Rate(%)',
    minWidth: 139,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col7',
    headerName: 'Merchant',
    minWidth: 144,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col8',
    headerName: 'Status',
    minWidth: 101,
    flex: 1,
    headerClassName: 'grid-header',
    disableClickEventBubbling: true,
    renderCell: params => {
      return (
        <span css={[tw`bg-border2 text-paysure-primary-100 p-1 rounded`]}>
          {params.row.col8}
        </span>
      )
    },
  },
  {
    field: 'col9',
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

        Router.push(`/terminals/${thisRow.col1}`)
      }

      return (
        <div tw="space-x-1">
          <button onClick={handleEdit}>
            <EditActionSVG />
          </button>

          <button>
            <UserWithPositive />
          </button>

          <button onClick={handleView}>
            <Wallet />
          </button>
        </div>
      )
    },
  },
]

// Tailwind styles
const Ttile = tw.h1`text-gray-dark tracking-[-0.05em] text-2xl lg:text-[28px] xl:(text-[32px])`
const TitleSpan = tw.span`block text-light-dark text-sm font-normal mt-1.5 tracking-normal lg:(text-base) xl:mt-3`
const MUIButton = tw(
  Button,
)`bg-paysure-primary-100 text-white normal-case rounded-lg p-3 pl-3.5 text-[13px] hover:(bg-paysure-primary-100 ring-2 ring-offset-2 ring-paysure-primary-100)`

export default TerminalsDashboard
