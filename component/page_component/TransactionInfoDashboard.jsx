import React from 'react'
import tw from 'twin.macro'
import { Button, IconButton, Chip, Menu, MenuItem } from '@mui/material'

import { DataGridViewTemp, HomeDisplayCard, Layout } from '..'
import { UserProfileSVG, Print, EllipsisSVG, ViewActionSVG } from '../SVGIcons'
import CurrencyFormat from 'react-currency-format'

const TransactionInfoDashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  // functions
  const open = Boolean(anchorEl)

  const handleBtnMenuShown = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handSetIsSuspendModalOpened = React.useCallback(() =>
    setIsSuspendAccountModalOpened(true),
  )

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
              <UserName className="font-bold">TID - U8329</UserName>
              <LastSeen>Jaja Wakachu</LastSeen>
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
                <button onClick={handSetIsSuspendModalOpened}>Print</button>
              </MenuItem>
            </Menu>
          </div>
        </div>

        {/* Action Buttons */}
        <ButtonWrapper>
          <MUIButton>Print</MUIButton>
        </ButtonWrapper>
      </Header>

      <div tw= "lg:(grid grid-cols-2 gap-8)">
        {/* Transaction information */}
        <UserInfoWrapper>
          <Title className="font-500">Transaction Information</Title>

          <UserGrid>
            <Label>
              Payment Date
              <LabelAns>{userDetails.agent}</LabelAns>
            </Label>

            <Label>
              custumer Name
              <LabelAns>{userDetails.superAgent}</LabelAns>
            </Label>

            <Label>
              Terminal ID
              <LabelAns>{userDetails.serialNumber}</LabelAns>
            </Label>

            <Label>
              RRR
              <LabelAns>{userDetails.plan}</LabelAns>
            </Label>

            <Label>
              Merchant ID
              <LabelAns>{userDetails.bank}</LabelAns>
            </Label>
          </UserGrid>
        </UserInfoWrapper>

        {/* Wallet information */}
        <UserInfoWrapper>
          <Title className="font-500">Wallet Information</Title>

          <UserGrid>
            <Label>
              Account Number
              <LabelAns>{userDetails.agent}</LabelAns>
            </Label>

            <Label>
              Created on
              <LabelAns>{userDetails.superAgent}</LabelAns>
            </Label>

            <Label>
              Available Balance
              <LabelAns>{userDetails.serialNumber}</LabelAns>
            </Label>

            <Label>
              Wallet ID
              <LabelAns>{userDetails.plan}</LabelAns>
            </Label>

            <Label>
              Cash back
              <LabelAns>{userDetails.bank}</LabelAns>
            </Label>
          </UserGrid>
        </UserInfoWrapper>
      </div>

      {/* DataGrid */}
      <DataGridViewTemp
        title={`Settlements`}
        rows={rows}
        columns={columns}
        hasMT
      />
    </Layout>
  )
}

// FIXME: Temp data (should be replaced with real data)
const userDetails = {
  agent: 'Bolarinwa Bimbola',
  superAgent: 'Jerome Bell',
  serialNumber: 'BA93493434',
  plan: 'Percentage plan 0.4',
  bank: 'Standard Chartered',
  merchant: 'Omosade Olugbale',
  nibbsRank: '32%',
  lastTransaction: 'Dec 31, 2019 06:33',
}

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
    col7: '443943043',
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
    col7: '443943043',
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
    headerName: 'Serial No.',
    minWidth: 236,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col4',
    headerName: 'Status',
    minWidth: 103,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col5',
    headerName: 'Type',
    minWidth: 176,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col6',
    headerName: 'Response',
    minWidth: 150,
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

        // Router.push(`/terminals/${thisRow.col1}`)
      }

      return <button tw="text-paysure-primary-100">View</button>
    },
  },
]

// Tailwind styles
const Header = tw.div`flex flex-col space-y-4 lg:(flex-row items-center justify-between space-y-0)`
const AvatarWrapper = tw.div`flex items-center space-x-3 lg:space-x-6`
const Avatar = tw.div``
const AvatarDetails = tw.div`space-y-1 lg:space-y-2.5`
const UserName = tw.h4`text-xl lg:(text-2xl) tracking-[-0.05em] text-paysure-text-100 leading-7`
const LastSeen = tw.p`text-xs lg:(text-sm) text-[#A6B7D4] tracking-[-0.05em]`
const ButtonWrapper = tw.div`hidden md:flex items-center space-x-3 lg:(space-x-2.5 hidden) xl:flex`
const MUIButton = tw(
  Button,
)`normal-case bg-[#F1E5FF] px-3 py-[13px] text-paysure-primary-100 rounded-lg hover:(bg-paysure-primary-100 text-white ring-paysure-primary-100 ring-2 ring-offset-2)`
const Title = tw.h3`tracking-[-0.02em] text-gray-dark`
const UserInfoWrapper = tw.div`border-border mt-10 p-6 border rounded-lg`
const UserGrid = tw.div`grid mt-5 gap-4`
const Label = tw.label`text-light-dark flex items-center tracking-[-0.02em]`
const LabelAns = tw.p`ml-2.5 text-paysure-text-100`

export default TransactionInfoDashboard
