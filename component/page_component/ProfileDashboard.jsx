import React from 'react'
import tw from 'twin.macro'
import { Button, IconButton, Menu, MenuItem } from '@mui/material'

import {
  EditActionSVG,
  EllipsisSVG,
  UserProfileSVG,
  UserWithNegative,
  UserWithPositive,
  Wallet,
} from '../SVGIcons'
import {
  DataGridViewTemp,
  OverViewCardTemp,
  Layout,
  Modal,
  NumberFormatter,
  SearchBar,
  FilterBox,
  DatRangePickerAndOthers,
} from '..'
import CurrencyFormat from 'react-currency-format'
import Link from 'next/link'

const AgentDashboard = () => {
  // useState hook
  const [anchorEl, setAnchorEl] = React.useState(null)

  const open = Boolean(anchorEl)

  const handleBtnMenuShown = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Layout goBack>
      <Header>
        <div tw="flex justify-between items-center w-full xl:w-[inherit]">
          {/* Avatar */}
          <AvatarWrapper>
            <Avatar>
              <UserProfileSVG />
            </Avatar>

            <AvatarDetails>
              <UserName className="font-bold">{userDetails.name}</UserName>
              <AgentsTerminalAmount>
                23 Agents, 40 Terminals
              </AgentsTerminalAmount>
            </AvatarDetails>
          </AvatarWrapper>

          {/* buttons  */}
          <div>
            <IconButton
              id="basic-button"
              aria-controls={open ? 'Btnmenu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleBtnMenuShown}
              tw="md:hidden lg:block xl:hidden"
            >
              <EllipsisSVG />
            </IconButton>

            <Menu
              id="Btnmenu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link href="/profile/updateProfile">
                  <a>Edit Profile</a>
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>

        {/* Action Buttons */}
        <ButtonWrapper>
          <MUIButton>
            <Link href="/profile/updateProfile">
              <a>Edit Profile</a>
            </Link>
          </MUIButton>
        </ButtonWrapper>
      </Header>

      {/* Wallet balance */}
      <WalletWrapper className="bgSVG">
        <P className="font-500">Total Wallet Balance</P>
        <Amount className="font-500">
          <CurrencyFormat
            value={234022}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₦'}
            className="font-500"
          />
        </Amount>
      </WalletWrapper>

      {/* Transactions */}
      <OverViewCardTemp
        btnLabel="See all activities"
        link="/transactions"
        title="Transactions"
        data={agencyOveriewData}
      />

      {/* User information */}

      <div tw="flex flex-col justify-between lg:(flex-row space-x-5)">
        <UserInfoWrapper>
          <Title className="font-500">Agent Information</Title>
          {/* User details */}
          <UserGrid>
            <Label>
              Email <LabelAns>{userDetails.email}</LabelAns>
            </Label>

            <Label>
              Account Number <LabelAns>{userDetails.AcctNumber}</LabelAns>
            </Label>

            <Label>
              Address<LabelAns>{userDetails.address}</LabelAns>
            </Label>

            <Label>
              BVN<LabelAns>{userDetails.BVN}</LabelAns>
            </Label>

            <Label>
              Phone <LabelAns>{userDetails.phone}</LabelAns>
            </Label>
          </UserGrid>
        </UserInfoWrapper>

        <UserInfoWrapper>
          <Title className="font-500">Wallet Information</Title>
          {/* Wallet details */}
          <UserGrid>
            <Label>
              Account Number:
              <LabelAns>{walletDetails.AcctNumber}</LabelAns>
            </Label>

            <Label>
              Created on: <LabelAns>{walletDetails.createdOn}</LabelAns>
            </Label>

            <Label>
              Account Balance:
              <LabelAns>{walletDetails.acctBalance}</LabelAns>
            </Label>

            <Label>
              Wallet ID: <LabelAns>{walletDetails.walletID}</LabelAns>
            </Label>

            <Label>
              Charge back: <LabelAns>{walletDetails.charge}</LabelAns>
            </Label>
          </UserGrid>
        </UserInfoWrapper>
      </div>

      {/* DataGrid */}
      <DataGridViewTemp
        hasMT
        title="Terminals"
        rows={[]}
        columns={Terminalcolumns}
        className={tw`space-y-4 xl:(flex space-y-0 space-x-4)`}
      >
        <div tw="space-y-4 md:(flex space-y-0 space-x-4) w-full">
          <SearchBar />
          <FilterBox label="Transaction Type" dropdownData={dropdownData} />
        </div>
        <DatRangePickerAndOthers />
      </DataGridViewTemp>

      {/* DataGrid */}
      <DataGridViewTemp
        limited
        title="Settlements"
        rows={[]}
        columns={Settlementcolumns}
        className={tw`space-y-4 xl:(flex space-y-0 space-x-4)`}
      >
        <div tw="space-y-4 md:(flex space-y-0 space-x-4) w-full">
          <SearchBar />
          <FilterBox label="Transaction Type" dropdownData={dropdownData} />
        </div>
        <DatRangePickerAndOthers />
      </DataGridViewTemp>
    </Layout>
  )
}

