import React from 'react'
import tw from 'twin.macro'
import Image from 'next/image'
import { Button, IconButton, Chip, Menu, MenuItem } from '@mui/material'

import {
  DataGridViewTemp,
  HomeDisplayCard,
  Layout,
  Modal,
  NumberFormatter,
  ReceiptLabel,
  Receipt,
} from '..'

import ReactToPrint from 'react-to-print'
import CurrencyFormat from 'react-currency-format'
import { UserProfileSVG, Print, EllipsisSVG, ViewActionSVG } from '../SVGIcons'

const TerminalDashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [modalView, setModalView] = React.useState(false)
  const [modalPrint, setModalPrint] = React.useState(false)

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
      headerName: 'Type',
      minWidth: 227,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col3',
      headerName: 'Transaction Ref.',
      minWidth: 236,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col4',
      headerName: 'Amount',
      minWidth: 103,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col5',
      headerName: 'RRR',
      minWidth: 176,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col6',
      headerName: 'Status Code',
      minWidth: 150,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col7',
      headerName: 'Notification Time',
      minWidth: 144,
      flex: 1,
      headerClassName: 'grid-header',
    },
    {
      field: 'col8',
      headerName: 'Status',
      minWidth: 153,
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
      headerName: 'Action.',
      minWidth: 130,
      flex: 1,
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
          // Router.push(`/terminals/${thisRow.col1}`)
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
              <LastSeen>
                Jaja Wakachu
                <Chip
                  sx={tw`text-paysure-success-100 uppercase ml-2.5 bg-[#E9FBF9] h-auto p-1 rounded text-[10px] leading-[12px]`}
                  label="Active"
                />{' '}
              </LastSeen>
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
                <button onClick={handSetIsSuspendModalOpened}>
                  Update Terminal
                </button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <button onClick={handSetIsSuspendModalOpened}>
                  Unassign Terminal
                </button>
              </MenuItem>
            </Menu>
          </div>
        </div>

        {/* Action Buttons */}
        <ButtonWrapper>
          <MUIButton tw="text-paysure-success-100 bg-[#E9FBF9] hover:(bg-[#E9FBF9] ring-[#E9FBF9])">
            Update Terminal
          </MUIButton>
          <MUIButton>Unassign Terminal</MUIButton>
        </ButtonWrapper>
      </Header>

      {/* User information */}
      <UserInfoWrapper>
        <Title className="font-500">Terminal Information</Title>

        {/* User details */}
        <UserGrid>
          <Label>
            Serial Number
            <LabelAns>{userDetails.agent}</LabelAns>
          </Label>

          <Label>
            Plan
            <LabelAns>{userDetails.superAgent}</LabelAns>
          </Label>

          <Label>
            Bank
            <LabelAns>{userDetails.serialNumber}</LabelAns>
          </Label>

          <Label>
            Merchant
            <LabelAns>{userDetails.plan}</LabelAns>
          </Label>

          <Label>
            Nibbs Rate(%)
            <LabelAns>{userDetails.bank}</LabelAns>
          </Label>

          <Label>
            Last Transaction
            <LabelAns>{userDetails.lastTransaction}</LabelAns>
          </Label>
        </UserGrid>
      </UserInfoWrapper>

      <HomeDisplayCard data={temporalData} />

      {/* DataGrid */}
      <DataGridViewTemp
        limited
        link="/terminals/1/transactionLIst"
        title={`Transaction History`}
        rows={rows}
        columns={columns}
        hasFilterShowing
        showingDropdownData={dropdownData}
        hasExportBtn
        hasSearch
      />

      {/* View modal */}
      <Modal
        title="Transaction Details"
        setState={setModalView}
        state={modalView}
        buttonLabel="Print report"
        link="/terminals/1"
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

      {/* Print */}
      <div>
        <div tw="hidden">
          <Receipt ref={componentRef} />
        </div>
      </div>
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
const temporalData = [
  {
    amount: NumberFormatter(240),
    title: 'Total Number of Transactions',
  },
  {
    amount: NumberFormatter(20),
    title: 'Total Number of Successful Transactions',
  },
  {
    amount: NumberFormatter(40),
    title: 'Total Number of Failed Transactions',
  },
  {
    amount: NumberFormatter(24),
    title: 'Total Number of Reversed Transactions',
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
)`normal-case text-white bg-paysure-danger-100 px-3 py-[13px] rounded-lg hover:(bg-paysure-danger-100 ring-paysure-danger-100 ring-2 ring-offset-2)`
const Title = tw.h3`tracking-[-0.02em] text-gray-dark`
const UserInfoWrapper = tw.div`border-border mt-10 p-6 border rounded-lg`
const UserGrid = tw.div`grid mt-5 gap-4 lg:(grid-cols-2 mt-10 gap-8)`
const Label = tw.label`text-light-dark flex items-center tracking-[-0.02em]`
const LabelAns = tw.p`ml-2.5 text-paysure-text-100`

export default TerminalDashboard
