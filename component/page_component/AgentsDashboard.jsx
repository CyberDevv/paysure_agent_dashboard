import React from 'react'
import tw from 'twin.macro'
import { Button } from '@mui/material'

import { Add, EditActionSVG, UserWithPositive, Wallet } from '../SVGIcons'
import {
  Layout,
  Modal,
  HomeDisplayCard,
  DataGridViewTemp,
  TextField,
  NumberFormatter,
  SearchBar,
} from '..'
import Router from 'next/router'

const AgentsDashboard = () => {
  // array of agent page stats
  const agentPageData = [
    {
      amount: NumberFormatter(13),
      title: 'Total Number of Agents',
    },
    {
      amount: NumberFormatter(24),
      title: 'Total Number of Terminals',
      link: '/terminals',
    },
    {
      amount: NumberFormatter(10),
      title: 'Total Number of Active Agents',
    },
    {
      amount: NumberFormatter(3),
      title: 'Total Number of Inactive Agents',
    },
  ]

  // useState hook
  const [isaddModalOpened, setIsAddmodalOpened] = React.useState(false)
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [BVN, setBVN] = React.useState('')
  const [businessName, setBusinessName] = React.useState('')
  const [businessAddress, setBusinessAddress] = React.useState('')
  const [planType, setPlanType] = React.useState('')
  const [settlementType, setSettlementType] = React.useState('')

  // functions
  const handSetIsAddmodalOpened = React.useCallback(() =>
    setIsAddmodalOpened(true),
  )

  return (
    <Layout title="Agents">
      <section>
        <div css={[tw`flex justify-between items-center`]}>
          <Ttile className="font-bold">Agents</Ttile>

          <MUIButton onClick={handSetIsAddmodalOpened} startIcon={<Add />}>
            Add Agent
          </MUIButton>

          {/* Add agent modal */}
          <Modal
            title="Add Agent"
            state={isaddModalOpened}
            setState={setIsAddmodalOpened}
            buttonLabel="Confirm"
          >
            <form tw="space-y-6">
              <FlexBox>
                <TextField
                  label="First Name"
                  value={firstName}
                  setValue={setFirstName}
                />
                <TextField
                  label="Last Name"
                  value={lastName}
                  setValue={setLastName}
                />
              </FlexBox>
              <TextField
                label="Email"
                value={email}
                setValue={setEmail}
                type="email"
              />
              <FlexBox>
                <TextField
                  label="Phone Number"
                  value={phoneNumber}
                  setValue={setPhoneNumber}
                />
                <TextField label="BVN" value={BVN} setValue={setBVN} />
              </FlexBox>
              <TextField
                label="Business Name"
                value={businessName}
                setValue={setBusinessName}
              />
              <TextField
                label="Business Address"
                value={businessAddress}
                setValue={setBusinessAddress}
              />
              <TextField
                label="Plan Type"
                value={planType}
                setValue={setPlanType}
                select={['Basic', 'Standard', 'Premium']}
              />
              <TextField
                label="Settlement Type"
                value={settlementType}
                setValue={setSettlementType}
                select={['Basic', 'Standard', 'Premium']}
              />
            </form>
          </Modal>
        </div>

        <HomeDisplayCard data={agentPageData} />

        <DataGridViewTemp
          link="/agents/agentsList"
          limited
          title="Agents List"
          rows={rows}
          columns={columns}
          hasSearch
          hasExportBtn
          className={tw`grid gap-4 sm:grid-template-columns[2fr 1fr] w-full`}
        >
          <div tw="w-full">
            <SearchBar />
          </div>
        </DataGridViewTemp>
      </section>
    </Layout>
  )
}

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
    headerName: 'Agent Name',
    minWidth: 227,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col3',
    headerName: 'Terminals',
    minWidth: 140,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col4',
    headerName: 'No. of Transactions',
    minWidth: 126,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col5',
    headerName: 'Transaction(₦)',
    minWidth: 101,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col6',
    headerName: 'Wallet Balance',
    minWidth: 139,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col7',
    headerName: 'Current Plan',
    minWidth: 144,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col8',
    headerName: 'Date Added',
    minWidth: 144,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col9',
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
    headerName: 'Notification Time',
    minWidth: 185,
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
        const api = params.api
        const thisRow = {}

        api
          .getAllColumns()
          .filter(c => c.field !== '__check__' && !!c)
          .forEach(
            c => (thisRow[c.field] = params.getValue(params.id, c.field)),
          )

        Router.push(`/agents/${thisRow.col1}`)
      }

      return (
        <div tw="space-x-1">
          <button onClick={handleEdit}>
            <EditActionSVG />
          </button>

          <button onClick={handleView}>
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
const MUIButton = tw(
  Button,
)`bg-paysure-primary-100 text-white normal-case rounded-lg p-3 pl-3.5 text-[13px] hover:(bg-paysure-primary-100 ring-2 ring-offset-2 ring-paysure-primary-100)`
const FlexBox = tw.div`flex space-x-4`

export default AgentsDashboard