// FIXME: Temp data (should be replaced with real data)
const agencyOveriewData = [
  {
    amount: (
      <CurrencyFormat
        value={342323}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₦'}
      />
    ),

    label: 'Total Transaction',
  },
  {
    amount: NumberFormatter(1350),
    label: 'Total Number of Completed Transactions',
  },
  {
    amount: NumberFormatter(10),
    label: 'Total Number of Failed Transactions',
  },
  {
    amount: NumberFormatter(20),
    label: 'Total Number of Pending Transactions',
  },
]

// FIXME: Temp data (should be replaced with real data)
const userDetails = {
  name: 'Bolarinwa Bimbola',
  email: 'ozenua@gmail.com',
  parent: 'Paysure',
  AcctNumber: 32343344,
  BVN: '12345690078',
  address: '3517 W. Gray St. Utica, Pennsylvania 57867',
  phone: '08012345678',
}

const walletDetails = {
  AcctNumber: 32343344,
  createdOn: '10 October, 2021',
  acctBalance: '639000000',
  walletID: '12345690078',
  charge: '8029',
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
    col2: 'Apple',
    col3: 'POS',
    col4: 1,
    col5: 4243,
    col6: '443943043',
    col7: 'inactive',
    col8: '7013',
    col9: 'Dec 30, 2018 05:12',
    col10: '',
  },
  {
    id: 2,
    col1: 2,
    col2: 'Master Card',
    col3: 'POS',
    col4: 1,
    col5: 4243,
    col6: '443943043',
    col7: 'active',
    col8: '7013',
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

const Terminalcolumns = [
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
    minWidth: 136,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col4',
    headerName: 'Bank',
    minWidth: 193,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col5',
    headerName: 'No. of Transactions',
    minWidth: 176,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col6',
    headerName: 'Transactions (₦)',
    minWidth: 150,
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
    headerName: 'Status',
    minWidth: 123,
    flex: 1,
    headerClassName: 'grid-header',
    renderCell: params => {
      return (
        <span
          css={
            params.row.col8.toLowerCase() === 'active'
              ? tw`bg-[#E9FBF9] text-paysure-success-100 text-[10px] uppercase p-1 rounded`
              : tw`text-[#EDA95A] bg-[#FDF6EF] text-[10px] uppercase p-1 rounded`
          }
        >
          {params.row.col8}
        </span>
      )
    },
  },

  {
    field: 'col8',
    headerName: 'Date Added',
    minWidth: 163,
    flex: 1,
    headerClassName: 'grid-header',
    disableClickEventBubbling: true,
  },
  {
    field: 'col9',
    headerName: 'Action',
    minWidth: 100,
    flex: 1,
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
        <div tw="space-x-1">
          <button onClick={handleEdit}>
            <EditActionSVG />
          </button>

          {params.row.col7.toLowerCase() === 'active' && (
            <button onClick={handleView}>
              <UserWithNegative />
            </button>
          )}

          {params.row.col7.toLowerCase() === 'inactive' && (
            <button onClick={handleView}>
              <UserWithPositive />
            </button>
          )}

          <button onClick={handleView}>
            <Wallet />
          </button>
        </div>
      )
    },
  },
]

const Settlementcolumns = [
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
    minWidth: 167,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col3',
    headerName: 'Transaction ID',
    minWidth: 166,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col4',
    headerName: 'Amount',
    minWidth: 153,
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
    field: 'col7',
    headerName: 'Status',
    minWidth: 144,
    flex: 1,
    headerClassName: 'grid-header',
    renderCell: params => {
      return (
        <span
          css={
            params.row.col7.toLowerCase() === 'active'
              ? tw`bg-[#E9FBF9] text-paysure-success-100 text-[10px] uppercase p-1 rounded`
              : tw`text-[#EDA95A] bg-[#FDF6EF] text-[10px] uppercase p-1 rounded`
          }
        >
          {params.row.col7}
        </span>
      )
    },
  },
  {
    field: 'col8',
    headerName: 'Date Added',
    minWidth: 163,
    flex: 1,
    headerClassName: 'grid-header',
    disableClickEventBubbling: true,
    // renderCell: params => {
    //   return (
    //     <span css={[tw`bg-border2 text-paysure-primary-100 p-1 rounded`]}>
    //       {params.row.col8}
    //     </span>
    //   )
    // },
  },
  {
    field: 'col9',
    headerName: 'Actions',
    minWidth: 130,
    flex: 1,
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
        <div tw="space-x-1">
          {/* <button onClick={handleEdit}>
            <EditActionSVG />
          </button> */}

          <Link href="">
            <a tw="text-paysure-primary-100 cursor-pointer">View</a>
          </Link>
        </div>
      )
    },
  },
]

// Tailwind styles
const Header = tw.div`flex flex-col space-y-4 lg:(flex-row items-center justify-between space-y-0)`
const AvatarWrapper = tw.div`flex items-center space-x-3 lg:space-x-6`
const Avatar = tw.div``
const AvatarDetails = tw.div`space-y-1 lg:space-y-2.5`
const UserName = tw.h4`text-xl lg:(text-2xl) tracking-[-0.05em] text-paysure-text-100 leading-7`
const AgentsTerminalAmount = tw.p`text-xs lg:(text-sm) text-[#A6B7D4] tracking-[-0.05em]`
const ButtonWrapper = tw.div`hidden md:flex items-center space-x-3 lg:(space-x-2.5 hidden) xl:flex`
const MUIButton = tw(
  Button,
)`normal-case px-3 py-[13px] rounded-lg bg-[#E9FBF9] text-paysure-success-100 hover:(bg-paysure-success-100 text-white ring-2 ring-offset-2 ring-paysure-success-100)`
const Title = tw.h3`tracking-[-0.02em] text-gray-dark`
const UserInfoWrapper = tw.div`border-border mt-5 p-6 border rounded-lg w-full lg:(w-1/2 mt-10)`
const UserGrid = tw.div`mt-5 space-y-4 lg:(mt-10 space-y-6)`
const Label = tw.label`text-light-dark flex items-center tracking-[-0.02em]`
const LabelAns = tw.p` ml-2.5 text-paysure-text-100`
const WalletWrapper = tw.div`mt-10 p-4 space-y-1 rounded-xl lg:(py-10 px-8 space-y-4 rounded-[28px])`
const P = tw.p`leading-[19px] text-sm lg:text-base`
const Amount = tw.h4`text-4xl lg:text-[40px] leading-[48px] tracking-[-0.05em]`
UserGrid
const CusLabel = tw.label`text-[13px] text-[#454D54]`
const TextArea = tw.textarea`text-[13px] border border-[#E3E5E8] text-[#454D54] p-2.5 rounded w-full mt-1.5 focus:(outline-none ring-1 ring-border)`
const CheckLabel = tw.p`text-[13px] leading-[16px]`

export default AgentDashboard
